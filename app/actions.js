"use server"
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


export async function getAllMarkers() {
    const data = await prisma.markers.findMany()
    return data
  }

  export async function addMarker(name,description,latitude,longitude) {
    const data = await prisma.markers.create({
        data: {
            name,
            description,          
            latitude,
            longitude
        },
      })
    return data
  }
