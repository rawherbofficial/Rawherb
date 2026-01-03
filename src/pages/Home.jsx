import { useEffect, useState } from 'react'
import PageWrapper from '../components/PageWrapper'

import ProductCard from '../components/ProductCard'
import '../App.css'

const images = [
    "/banner.webp",
    "/banner2.webp",
    "/banner.webp",
    "/banner2.webp",
    "/banner.webp",
    "/img.jpg"
]

function Home() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <PageWrapper>
            <div className="w-full overflow-x-hidden">

                {/* ✅ Carousel */}
                <div className="relative w-full lg:h-250 min-h-45 sm:min-h-65 md:min-h-105 overflow-hidden">

                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="carousel"
                            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000
              ${index === current ? "opacity-100" : "opacity-0"}`}
                        />
                    ))}

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-green-400 rounded-full px-3 py-1">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-3 h-3 rounded-full cursor-pointer
                ${index === current ? "bg-dark-green" : "bg-white/60"}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Featured Products */}
                <section className="max-w-7xl mx-auto px-4 py-8">
                    <h1 className="text-xl md:text-2xl font-semibold mb-6 text-dark-green">
                        Featured Products
                    </h1>

                    <div className="grid gap-5 md:gap-x-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center">
                        <ProductCard name="Ashwagandha" price={205} image={images[5]} />
                        <ProductCard name="Wish" price={50} image={images[5]} />
                        <ProductCard name="Kre" price={10} image={images[5]} />
                        <ProductCard name="Hik" price={30} image={images[5]} />
                    </div>
                </section>
            </div>
        </PageWrapper>
    )
}

export default Home