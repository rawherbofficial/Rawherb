import PageWrapper from '../components/PageWrapper.jsx'

function Return() {
    return (
        <PageWrapper>
            <div className="w-full flex justify-center font-semibold mt-5">
                <div className="py-5 px-5 flex flex-col leading-loose text-lg md:text-xl text-dark-green min-w-3/4 md:min-w-140 max-w-3xl">
                    <h1 className="text-center text-3xl mb-5">
                        🌿 RawHerb Return Policy
                    </h1>
                    <p>
                        At <strong>RawHerb</strong>, we take pride in offering <strong> raw, organic, and real</strong> wellness
                        products. Your satisfaction is our top priority. If you're not completely
                        happy with your purchase, we’re here to help.
                    </p>
                    <h1 className="text-3xl my-5">
                        ✅ Eligibility for Return:
                    </h1>
                    <ul className="list-disc pl-9">
                        <li>You may request a return within<strong> 2 days of delivery</strong>.</li>
                        <li>The item must be<strong> unused, unopened</strong>, and in its <strong> original packaging</strong>.</li>
                        <li>Only products purchased directly from <strong> www.rawherb.co.in</strong> are eligible.</li>
                    </ul>
                    <h1 className="text-3xl my-5">
                        ❌ Non-Returnable Items:
                    </h1>
                    <ul className="list-disc pl-9">
                        <li>Opened or used products.</li>
                        <li>Items not in original condition.</li>
                        <li>Products purchased on sale or as part of a combo.</li>
                        <li>Perishable or consumable items (due to hygiene and safety concerns).</li>
                    </ul>
                    <h1 className="text-3xl my-5">
                        🔁 Exchange Policy:
                    </h1>
                    <p>
                        We currently do not offer direct exchanges. You may return the original
                        item (if eligible) and place a new order separately.
                    </p>
                    <h1 className="text-3xl my-5">
                        💸 Refund Process:
                    </h1>
                    <ul className="list-disc pl-9">
                        <li>Once we receive and inspect your return, we’ll notify you via email.</li>
                        <li>If approved, your refund will be processed to your original payment method within <strong> 5–7 business days</strong>.</li>
                        <li>Shipping charges (if any) are <strong> non-refundable</strong>.</li>
                    </ul>
                    <h1 className="text-3xl my-5">
                        📦 Return Shipping:
                    </h1>
                    <p>
                        Customers are responsible for return shipping costs unless the product
                        was damaged or incorrect.
                    </p>
                    <h1 className="text-3xl my-5">
                        📩 How to Initiate a Return:
                    </h1>
                    <ol className="list-decimal pl-9 mb-5">
                        <li>Email us at <strong> support@rawherb.co.in </strong> with your order number and reason for return.</li>
                        <li>Wait for return approval and further instructions.</li>
                        <li>Pack the product securely and send it to the provided address.</li>
                    </ol>
                    <p>
                        <strong>Still have questions?</strong> Reach out to our friendly support team at
                        <strong>support@rawherb.co.in</strong> or call us at <strong>+91-7599951606</strong>. We're here to
                        help you on your natural wellness journey.
                    </p>
                </div>
            </div>
        </PageWrapper>
    )
}

export default Return