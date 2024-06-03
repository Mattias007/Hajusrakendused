


export default function Productitem({ product }) {
    return (
        <div className='m-2 bg-slate-200 fit'>
            <div key={product.id}>{product.name}</div>
            <p>{product.price}</p>
        </div>
    )
}