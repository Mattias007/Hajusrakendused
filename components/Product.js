import Link from 'next/link'


export default function Productitem({ product }) {
    return(
        <div className='m-2 bg-slate-200 fit'>
        <Link href={`/store/product/${product.id}`}>
         <div key={product.id}>{product.name}</div>
        </Link>
        <p>{product.price}</p>
        <Link href={`/store/product/${product.id}`}>
            <div key={product.id}>Add to Cart</div>
        </Link>
        </div>
    )
}