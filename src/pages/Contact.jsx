import PageWrapper from '../components/PageWrapper.jsx'

function Contact() {
    return (
        <PageWrapper>
            <div className="w-full flex justify-center text-center font-semibold mt-10">
                <div className="py-10 px-5 flex flex-col justify-center items-center text-dark-green min-w-3/4 md:min-w-150 max-w-4xl shadow-2xl/85 rounded-2xl">
                    <p>
                        You can meet us here or give us a call.
                    </p>
                    <div>
                        <h1 className="m-5 text-3xl">
                            Contact Information
                        </h1>
                        <strong className="text-2xl font-medium">
                            Rawherb Organics
                        </strong>
                        <br />
                        <p className="m-4">
                            Address:
                            <br />
                            Gali no.4, Shankar Vihar Colony,
                            <br />
                            Aligarh, Uttar Pradesh, 202002, India.
                        </p>
                        <p className="m-4">
                            Phone:
                            <br />
                            +91 7599951606
                        </p>
                        <p className="m-4">
                            Email:
                            <br />
                            support@rawherb.co.in
                        </p>
                    </div>
                    <div className="flex justify-around min-w-3/4 md:min-w-150 max-w-4xl shadow-lg/30 p-2">
                        <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d881.4309852261446!2d78.11075046658517!3d27.91044368413705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974bb07216b3103%3A0x39fd479130c3341e!2sRawherb%20Organics!5e0!3m2!1sen!2sin!4v1766824491092!5m2!1sen!2sin"
                            width="350" height="300" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </div>
        </PageWrapper>
    )
}

export default Contact