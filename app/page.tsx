import prisma from "@/app/lib/prisma";
import JobPostingsInterface from "@/app/interfaces/JobPostingsInterface";
import JobTable from "./components/JobTable";

export default async function Home() {
  const results = process.env.DATABASE_URL
    ? ((await prisma.job_postings.findMany({
        where: {
          json_response: {
            path: ["apply"],
            equals: "True",
          },
        },
      })) as Array<JobPostingsInterface>)
    : [];
    return (
      // <>Hi</>
      <JobTable descriptions={results}/>
    );
  }