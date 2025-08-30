import { useSearchParams } from "react-router"

const ProductListPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSortValueChange = (sortValue) => {
        searchParams.set('sort', sortValue)

        setSearchParams(searchParams)
    }

    return (
        <div>
            <h1>Product List Page</h1>
            <ul>
                <li>sort: {searchParams.get('sort')}</li>
                <li>Name: {searchParams.get('name')}</li>
            </ul>

            <div style={{display : 'flex', gap: '8px'}}>
            <button onClick={() => handleSortValueChange("price-desc")} >Sort price desc</button>

            <button onClick={() => handleSortValueChange("price-asc")} >Sort price asc</button>

            <button onClick={() => handleSortValueChange("popular")} >Sort most popular</button>
            </div>
        </div>
    )
}
export default ProductListPage