import { addStoreItme, getAllItems } from "../actions/store"
import Link from "next/link"
import ProductItem from "@/components/ProductItem"

export default async function Store(){
    const products = await getAllItems()

    return(
        <>
        {/* <form action={addStoreItme} className='bg-gray-200 w-1/4 p-2 flex flex-col gap-2 m-2 shadow rounded'>
        <h1>Add Store Item</h1>
        <input name='name' type='text'></input>
        <input name='description'  type='text'></input>
        <input name='price'  type='number'></input>
        <input name='countInStock'  type='number'></input>
        <button type='submit'>Submit</button>
        </form> */}

        <div className="grid grid-cols-3 gap-2">
        {products.map((product) =>(
            <ProductItem key={product.id} product={product} />
        ))}
        </div>
        <Link href="store/cart">Cart</Link>

        </>
    )
}