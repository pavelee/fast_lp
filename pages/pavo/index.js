import { useState } from "react";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";

const NavBar = (props) => {
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);
    return (
        <div className="p-4 fixed w-full bg-white">
            <div className="container mx-auto max-w-screen-lg">
                <div className="float-left pt-1">
                    <img className="w-32" src={"/pages/pavo/images/logo.svg"} />
                </div>
                <div className="float-right md:hidden">
                    <div
                        className="w-10 cursor-pointer opacity-70 pt-2"
                        onClick={() => {
                            setShowBurgerMenu(!showBurgerMenu);
                        }}
                    >
                        <div className="h-1 w-full bg-black rounded-lg"></div>
                        <div className="h-1 mt-1 w-full bg-black ounded-lg"></div>
                        <div className="h-1 mt-1 w-full bg-black ounded-lg"></div>
                    </div>
                </div>
                <div className="md:float-right pt-8 md:pt-0">
                    <ul
                        className={
                            (!showBurgerMenu ? "hidden" : "") +
                            " bg-white p-3  rounded-lg md:w-auto md:block md:bg-inherit"
                        }
                    >
                        <li className="md:inline md:mr-3">Home</li>
                        <li className="md:inline md:mr-3">Features</li>
                        <li className="md:inline md:mr-3">Details</li>
                        <li className="md:inline md:mr-3">Pricing</li>
                        <li className="md:inline md:mr-3">Download</li>
                        <li className="md:inline md:mr-3">
                            <AiFillAndroid className="inline" />
                        </li>
                        <li className="md:inline md:mr-3">
                            <AiFillApple className="inline" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Block1 = (props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <div className="text-center mb-16 md:mb-0 md:text-left md:mt-40 sm:mt-0">
                    <h1 className="font-bold text-5xl mb-8">
                        Team management mobile application
                    </h1>
                    <p className="mt-3 text-gray-700 mb-8">
                        Start getting things done together with your team based
                        on Pavo's revolutionary team management features
                    </p>
                    <div className="mt-3">
                        <button className="bg-red-700 p-3 mr-5 text-white rounded-xl">
                            <AiFillAndroid className="inline" /> Download
                        </button>
                        <button className="bg-blue-700 p-3 text-white rounded-xl">
                            <AiFillApple className="inline" /> Download
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-[url('/pages/pavo/images/header-smartphone.png')] bg-div h-[600px]"></div>
        </div>
    );
};

const Block2 = (props) => {
    return (
        <div className="text-center text-3xl">
            <p>
                Team management mobile apps don’t get better than Pavo. It’s
                probably the best app in the world for this purpose. Don’t
                hesitate to give it a try today and you will fall in love with
                it
            </p>
        </div>
    );
};

const Block3 = (props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="lp-block2-card">
                <div className="bg-[url('/pages/pavo/images/features-icon-1.svg')] lp-block2-cover"></div>
                <div className="lp-block2-title">Platform Integration</div>
                <div className="lp-block2-subtitle">
                    You sales force can use the app on any smartphone platform
                    without compatibility issues
                </div>
            </div>
            <div className="lp-block2-card">
                <div className="bg-[url('/pages/pavo/images/features-icon-2.svg')] lp-block2-cover"></div>
                <div className="lp-block2-title">Easy On Resources</div>
                <div className="lp-block2-subtitle">
                    Works smoothly even on older generation hardware due to our
                    optimization efforts
                </div>
            </div>
            <div className="lp-block2-card">
                <div className="bg-[url('/pages/pavo/images/features-icon-3.svg')] lp-block2-cover"></div>
                <div className="lp-block2-title">Great Performance</div>
                <div className="lp-block2-subtitle">
                    Optimized code and innovative technology insure no delays
                    and ultra-fast responsiveness
                </div>
            </div>
            <div className="lp-block2-card">
                <div className="bg-[url('/pages/pavo/images/features-icon-4.svg')] lp-block2-cover"></div>
                <div className="lp-block2-title">Multiple Languages</div>
                <div className="lp-block2-subtitle">
                    Choose from one of the 40 languages that come pre-installed
                    and start selling smarter
                </div>
            </div>
            <div className="lp-block2-card">
                <div className="bg-[url('/pages/pavo/images/features-icon-5.svg')] lp-block2-cover"></div>
                <div className="lp-block2-title">Free Updates</div>
                <div className="lp-block2-subtitle">
                    Don't worry about future costs, pay once and receive all
                    future updates at no extra cost
                </div>
            </div>
            <div className="lp-block2-card">
                <div className="bg-[url('/pages/pavo/images/features-icon-6.svg')] lp-block2-cover"></div>
                <div className="lp-block2-title">Community Support</div>
                <div className="lp-block2-subtitle">
                    Register the app and get acces to knowledge and ideas from
                    the Pavo online community
                </div>
            </div>
        </div>
    );
};

const Block4 = (props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="lp-block4-content">
                <div className="lp-block4-title">Results driven ground breaking technology</div>
                <div className="lp-block4-text">
                    <p>
                        Based on our team's extensive experience in developing
                        line of business applications and constructive customer
                        feedback we reached a new level of revenue.
                    </p>
                    <p>
                        We enjoy helping small and medium sized tech businesses
                        take a shot at established Fortune 500 companies
                    </p>
                </div>
            </div>
            <div className="bg-[url('/pages/pavo/images/details-1.jpg')] bg-div h-[400px]">

            </div>
        </div>
    );
};

const Pavo = () => {
    return (
        <div
            // className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-no-repeat bg-auto"
            style={{
                background:
                    "linear-gradient(rgba(197, 234, 249, 1), rgba(255, 255, 255, 1))",
            }}
        >
            <div className="h-16">
                <NavBar />
            </div>
            <div className="container max-w-screen-lg mx-auto p-4">
                <div className="lp-block">
                    <Block1 />
                </div>
                <div className="lp-block">
                    <Block2 />
                </div>
                <div className="lp-block">
                    <Block3 />
                </div>
                <div className="lp-block">
                    <Block4 />
                </div>
                <div className="lp-block">
                    <Block4 />
                </div>
            </div>
        </div>
    );
};

export default Pavo;
