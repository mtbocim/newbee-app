import prisma from "@/app/lib/prisma";
import JobPostingsInterface from "@/app/interfaces/JobPostingsInterface";
import JobTable from "@/app/components/JobTable";

export default async function Listings({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query = searchParams?.q || "";
  const results = process.env.DATABASE_URL
    ? ((await prisma.job_postings.findMany({
        where: {
          AND: [
            {
              json_response: {
                path: ["apply"],
                equals: "True",
              },
            },
            {
              OR: [
                query
                  ? {
                      job_description: {
                        search: `%${query}%`,
                      },
                    }
                  : {},
                query
                  ? {
                      json_response: {
                        path: ["tech_stack"],
                        array_contains: [`%${query}%`],
                      },
                    }
                  : {},
              ],
            },
          ],
        },
      })) as Array<JobPostingsInterface>)
    : [];
  return (
    <>
      <JobTable descriptions={results} />
    </>
  );
}
