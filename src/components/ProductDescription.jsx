import { useParams, useNavigate } from "react-router-dom"
import Products from "../data/products.json"
import PageWrapper from "../components/PageWrapper"
import ImageCarousel from "./ImageCarousel"

function ProductDescription() {
    const { id } = useParams()
    const navigate = useNavigate()

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

    const handleBackClick = () => {
        navigate(-1)
    }

    const handleBuyNowClick = () => {
        const phoneNumber = "917599951606"
        const message = "Hello, I want to buy:\n" + "Product: " + product.name + "\nPrice: " + product.price

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(url, "_blank")
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
                    <div className="my-2 flex flex-wrap gap-2 font-semibold">
                        {product.badges?.map((badge, i) => (
                            <span
                                key={i}
                                className="text-md bg-green-100 text-dark-green px-3 py-1 rounded-full"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>

                    {/* Highlights */}
                    <div className="mt-2 flex flex-wrap gap-2 font-semibold text-dark-green/90 text-lg py-3">
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
            <div className="flex justify-center items-center">
                <button onClick={handleBackClick} className="relative inline-flex items-center justify-start px-12 py-3 overflow-hidden text-lg font-medium text-dark-green border-2 border-dark-green rounded-full hover:text-white group hover:bg-gray-50 hover:cursor-pointer m-2">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-dark-green opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute left-2 flex items-center justify-center w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5 rotate-180 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative">Go Back</span>
                </button>
                <button onClick={handleBuyNowClick} className="relative inline-flex items-center justify-start px-12 py-3 overflow-hidden text-lg font-medium text-dark-green border-2 border-dark-green rounded-full hover:text-white group hover:bg-gray-50 hover:cursor-pointer m-2">
                    <span className="absolute left-0 block w-full h-0 transition-all bg-dark-green opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute left-2 flex items-center justify-center w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4 M7 13L5.4 5 M9 21a1 1 0 100-2 1 1 0 000 2 m8 0a1 1 0 100-2 1 1 0 000 2"></path></svg>
                    </span>
                    <span className="relative">Buy Now</span>
                </button>
            </div>
        </PageWrapper>
    )
}

export default ProductDescription
