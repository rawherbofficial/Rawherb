import { Link } from "react-router-dom"
import PageWrapper from '../components/PageWrapper.jsx'

function PrivacyPolicy() {
    return (
        <PageWrapper>
            <div className="w-full flex justify-center font-semibold mt-5">
                <div className="px-5 flex flex-col leading-loose text-lg md:text-xl text-dark-green min-w-3/4 md:min-w-140 max-w-2xl">
                    <h1 className="text-center text-3xl mb-5">
                        Privacy policy
                    </h1>
                    <p className="my-5">
                        Last updated: October 14, 2025
                    </p>
                    <p>
                        Rawherb (“we”, “us”, or “our”) operates this website and online store, including all related information, content, features, tools, products, and services (collectively, the “Services”) to provide you with a curated shopping experience.
                    </p>
                    <p>
                        This Privacy Policy describes how we collect, use, disclose, store, and protect your personal information when you visit, use, or make a purchase from our website, interact with our Services, or otherwise communicate with us.
                    </p>
                    <p>
                        If there is a conflict between our Terms of Service and this Privacy Policy, this Privacy Policy will control with respect to the collection, processing, and disclosure of your personal information.
                    </p>
                    <p>
                        Please read this Privacy Policy carefully. By accessing or using any of the Services, you acknowledge that you have read and understood this Privacy Policy.
                    </p>
                    <h1 className="text-3xl my-5">
                        Personal Information We Collect or Process
                    </h1>
                    <p>
                        When we use the term <strong>“personal information”</strong>, we mean information that identifies, relates to, describes, or can reasonably be linked to you. This does not include anonymized or de-identified information.
                    </p>
                    <p>
                        Depending on how you interact with our Services, we may collect the following categories of personal information:
                    </p>
                    <ol className="list-decimal">
                        <li className="text-3xl my-5">
                            Contact Information
                        </li>
                        <ul className="list-disc ml-5">
                            <li>Name</li>
                            <li>Billing address</li>
                            <li>Shipping address</li>
                            <li>Phone number</li>
                            <li>Email address</li>
                        </ul>
                        <li className="text-3xl my-5">
                            Payment & Transaction Information
                        </li>
                        <ul className="list-disc ml-5">
                            <li>Payment method details (processed securely through third-party payment providers)</li>
                            <li>Transaction history</li>
                            <li>Order confirmations and payment status</li>
                            <div className="bg-gray-300 p-3">
                                <strong className="text-red-600">Note: We do not store full credit/debit card numbers on our servers.</strong>
                            </div>
                        </ul>
                        <li className="text-3xl my-5">
                            Account Information
                        </li>
                        <ul className="list-disc ml-5">
                            <li>Username and password</li>
                            <li>Preferences and settings</li>
                        </ul>
                        <li className="text-3xl my-5">
                            Shopping Activity
                        </li>
                        <ul className="list-disc ml-5">
                            <li>Products viewed, added to cart, wishlisted, purchased, returned, or exchanged</li>
                            <li>Order history</li>
                        </ul>
                        <li className="text-3xl my-5">
                            Communications
                        </li>
                        <ul className="list-disc ml-5">
                            <li>Messages, emails, or inquiries you send to us</li>
                            <li>Customer support interactions</li>
                        </ul>
                        <li className="text-3xl my-5">
                            Device & Technical Information
                        </li>
                        <ul className="list-disc ml-5">
                            <li>IP address</li>
                            <li>Browser type</li>
                            <li>Device type</li>
                            <li>Operating system</li>
                            <li>Network information</li>
                        </ul>
                        <li className="text-3xl my-5">
                            Usage Information
                        </li>
                        <ul className="list-disc ml-5">
                            <li>Pages visited</li>
                            <li>Time spent on the website</li>
                            <li>Interaction patterns</li>
                        </ul>
                    </ol>
                    <h1 className="text-3xl my-5">
                        Sources of Personal Information
                    </h1>
                    <p>
                        We collect personal information from the following sources:
                    </p>
                    <ul>
                        <li>
                            <strong>Directly from you</strong> when you create an account, place an order, contact us, or use our Services
                        </li>
                        <li>
                            <strong>Automatically</strong> through cookies, log files, and similar technologies
                        </li>
                        <li>
                            <strong>From service providers</strong> who help us operate our website and Services
                        </li>
                        <li>
                            <strong>From third-party partners</strong>, where permitted by law
                        </li>
                    </ul>
                    <h1 className="text-3xl my-5">
                        How We Use Your Personal Information
                    </h1>
                    <p>
                        We use your personal information for the following purposes:
                    </p>
                    <ol className="list-decimal">
                        <li className="text-3xl my-5">
                            To Provide and Improve Our Services
                        </li>
                        <ul>
                            <li>Process orders and payments</li>
                            <li>Deliver products</li>
                            <li>Manage accounts</li>
                            <li>Remember preferences</li>
                            <li>Improve website performance and user experience</li>
                        </ul>
                        <li className="text-3xl my-5">
                            Marketing and Promotions
                        </li>
                        <ul>
                            <li>Send promotional emails, offers, and updates</li>
                            <li>Display relevant advertisements</li>
                            <li>Inform you about new products or services</li>
                            <div className="bg-gray-300 p-3">
                                <strong className="">You can opt out of marketing communications at any time.</strong>
                            </div>
                        </ul>
                        <li className="text-3xl my-5">
                            Security and Fraud Prevention
                        </li>
                        <ul>
                            <li>Protect against fraud, misuse, or unauthorized access</li>
                            <li>Maintain website and transaction security</li>
                        </ul>
                        <li className="text-3xl my-5">
                            Customer Support and Communication
                        </li>
                        <ul>
                            <li>Respond to inquiries</li>
                            <li>Provide assistance and updates related to your orders or account</li>
                        </ul>
                        <li className="text-3xl my-5">
                            Legal and Compliance Purposes
                        </li>
                        <ul>
                            <li>Comply with applicable laws and regulations</li>
                            <li>Enforce our terms and policies</li>
                            <li>Respond to lawful requests from authorities</li>
                        </ul>
                    </ol>
                    <h1 className="text-3xl my-5">
                        How We Share Personal Information
                    </h1>
                    <p>
                        We may share your personal information only when necessary and for legitimate purposes, including:
                    </p>
                    <ul>
                        <li>
                            <strong>Service providers</strong> (payment processors, hosting providers, analytics services, shipping partners)
                        </li>
                        <li>
                            <strong>Marketing and advertising partners</strong>, where permitted by law
                        </li>
                        <li>
                            <strong>Legal authorities</strong>, when required by law or legal process
                        </li>
                        <li>
                            Business transfers, such as a merger or sale of assets
                        </li>
                    </ul>
                    <p>
                        All third parties are required to protect your information and use it only for the purposes for which it was disclosed.
                    </p>
                    <h1 className="text-3xl my-5">
                        Cookies and Tracking Technologies
                    </h1>
                    <p>
                        We use cookies and similar technologies to:
                    </p>
                    <ul>
                        <li>Improve website functionality</li>
                        <li>Analyze traffic and usage</li>
                        <li>Personalize your experience</li>
                    </ul>
                    <p>
                        You can control cookies through your browser settings.
                    </p>
                    <h1 className="text-3xl my-5">
                        Third-Party Links
                    </h1>
                    <p>
                        Our Services may contain links to third-party websites or platforms. We are not responsible for the privacy practices or content of those third parties. We encourage you to review their privacy policies before providing any information.
                    </p>
                    <h1 className="text-3xl my-5">
                        Children’s Privacy
                    </h1>
                    <p>
                        Our Services are not intended for children under the age of majority. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us to request deletion.
                    </p>
                    <h1 className="text-3xl my-5">
                        Data Security and Retention
                    </h1>
                    <p>
                        We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, no system is completely secure.
                    </p>
                    <p>
                        We retain personal information only as long as necessary to:
                    </p>
                    <ul>
                        <li>Fulfill orders</li>
                        <li>Provide Services</li>
                        <li>Comply with legal obligations</li>
                        <li>Resolve disputes</li>
                    </ul>
                    <h1 className="text-3xl my-5">
                        Your Rights and Choices
                    </h1>
                    <p>
                        Depending on your location, you may have the right to:
                    </p>
                    <ul>
                        <li>Access your personal information</li>
                        <li>Correct inaccurate information</li>
                        <li>Request deletion of your data</li>
                        <li>Request a copy of your data (data portability)</li>
                        <li>Opt out of marketing communications</li>
                    </ul>
                    <p>
                        To exercise your rights, please contact us using the details below. We may verify your identity before processing your request.
                    </p>
                    <h1 className="text-3xl my-5">
                        International Data Transfers
                    </h1>
                    <p>
                        Your personal information may be stored or processed outside your country of residence. Where required, we use appropriate safeguards to protect your data in accordance with applicable laws.
                    </p>
                    <h1 className="text-3xl my-5">
                        Changes to This Privacy Policy
                    </h1>
                    <p>
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Last updated” date.
                    </p>
                    <h1 className="text-3xl my-5">
                        Contact Us
                    </h1>
                    <p>
                        If you have questions about this Privacy Policy or wish to exercise your rights, please contact us <Link to="/contact" className="underline">here</Link>.
                    </p>
                </div>

            </div>
        </PageWrapper>
    )
}

export default PrivacyPolicy