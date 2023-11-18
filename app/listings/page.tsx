import prisma from "@/app/lib/prisma";
import JobPostingsInterface from "@/app/interfaces/JobPostingsInterface";
import JobTable from "@/app/components/JobTable";

export default async function Listings({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query = searchParams?.q as string || "";
  const queryParse = query.split(" ").join(" & ")
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
                queryParse
                  ? {
                      job_description: {
                        search: `%${queryParse}%`,
                      },
                    }
                  : {},
                queryParse
                  ? {
                      json_response: {
                        path: ["tech_stack"],
                        array_contains: [`%${queryParse}%`],
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
