import prisma from "@/app/lib/prisma";
import JobPostingsInterface from "@/app/interfaces/JobPostingsInterface";

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
      // <div>
      //   {results &&
      //     results.map(result => (
      //       <div key={result.id}> {/* Assuming there is an 'id' field */}
      //         <h2>{result.job_title}</h2>
      //         <p>{result.company_name}</p>
      //       </div>
      //     ))}
      // </div>
      <>Hi</>
    );
  }