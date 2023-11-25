import prisma from "@/app/lib/prisma";
import JobListingsInterface from "@/app/interfaces/JobListingsInterface";
import JobTable from "@/app/components/JobTable";
import SearchBar from "../components/SearchBar";
import HomeHero from "../components/HomeHero";

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
      })) as Array<JobListingsInterface>)
    : [];
  return (
    <>
      <HomeHero />
      <SearchBar/>
      <JobTable descriptions={results} />
    </>
  );
}
