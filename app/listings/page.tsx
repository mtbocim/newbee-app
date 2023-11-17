import prisma from "@/app/lib/prisma";
import JobPostingsInterface from "@/app/interfaces/JobPostingsInterface";
import JobTable2 from "@/app/components/JobTable2"

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
    <>
      <JobTable2 descriptions={results}/>
    </>
  );
}
