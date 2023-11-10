import prisma from '@/app/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
    let results = await prisma.job_postings.findMany({where:{
        json_response:{
            path: ['apply'],
            equals:'True'
        }
    }})
    return NextResponse.json(results)
}
