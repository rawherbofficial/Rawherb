import PageWrapper from '../components/PageWrapper.jsx'

function Faq() {
    return (
        <PageWrapper>
            <div className="w-full flex justify-center font-semibold mt-5">
                <div className="py-5 px-5 flex flex-col leading-loose text-lg md:text-xl text-dark-green min-w-3/4 md:min-w-140 max-w-3xl">
                    <h1 className="text-center text-2xl mb-5">
                        Frequently Asked Questions (FAQs)
                    </h1>
                    <h1 className="my-5">
                        1. What is RawHerb?
                    </h1>
                    <p className="mb-5">
                        RawHerb is a wellness brand that offers <strong>real, raw, and organic herbal products</strong> designed to support a healthier lifestyle using nature’s finest ingredients.
                    </p>
                    <h1 className="mb-5">
                        2. Are RawHerb products 100% natural?
                    </h1>
                    <p className="mb-5">
                        Yes! All of our products are made from <strong>100% raw, natural, and organic ingredients</strong> without any additives, preservatives, or synthetic chemicals.
                    </p>
                    <h1 className="mb-5">
                        3. Do you offer certification for your organic products?
                    </h1>
                    <p className="mb-5">
                        Yes, our products come with the necessary <strong>organic and FSSAI certifications</strong> to ensure safety, purity, and compliance with regulatory standards.
                    </p>
                    <h1 className="mb-5">
                        4. How should I store RawHerb powders and herbs?
                    </h1>
                    <p className="mb-5">
                        Store them in a cool, dry place away from direct sunlight. Reseal the package properly after every use to maintain freshness and potency.
                    </p>
                    <h1 className="mb-5">
                        5. How long will it take to receive my order?
                    </h1>
                    <p className="mb-5">
                        We usually ship within 1-2 business days. Delivery across India typically takes <strong>3–7 working days</strong> depending on your location.
                    </p>
                    <h1 className="mb-5">
                        6. What if I receive a damaged or incorrect product?
                    </h1>
                    <p className="mb-5">
                        If you receive a damaged or wrong item, please <strong>contact us within 48 hours</strong> of delivery with photos, and we will arrange a replacement or refund.
                    </p>
                    <h1 className="mb-5">
                        7. Do you offer international shipping?
                    </h1>
                    <p className="mb-5">
                        Currently, we are focused on deliveries within India. International shipping options will be available soon — stay tuned!
                    </p>
                    <h1 className="mb-5">
                        8. How can I contact RawHerb?
                    </h1>
                    <p className="mb-5">
                        You can reach out to us via our Contact Us page or email us directly at <a href="mailto:support@rawherb.co.in" className=" underline">support@rawherb.co.in</a>.
                    </p>
                </div>
            </div>
        </PageWrapper>
    )
}

export default Faq