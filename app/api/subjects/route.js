import { NextResponse } from 'next/server'
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


export async function GET(request) {
    let limit = 100
    console.log(request.nextUrl.searchParams.get("limit"))
    if (request.nextUrl.searchParams.get("limit") !=  null){
        console.log("yes")
        limit = parseInt(request.nextUrl.searchParams.get("limit"))
    }
    const all = await prisma.my_favorite_subject.findMany({take: limit,})
    const res = {"data" : all}
    return NextResponse.json(res, { status: 400 })
}
