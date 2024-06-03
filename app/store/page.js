import { addStoreItme, getAllItems } from "../actions/store"
import Link from "next/link"
import ProductItem from "@/components/ProductItem"

export default async function Store(){
    const products = await getAllItems()

    return(
        <>
        <form action={addStoreItme} className='bg-gray-200 w-1/4 p-2 flex flex-col gap-2 shadow rounded'>
        <h1>Add Store Item</h1>
        <input name='name' type='text'></input>
        <input name='description'  type='text'></input>
        <input name='price'  type='number'></input>
        <input name='countInStock'  type='number'></input>
        <button type='submit'>Submit</button>
        </form>

        <div>
        {products.map((product) =>(
            <ProductItem key={product.id} product={product} />
        ))}
        </div>
        <Link href="store/cart">Cart</Link>

        </>
    )
}