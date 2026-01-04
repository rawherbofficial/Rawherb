import ProductCard from "../components/ProductCard"
import PageWrapper from "../components/PageWrapper"
import { useState } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import products from '../data/products.json'

function Products() {
    const [sortBy, setSortBy] = useState("az")
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q") || ""
    const navigate = useNavigate()

    const filteredProducts = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === "az") return a.name.localeCompare(b.name)
        if (sortBy === "za") return b.name.localeCompare(a.name)
        if (sortBy === "low") return a.price - b.price
        if (sortBy === "high") return b.price - a.price
        return 0
    })

    const handleProductClick = (product) => {
        navigate(`/product/${product.id}`)
    }

    return (
        <PageWrapper>
            <div className="max-w-7xl mx-auto px-4 py-10">

                {/* Header */}
                <h1 className="text-3xl font-semibold text-dark-green mb-8">
                    Products
                </h1>

                {/* Filter + Sort */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-sm font-semibold">
                    <div className="flex items-center gap-4 text-dark-green">
                        <label className="text-sm">Sort by:</label>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="border border-dark-green rounded-md px-2 py-1"
                        >
                            <option value="az">Alphabetically, A–Z</option>
                            <option value="za">Alphabetically, Z–A</option>
                            <option value="low">Price, Low to High</option>
                            <option value="high">Price, High to Low</option>
                        </select>

                        <span>{sortedProducts.length} products</span>
                    </div>

                </div>

                {/* Products Grid */}
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {sortedProducts.map(product => (
                        <ProductCard key={product.id} {...product} onClick={() => handleProductClick(product)} />
                    ))}
                </div>

            </div>
        </PageWrapper>
    )
}

export default Products
