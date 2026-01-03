import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className="bg-[#2f2f2f] text-white mt-12 font-semibold">
                <div className="max-w-7xl mx-auto px-6 py-12">

                    {/* Top Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                        {/* About Us */}
                        <div>
                            <h3 className="text-3xl font-semibold text-dark-green border-b border-gray-600 pb-2 mb-4">
                                About Us
                            </h3>
                            <ul className="space-y-3 text-sm w-fit">
                                <li className="cursor-pointer hover:text-gray-300 hover:underline">
                                    <Link to="/about">
                                        About Us
                                    </Link>
                                </li>
                                <li className="cursor-pointer hover:text-gray-300 hover:underline">
                                    <Link to="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h3 className="text-3xl font-semibold text-dark-green border-b border-gray-600 pb-2 mb-4">
                                Social
                            </h3>
                            <ul className="space-y-3 text-sm w-fit">
                                <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300 hover:underline">
                                    <a href="https://www.instagram.com/rawherb.official/" target='_blank' rel='noopener noreferrer' className='flex items-center gap-2'>
                                        <img src="/insta-logo.png" className="w-6" alt="Instagram" />
                                        Instagram
                                    </a>
                                </li>
                                <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300 hover:underline">
                                    <a href="https://www.youtube.com/@rawherbofficial" target='_blank' rel='noopener noreferrer' className='flex items-center gap-2'>
                                        <img src="/youtube-logo.png" className="w-6" alt="Youtube" />
                                        YouTube
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-3xl font-semibold text-dark-green border-b border-gray-600 pb-2 mb-4">
                                Quick Links
                            </h3>
                            <ul className="space-y-3 text-sm w-fit">
                                <li className="cursor-pointer hover:text-gray-300 hover:underline">
                                    <Link to="/return-policy">
                                        Return & Refund Policy
                                    </Link>
                                </li>
                                <li className="cursor-pointer hover:text-gray-300 hover:underline">
                                    <Link to="/faq">
                                        FAQ
                                    </Link>
                                </li>
                                <li className="cursor-pointer hover:text-gray-300 hover:underline">
                                    <Link to="/privacy-policy">
                                        Privacy
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Get in touch */}
                        <div>
                            <h3 className="text-3xl font-semibold text-dark-green border-b border-gray-600 pb-2 mb-4">
                                Get in touch
                            </h3>

                            <p className="text-sm leading-6 mb-4">
                                Gali no. 4, Shankar Vihar Colony,<br />
                                Aligarh, Uttar Pradesh, 202002,<br />
                                India.
                            </p>

                            <ul className="space-y-3 text-sm w-fit">
                                <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300 hover:underline">
                                    <a href="tel:+917599951606" className='flex items-center gap-2'>
                                        <img src="/phone.png" alt="Phone" className='w-4' />
                                        +91 7599951606
                                    </a>
                                </li>
                                <li className="text-xs text-white">
                                    10:00 AM to 6:30 PM (Mon - Fri)
                                </li>
                                <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300 hover:underline">
                                    <a href="mailto:support@rawherb.co.in" className='flex items-center gap-2'>
                                        <img src="/msg.png" alt="Mail" className='w-4' />
                                        support@rawherb.co.in
                                    </a>
                                </li>
                                <li className="flex items-center gap-2 w-fit cursor-pointer hover:text-gray-300 hover:underline">
                                    <a href="https://wa.me/917599951606" target='_blank' rel='noopener noreferrer' className='flex items-center gap-2'>
                                        <img src="/whatsapp-logo.png" alt="WhatsApp" className='w-4' />
                                        WhatsApp
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-300">
                        Copyright © 2025, <span className="font-semibold text-white">Rawherb Organics</span>
                    </div>

                </div>
            </footer>

        </>
    )
}

export default Footer