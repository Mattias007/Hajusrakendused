import Productitem from "@/components/Product"
import {data} from "@/utils/data"
import Link from 'next/link'
export default function Store(){
    const { products } = data
    return(
        <>
        {products.map((product) =>(
            <Productitem key={product.id} product={product} />
        ))}
            <a className="p-2" href="/api/auth/logout">Logout</a>

        </>
    )
}