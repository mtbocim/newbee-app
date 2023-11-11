import JobListings from "@/app/components/JobListings";
import prisma from "@/app/lib/prisma";
import JobPostingsInterface from "@/app/interfaces/JobPostingsInterface";

export default async function Postings(){
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
      return(
        <div>
            {/* Posting components here */}
             <JobListings jobListingData={results} />
        </div>
      )
}