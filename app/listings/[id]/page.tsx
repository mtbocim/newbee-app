import prisma from "@/app/lib/prisma";
import JobListingsInterface from "@/app/interfaces/JobListingsInterface";
import { redirect } from "next/navigation";

export default async function Listing({ params }: { params: { id: string } }) {
  const id = Number(params.id);

  if (isNaN(id)) {
    redirect("/listings");
  }

  try {
    const result = (await prisma.job_postings.findFirst({
      where: {
        id: id,
      },
    })) as JobListingsInterface;

    if (result === null) {
      //Add handling here for if result comes back empty.
      //Back to listings page? No result found error with button?
      return (
        <div>
          No such job found
          <br />
          <a href="/listings" style={{ color: "blue" }}>
            Back to listings
          </a>
        </div>
      );
    }

    return (
      <div>
        {/* Job listing components here */}
        <h1>{result.job_title}</h1>
        <h3>{result.company_name}</h3>
        <div>{result.json_response.salary}</div>
        <div>{result.json_response.tech_stack.join(', ')}</div>
        <div>{result.job_description}</div>
        <a href={result.job_url}>click here to apply </a>
      </div>
    );
  } catch {
    // Not sure where to send people or what to display if query fails at the moment
  }
}
