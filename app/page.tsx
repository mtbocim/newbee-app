import JobListings from "./components/JobListings";
import prisma from "./lib/prisma";
import JobPostingsInterface from "./interfaces/JobPostingsInterface";

export default async function Home() {
  const results = process.env.DATABASE_URL && await prisma.job_postings.findMany({where:{
    json_response:{
        path: ['apply'],
        equals:'True'
    }
}}) as Array<JobPostingsInterface>

  return(
    <div className="card w-96 bg-base-100 shadow-xl">
      Home page components here
      <JobListings jobListingData={results}/>
    </div>
  );
}


