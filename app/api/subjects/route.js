import { NextResponse } from 'next/server'
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


export async function GET(request) {
    const all = await prisma.my_favorite_subject.findMany({take: parseInt(request.nextUrl.searchParams.get("limit")),})
    return NextResponse.json(all, { status: 400 })
}
