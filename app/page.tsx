import prisma from "@/app/lib/prisma";
import JobPostingsInterface from "@/app/interfaces/JobPostingsInterface";
import { Button } from "@mui/material";
import Link from "next/link";

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
      <Link href="/listings" passHref>
        <Button variant="contained" style={{ backgroundColor: "#ffbe0b" }}>
          View Listings
        </Button>
      </Link>
    </>
  );
}
