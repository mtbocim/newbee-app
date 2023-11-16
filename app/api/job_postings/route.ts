import prisma from '@/app/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
import JobPostingsInterface from '@/app/interfaces/JobPostingsInterface';
export async function GET() {
    const results = process.env.DATABASE_URL
    ? ((await prisma.job_postings.findMany({
        where: {
          OR: [
            {
              job_description: {
                search: "%react%",
              },
            },
            {
              AND: [
                {
                  json_response: {
                    path: ["apply"],
                    equals: "True",
                  },
                },
                {
                  json_response: {
                    path: ["tech_stack"],
                    array_contains: ["%react%"],
                    
                  },
                },
              ],
            },
          ],
        },
      })) as Array<JobPostingsInterface>)
    : [];
    return NextResponse.json(results)
}
