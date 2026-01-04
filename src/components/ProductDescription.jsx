import { useParams } from "react-router-dom"
import Products from "../data/products.json"
import PageWrapper from "../components/PageWrapper"
import ImageCarousel from "./ImageCarousel"

function ProductDescription() {
    const { id } = useParams()

    const product = Products.find(p => p.id === Number(id))

    if (!product) {
        return (
            <PageWrapper>
                <div className="text-center py-20 text-red-600 font-semibold text-3xl">
                    Product not found
                </div>
            </PageWrapper>
        )
    }

    return (
        <PageWrapper>
            <div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">

                {/* ✅ Carousel */}
                <div className="md:col-span-1">
                    <ImageCarousel images={product.images} />
                </div>

                {/* Details */}
                <div>
                    <h1 className="text-4xl font-bold text-dark-green">
                        {product.name}
                    </h1>

                    <div className="mt-6 font-semibold">
                        {product.oldPrice && (
                            <span className="line-through text-gray-400 mr-3">
                                Rs. {product.oldPrice}
                            </span>
                        )}
                        <span className="text-2xl text-dark-green">
                            Rs. {product.price}
                        </span>
                    </div>

                    {/* Description */}
                    <div className="mt-4 text-dark-green/80 font-semibold text-lg">
                        {product.description.map((para, index) => (
                            <p key={index} className="py-2">{para}</p>
                        ))}
                    </div>

                    {/* Badges */}
                    <div className="mt-4 flex flex-wrap gap-2 font-semibold">
                        {product.badges.map((badge, i) => (
                            <span
                                key={i}
                                className="text-md bg-green-100 text-dark-green px-3 py-1 rounded-full"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>

                    {/* Highlights */}
                    <div className="mt-4 flex flex-wrap gap-2 font-semibold text-dark-green/90 text-lg py-3">
                        {product.highlights}
                    </div>

                    {/* Benefits */}
                    <div>
                        <h3 className="mt-6 text-xl font-semibold text-dark-green">Benefits</h3>
                        <ul className="list-disc pl-5 mt-2 space-y-2 text-dark-green/80 text-lg font-semibold">
                            {product.benefits.map((benefit, i) => (
                                <li key={i}>{benefit}</li>
                            ))}
                        </ul>

                    </div>


                </div>
            </div>
        </PageWrapper>
    )
}

export default ProductDescription
