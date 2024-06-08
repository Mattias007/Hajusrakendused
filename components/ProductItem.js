import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AddToCart from './AddToCart'

export default function ProductItem({ product }) {
  return (
    <div className="card">
      {/* <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          width={400}
          height={400}
          alt={product.name}
          className="rounded shadow object-cover h-96 w-full"
        />
      </Link> */}
      <div className="flex flex-col items-center justify-center p-5 border rounded bg-green-300">
        <h2 className="text-lg">{product.name}</h2>
        <p className="mb-2">{product.description}</p>
        <p>In Stock: {product.countInStock}</p>
        <p>${product.price}</p>
        <AddToCart
          showQty={false}
          product={product}
          increasePerClick={true}
          redirect={false}
        />
      </div>
    </div>
  )
}
