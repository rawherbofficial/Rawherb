import PageWrapper from '../components/PageWrapper.jsx'

function About() {
    return (
        <PageWrapper>
            <div className="text-dark-green">
                <div className="flex flex-col justify-center items-center">
                    <div className="text-center mt-5">
                        <h1 className="text-dark-green font-semibold text-3xl m-3">🪴 About Us</h1>
                        <p className="text-green-800 font-semibold text-xl mx-3">Welcome to RAWHERB - Where Nature Meets Wellness</p>
                    </div>
                    <div className="sm:w-3/4 md:w-2/3 lg:w-1/2 text-lg font-medium flex flex-col justify-center items-center text-left p-10">
                        <img src="friends.webp" alt="2 Friends dicussing an idea" className="w-64 mb-5 rounded-xl border-3 border-dark-green" />
                        <div className="w-full">
                            <p className="p-2">We’re two friends from the heart of <b>Aligarh</b>, united by a shared vision:
                                to bring back the power of nature into everyday life. In a world flooded
                                with synthetic and chemical-based supplements, we felt the need for a
                                cleaner, safer, and more honest alternative.
                            </p>
                            <p className="p-2">
                                <b>That’s how RAWHERB was born</b> — not just as a brand, but as a movement
                                towards mindful and natural living.
                            </p>
                        </div>
                        <h1 className="w-full my-2 mb-5 text-2xl text-left">🌿 Our Journey</h1>
                        <img src="plant.webp" alt="A growing plant" className="w-64 mb-5 rounded-xl border-2 border-dark-green" />
                        <div>
                            <p>
                                What started as a small idea in our hometown has grown into a
                                purpose-driven herbal and organic supplement brand, committed
                                to:
                            </p>
                            <ul className="px-10 list-disc">
                                <li>✅ Quality</li>
                                <li>✅ Purity</li>
                                <li>✅ Transparency</li>
                            </ul>
                        </div>
                        <h1 className="w-full my-2 mb-5 text-2xl text-left">🌱 Our Mission</h1>
                        <img src="labtube.webp" alt="Herb with medicines" className="w-64 mb-5 rounded-xl border-2 border-dark-green" />
                        <div>
                            <p>
                                Our mission is simple — to provide natural, plant-based substitutes that support your health without compromise.
                            </p>
                            <p className="font-bold my-4">
                                We say NO to:
                            </p>
                            <ul className="px-10 list-disc text-red-500">
                                <li>❌ Harmful Chemicals</li>
                                <li>❌ Artificial Additives</li>
                                <li>❌ Empty Promises</li>
                            </ul>
                            <p className="font-bold my-4">
                                And YES to:
                            </p>
                            <ul className="px-10 list-disc">
                                <li>✅ 100% Natural Herbs</li>
                                <li>✅ Time-Tested Formulas</li>
                                <li>✅ Honest Wellness</li>
                            </ul>
                        </div>
                        <h1 className="w-full my-2 mb-5 text-2xl text-left">🤝 Join the Movement</h1>
                        <img src="sustainable.webp" alt="A growing plant" className="w-64 mb-5 rounded-xl border-2 border-dark-green" />
                        <div>
                            <p>
                                Join us on a journey to rediscover traditional wisdom backed by modern science.
                                With <b>RAWHERB</b>, you’re not just choosing a supplement — you're choosing a cleaner
                                lifestyle, a healthier body, and a more natural world.
                            </p>
                            <div className="flex flex-col justify-center items-center mt-5 font-bold">
                                <p>
                                    🌸 Pure. Honest. Natural.
                                </p>
                                <p>
                                    That’s the RAWHERB promise.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}

export default About