import prisma from '@/app/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import JobListingsInterface from '@/app/interfaces/JobListingsInterface';
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');

    const results = process.env.DATABASE_URL
        ? ((await prisma.job_postings.findMany({
            where: {
                OR: [
                    {
                        job_description: {
                            search: `%${query}%`,
                        },
                    },
                    {
                        AND: [
                            {
                                json_response: {
                                    path: ['apply'],
                                    equals: 'True',
                                },
                            },
                            {
                                json_response: {
                                    path: ['tech_stack'],
                                    array_contains: [`%${query}%`],
                                },
                            },
                        ],
                    },
                ],
            },
        })) as Array<JobListingsInterface>)
        : [];
    return NextResponse.json(results);
}
