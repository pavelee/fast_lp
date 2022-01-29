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

const MainBlock = (props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gab-4">
            <div>
                <div className="text-center mb-5 md:mb-0 md:text-left md:mt-40 sm:mt-0">
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
            <div>
                <img
                    className="m-auto"
                    src="/pages/pavo/images/header-smartphone.png"
                />
            </div>
        </div>
    );
};

const TextBlock = (props) => {
    return (
        <div className="text-center text-3xl text-gray-800">
            <p>
                Team management mobile apps don’t get better than Pavo. It’s
                probably the best app in the world for this purpose. Don’t
                hesitate to give it a try today and you will fall in love with
                it
            </p>
        </div>
    );
};

const Pavo = () => {
    return (
        <div
            style={{
                background:
                    "linear-gradient(rgba(197, 234, 249, 1), rgba(255, 255, 255, 1))",
            }}
        >
            <div className="h-16">
                <NavBar />
            </div>
            <div className="container max-w-screen-lg mx-auto p-4">
                <div className="mt-32 mb-32">
                    <MainBlock />
                </div>
                <div className="mt-32 mb-32">
                    <TextBlock />
                </div>
                <div className="mt-5">
                    <MainBlock />
                </div>
                <div className="mt-5">
                    <MainBlock />
                </div>
            </div>
        </div>
    );
};

export default Pavo;
