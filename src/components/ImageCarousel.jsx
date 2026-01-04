import { useState } from "react"

function ImageCarousel({ images }) {
    const [current, setCurrent] = useState(0)

    const prev = () => {
        setCurrent((current - 1 + images.length) % images.length)
    }

    const next = () => {
        setCurrent((current + 1) % images.length)
    }

    return (
        <div className="w-full">

            {/* Main Image */}
            <div className="relative flex justify-center items-center border-2 border-dark-green rounded-xl p-4">
                <button
                    onClick={prev}
                    className="absolute left-2 shadow p-2 rounded-full text-dark-green hover:cursor-pointer"
                >
                    ᐊ
                </button>

                <img
                    src={images[current]}
                    alt="product"
                    className="max-h-96 object-contain"
                />

                <button
                    onClick={next}
                    className="absolute right-2 bg-white shadow p-2 rounded-full text-dark-green hover:cursor-pointer"
                >
                    ᐅ
                </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4 justify-center">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        onClick={() => setCurrent(index)}
                        className={`h-16 w-16 object-contain border rounded cursor-pointer
                        ${index === current ? "border-dark-green" : "opacity-60"}`}
                        alt="thumbnail"
                    />
                ))}
            </div>
        </div>
    )
}

export default ImageCarousel
