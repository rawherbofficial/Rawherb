import { useParams, useNavigate } from "react-router-dom";
import Products from "../data/products.json";
import PageWrapper from "../components/PageWrapper";
import ImageCarousel from "./ImageCarousel";
import { useState } from "react";

function ProductDescription() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [coupon, setCoupon] = useState("");
    const [discount, setDiscount] = useState(0);
    const [message, setMessage] = useState("");

    const product = Products.find((p) => p.id === Number(id));

    const COUPON_PRODUCT_ID = 9; // <-- Bahubali product id
    const isCouponAllowed = product?.id === COUPON_PRODUCT_ID;

    if (!product) {
        return (
            <PageWrapper>
                <div className="text-center py-20 text-red-600 font-semibold text-3xl">
                    Product not found
                </div>
            </PageWrapper>
        );
    }

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleBuyNowClick = () => {
        if (coupon && discount === 0) {
            alert("Invalid coupon applied");
            return;
        }

        const phoneNumber = "917599951606";

        const finalPrice = product.price - discount;

        let whatsappMessage =
            "Hello,\n" +
            "I would like to place an order for the following product:\n" +
            `Product: ${product.name}\n` +
            `MRP: ₹${product?.oldPrice}\n`;

        if (discount > 0) {
            whatsappMessage +=
                `Coupon Applied: BAHUBALI5\n` + `Discount: -₹${discount}\n`;
        }

        whatsappMessage += `Final Price: ₹${finalPrice}\n`;

        whatsappMessage += "Kindly confirm the availability of this product and let me know the next steps for completing the order.\n" + "Thank You!"

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(url, "_blank");
    };

    const applyCoupon = () => {
        if (!isCouponAllowed) {
            setDiscount(0);
            setMessage("❌ Coupon not applicable for this product");
            return;
        }

        const code = coupon.toUpperCase();

        if (code !== "BAHUBALI5") {
            setDiscount(0);
            setMessage("❌ Invalid coupon code");
            return;
        }

        const discountAmount = (product.price * 5) / 100;

        setDiscount(discountAmount);
        setMessage(`✅ 5% discount applied! You saved ₹${discountAmount}`);
    };

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

                        {isCouponAllowed && (
                            <span className="ml-3 text-sm bg-green-100 text-dark-green px-3 py-1 rounded-full">
                                Use BAHUBALI5 & save 5%
                            </span>
                        )}

                        {isCouponAllowed && (
                            <section className="max-w-7xl mx-auto px-4 py-6 text-dark-green">
                                <h2 className="text-lg font-semibold mb-3">
                                    Apply Coupon
                                </h2>

                                <div className="flex gap-3 max-w-md">
                                    <input
                                        type="text"
                                        placeholder="Enter coupon code"
                                        value={coupon}
                                        onChange={(e) =>
                                            setCoupon(e.target.value)
                                        }
                                        className="flex-1 border border-dark-green px-3 py-2 rounded-md focus:outline-dark-green"
                                    />

                                    <button
                                        onClick={applyCoupon}
                                        className="bg-dark-green text-white px-4 py-2 rounded-md hover:opacity-90"
                                    >
                                        Apply
                                    </button>
                                </div>

                                {message && (
                                    <p className="mt-2 text-sm font-medium">
                                        {message}
                                    </p>
                                )}

                                {coupon && (
                                    <div className="mt-4 font-semibold">
                                        <p>Subtotal: ₹{product.price}</p>
                                        <p>Discount: -₹{discount}</p>
                                        <p className="text-lg">
                                            Total: ₹{product.price - discount}
                                        </p>
                                    </div>
                                )}
                            </section>
                        )}
                    </div>

                    {/* Description */}
                    <div className="mt-4 text-dark-green/80 font-semibold text-lg">
                        {product.description.map((para, index) => (
                            <p key={index} className="py-2">
                                {para}
                            </p>
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
                        <h3 className="mt-6 text-xl font-semibold text-dark-green">
                            Benefits
                        </h3>
                        <ul className="list-disc pl-5 mt-2 space-y-2 text-dark-green/80 text-lg font-semibold">
                            {product.benefits.map((benefit, i) => (
                                <li key={i}>{benefit}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* COD Info Section*/}
            <div className="max-w-5xl gap-10 mx-auto px-5 text-dark-green/80 text-lg font-semibold">
                <div className="mx-auto md:mx-30 my-auto">
                    <p className="mt-6 text-xl font-semibold text-dark-green">
                        🚚 Cash on Delivery (COD) Available
                    </p>
                    <p> Shop with Confidence!</p>
                    <p> ✅ Cash on Delivery (COD) Available </p>
                    <p>✅ Pay Only When Your Order Arrives</p>
                    <p>✅ Fast & Secure Delivery Across India</p>
                    <p>
                        ✅ Easy Ordering • Trusted Service • Premium Quality
                        Products
                    </p>
                    <p>
                        Note: COD is available on eligible PIN codes. Additional
                        charges may apply in some locations.
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <button
                    onClick={handleBackClick}
                    className="relative inline-flex items-center justify-start px-12 py-3 overflow-hidden text-lg font-medium text-dark-green border-2 border-dark-green rounded-full hover:text-white group hover:bg-gray-50 hover:cursor-pointer m-2"
                >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-dark-green opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute left-2 flex items-center justify-center w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg
                            className="w-5 h-5 rotate-180 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                        </svg>
                    </span>
                    <span className="relative">Go Back</span>
                </button>
                <button
                    onClick={handleBuyNowClick}
                    className="relative inline-flex items-center justify-start px-12 py-3 overflow-hidden text-lg font-medium text-dark-green border-2 border-dark-green rounded-full hover:text-white group hover:bg-gray-50 hover:cursor-pointer m-2"
                >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-dark-green opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute left-2 flex items-center justify-center w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4 M7 13L5.4 5 M9 21a1 1 0 100-2 1 1 0 000 2 m8 0a1 1 0 100-2 1 1 0 000 2"
                            ></path>
                        </svg>
                    </span>
                    <span className="relative">Buy Now</span>
                </button>
            </div>
        </PageWrapper>
    );
}

export default ProductDescription;
