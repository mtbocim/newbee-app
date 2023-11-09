import prisma from '@/app/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
    let results = await prisma.job_postings.findMany()
    return NextResponse.json(results)
}
