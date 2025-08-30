import { useParams } from "react-router"

const ProductDetailPage = () => {
    const params = useParams()
    return (
        <div>
            <h1>Product Detail Page</h1>
            <h3>{params.productSlug}</h3>
        </div>
    )
}
export default ProductDetailPage