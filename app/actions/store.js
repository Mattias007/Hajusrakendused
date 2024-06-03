"use server"
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


export async function getAllItems() {
  "use server"

    let data = await prisma.storeitems.findMany()

    data.forEach(element => {
      delete element.createdAt
      delete element.updatedAt

    });

    return data
  }

export async function addStoreItme(formData) {
    "use server"
  
      const data = await prisma.storeitems.create({
        data: {
          name: formData.get('name'),
          description: formData.get('description'),
          price: parseInt(formData.get('price')),
          countInStock: parseInt(formData.get('countInStock')),

        },
      })
      return data
    }

    export async function checkout(formData) {
      "use server"

        return t  
      }
      