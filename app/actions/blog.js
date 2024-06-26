"use server"


const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


export async function getAllPosts() {

    let data = await prisma.blogposts.findMany({
      include: {
        blogcomments: true,
      },
    }
    )
    return data
}


export async function addPost(formData) {

    const data = await prisma.blogposts.create({
      data: {
        name: formData.get('name'),
        description: formData.get('description'),
      },
    })
    return data
} 

export async function deletePost(formData) {

    const data = await prisma.blogposts.delete({
        where: {
            id: parseInt(formData.get('id')),
          },
    })
    return data
  }  

export async function updatedPost(formData) {

    const data = await prisma.blogposts.update({
      where: {
        id: parseInt(formData.get('id')),
      },
      data: {
        name: formData.get('name'),
        description: formData.get('description'),
      }
    })
    return data
  }

export async function addComment(formData) {

    const data = await prisma.blogcomments.create({
      data: {
        name: formData.get('name'),
        description: formData.get('description'),
        blogpost: {
          connect: {id: parseInt(formData.get('id'))}
        }
      },
    })
    return data
  }
  

export async function getPostComments(id) {

    const data = await prisma.blogcomments.findMany({
      data: {
        name: formData.get('name'),
        description: formData.get('description'),
        blogpost: {
          connect: {id: parseInt(formData.get('id'))}
        }
      },
    })
    return data
  }
  
export async function deleteComments(formData) {
    const data = await prisma.blogcomments.delete({
        where: {
            id: parseInt(formData.get('id')),
          },
    })
  
    return data
  }  