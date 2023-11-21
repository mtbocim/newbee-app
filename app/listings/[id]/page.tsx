import prisma from "@/app/lib/prisma";
import JobPostingsInterface from "@/app/interfaces/JobPostingsInterface";
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
    })) as JobPostingsInterface;

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
        Hi :-)
        <br />
        {
          result?.job_title /*Placeholder line to see listing is correctly queried*/
        }
      </div>
    );
  } catch {
    // Not sure where to send people or what to display if query fails at the moment
  }
}
