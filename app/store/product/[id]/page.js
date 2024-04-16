import { data } from '@/utils/data'

export default function ProductDetails({ params: { id } }) {
    const product = data.products.find((x) => x.id === id)
    if (!product) {
      return <div>Product Not Found</div>
    }
    return(
        <div>{JSON.stringify(product)}</div>
    )
}