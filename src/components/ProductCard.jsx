function ProductCard({ name, image, price, oldPrice, sale, onClick }) {
    return (
        <div onClick={onClick} className="relative h-90 w-64 border-5 p-2 border-dark-green rounded-xl bg-white cursor-pointer hover:scale-105 transition-transform">
            <div className="shadow-lg/80 rounded-lg">
                {/* Sale badge */}
                {sale && (
                    <span className="absolute top-4 right-4 bg-pink-700 border-2 border-pink-700 text-white text-xs px-3 py-1 z-30 rounded-full">
                        Sale
                    </span>
                )}

                {/* Image */}
                <div className="h-56 flex items-center justify-center">
                    <img
                        src={image}
                        alt={name}
                        className="max-h-full object-contain"
                    />
                </div>
            </div>

            <div className="p-2">
                {/* Name */}
                <h3 className="mt-4 text-sm font-medium text-dark-green text-center">
                    {name}
                </h3>

                {/* Price */}
                <div className="mt-2 text-center">
                    {oldPrice && (
                        <span className="text-sm text-gray-400 line-through mr-2">
                            Rs. {oldPrice}
                        </span>
                    )}
                    <span className="text-lg font-semibold text-dark-green">
                        Rs. {price}
                    </span>
                </div>
            </div>

        </div>
    )
}

export default ProductCard
