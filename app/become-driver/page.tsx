import Image from "next/image";
import "@fontsource/montserrat/900.css";

export default function Driver() {
    return (
        <div>
            <header
                id="driver"
                className="relative h-[100vh] flex flex-col justify-center items-center text-center px-4"
            >
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    style={{ zIndex: -1 }}
                >
                    <source src="/assets/video-driver.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark Overlay */}
                <div className="h-[100vh] absolute inset-0 bg-black opacity-80" style={{ zIndex: -1 }} />

                {/* Main Content */}
                <div className="relative z-10">
                    {/* Main Heading */}
                    <h1 className="font-[900] text-4xl md:text-5xl lg:text-6xl text-white text-shadow-black text-left px-4">
                        <span className="block text-7xl md:text-8xl lg:text-9xl mb-2">
                            iPick Driver.
                        </span>
                        <span className="block text-green-700 transform transition-all duration-1000">Drive & Earn.</span>
                    </h1>

                    {/* Download Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
                        <a
                            href="https://play.google.com/store/apps/details?id=ipick.driver.com&pcampaignid=web_share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80"
                        >
                            <Image
                                src="/androidDownload.svg"
                                alt="Download on Google Play"
                                width={180}
                                height={60}
                                className="w-44 sm:w-48 md:w-52"
                            />
                        </a>

                        <a
                            href="https://apps.apple.com/ph/app/ipick-driver/id6747301801"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80"
                        >
                            <Image
                                src="/iosDownload.svg"
                                alt="Download on the App Store"
                                width={180}
                                height={60}
                                className="w-44 sm:w-48 md:w-52"
                            />
                        </a>
                    </div>
                </div>
            </header>
        </div>
    )
}