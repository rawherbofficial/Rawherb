function ProductCard({ name, image, price, oldPrice, sale }) {
    return (
        <div className="relative w-64 border-5 p-2 border-dark-green rounded-xl bg-white">
            <div className="shadow-lg/80 rounded-lg">
                {/* Sale badge */}
                {sale && (
                    <span className="absolute top-3 right-3 bg-pink-700 text-white text-xs px-3 py-1 rounded-full">
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
                            Rs. {oldPrice}.00
                        </span>
                    )}
                    <span className="text-lg font-semibold text-dark-green">
                        Rs. {price}.00
                    </span>
                </div>
            </div>

        </div>
    )
}

export default ProductCard
