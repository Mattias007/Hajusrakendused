"use server"
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



export async function getAllMarkers() {
  let data = await prisma.markers.findMany()

  data.forEach(e => {
    e.latitude = e.latitude.toString()
    e.longitude = e.longitude.toString()
  });

  return data
}
export async function addMarker(formData) {

  const data = await prisma.markers.create({
    data: {
      name: formData.get('name'),
      description: formData.get('description'),
      latitude: parseFloat(formData.get('latitude')),
      longitude: parseFloat(formData.get('longitude'))
    },
  })

  return "succsess"
}


export async function deleteMarker(formData) {

  const data = await prisma.markers.delete({
    where: {
      id: parseInt(formData.get('id')),
    },
  })
  return "succsess"
}

export async function updatedMarker(formData) {

  const data = await prisma.markers.update({
    where: {
      id: parseInt(formData.get('id')),
    },
    data: {
      name: formData.get('name'),
      description: formData.get('description'),
    }
  })
  return "succsess"
}


