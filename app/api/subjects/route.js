import { NextResponse } from 'next/server'
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


export async function GET(request) {
    console.log(request.nextUrl.searchParams.pathname)
    const all = await prisma.my_favorite_subject.findMany()
    return NextResponse.json(all, { status: 400 })
}

export async function POST(request) {

    const data = await request.json();
    console.log(data);
    await prisma.my_favorite_subject.create({
        data: {
          title: 'test',
          price: 1,
        },
      })
    return NextResponse.json("LOL", { status: 400 })
}