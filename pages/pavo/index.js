import { useState } from "react";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import {
    FaFacebookF,
    FaTwitter,
    FaPinterestP,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";

/**
 * file:///Users/pciosek/projects/cool_html_css_templates/pavo/web/index.html
 */

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
            <div className="bg-[url('/pages/pavo/images/header-smartphone.png')] bg-div h-[400px] md:h-[600px]"></div>
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
                <div className="lp-block4-title md:pt-20">
                    Results driven ground breaking technology
                </div>
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
            <div className="bg-[url('/pages/pavo/images/details-1.jpg')] bg-div h-[400px]"></div>
        </div>
    );
};

const Block5 = (props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="lp-block4-content">
                <div className="lp-block4-title md:pt-20">
                    Instant results for the marketing department
                </div>
                <div className="lp-block4-text">
                    <p>
                        <ul>
                            <li>
                                Features that will help you and your marketers
                            </li>
                            <li>
                                Smooth learning curve due to the knowledge base
                            </li>
                            <li>
                                Ready out-of-the-box with minor setup settings
                            </li>
                        </ul>
                    </p>
                    <p>
                        <button className="border p-3 pr-5 pl-5 rounded-xl mr-3 bg-[#594cda] text-white">
                            Lightbox
                        </button>
                        <button className="border border-dark-900 p-3 pr-5 pl-5 rounded-xl bg-white">
                            Details
                        </button>
                    </p>
                </div>
            </div>
            <div className="bg-[url('/pages/pavo/images/details-2.jpg')] bg-div h-[400px]"></div>
        </div>
    );
};

const Block6 = (props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="lp-block4-content">
                <div className="lp-block4-title md:pt-20">
                    Platform integration and life time free updates
                </div>
                <div className="lp-block4-text">
                    <p>
                        Get a glimpse of what this app can do for your marketing
                        automation and understand why current users are so
                        excited when using Pavo together with their teams.
                    </p>
                    <p>
                        We will promptly answer any questions and honor your
                        requests based on the service level agreement
                    </p>
                </div>
            </div>
            <div className="bg-[url('/pages/pavo/images/details-3.jpg')] bg-div h-[400px]"></div>
        </div>
    );
};

const Block7 = (props) => {
    const stats = [
        {
            c: 231,
            d: "Happy Users",
        },
        {
            c: 385,
            d: "Issues Solved",
        },
        {
            c: 195,
            d: "Good Reviews",
        },
        {
            c: 127,
            d: "Case Studies",
        },
        {
            c: 211,
            d: "Orders Received",
        },
    ];

    return (
        <div className="md:grid md:grid-cols-5 md:gap-20">
            {stats.map((stat) => (
                <div className="mb-10 md:mb-0">
                    <div className="text-center font-bold text-6xl mb-3">
                        {stat.c}
                    </div>
                    <div className="text-center text-[#6b747b]">{stat.d}</div>
                </div>
            ))}
        </div>
    );
};

const Block8 = (props) => {
    const testimonials = [
        {
            i: "pages/pavo/images/testimonial-1.jpg",
            t: `"It's been so fun to work with Pavo, I've managed to integrate it properly into my business flow and it's great"`,
            a: "Jude Thorn - Designer",
        },
        {
            i: "pages/pavo/images/testimonial-2.jpg",
            t: `"We were so focused on launching as many campaigns as
        possible that we've forgotten to target our loyal
        customers"`,
            a: "Roy Smith - Developer",
        },
        {
            i: "pages/pavo/images/testimonial-3.jpg",
            t: `"I've been searching for a tool like Pavo for so long. I love the reports it generates and the amazing high accuracy"`,
            a: "Marsha Singer - Marketer",
        },
        {
            i: "pages/pavo/images/testimonial-4.jpg",
            t: `"It's been so fun to work with Pavo, I've managed to integrate it properly into my business flow and it's great"`,
            a: "Tim Shaw - Designer",
        },
        {
            i: "pages/pavo/images/testimonial-5.jpg",
            t: `"Searching for a great prototyping and layout design app was difficult but thankfully I found app suite quickly"`,
            a: "Lindsay Spice - Marketer",
        },
        {
            i: "pages/pavo/images/testimonial-6.jpg",
            t: `"The app support team is amazing. They've helped me with some issues and I am so grateful to the entire team"`,
            a: "Ann Blake - Developer",
        },
    ];

    return (
        <div className="">
            <div className="text-center font-bold text-4xl mb-16">
                What do users think about Pavo
            </div>
            <div className="grid grid-cols-3 gap-8 gap-y-8">
                {testimonials.map((t) => (
                    <div>
                        <div className="mb-3">
                            <img
                                className="rounded-full h-[100px] m-auto"
                                src={t.i}
                            />
                        </div>
                        <div className="text-center text-[#6b747b] mb-3">
                            <p className="italic">{t.t}</p>
                        </div>
                        <div className="text-center font-bold">
                            <p>{t.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Block9 = (props) => {
    const pricings = [
        {
            m: "Standard",
            p: 29,
            d: "This basic package covers the marketing needs of smallstartups",
            l: (
                <ul>
                    <li>List building and relations</li>
                    <li>Seamless platform integration</li>
                    <li>Great performance on devices</li>
                    <li>Community support and videos</li>
                </ul>
            ),
        },
        {
            m: "Advanced",
            p: 39,
            d: "This is a more advanced package suited for medium companies",
            l: (
                <ul>
                    <li>List building and relations</li>
                    <li>Seamless platform integration</li>
                    <li>Great performance on devices</li>
                    <li>Community support and videos</li>
                </ul>
            ),
        },
        {
            m: "Complete",
            p: 49,
            d: "This is a comprehensive package designed for big organizations",
            l: (
                <ul>
                    <li>List building and relations</li>
                    <li>Seamless platform integration</li>
                    <li>Great performance on devices</li>
                    <li>Community support and videos</li>
                </ul>
            ),
        },
    ];

    return (
        <div>
            <div className="text-white text-center mb-16">
                <div className="font-bold text-4xl mb-5">
                    Pricing options for all budgets
                </div>
                <div>
                    Our pricing plans are setup in such a way that any user can
                    start enjoying Pavo without worrying so much about costs.
                    They are flexible and work for any type of industry
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {pricings.map((pricing) => (
                    <div className="bg-white border rounded-xl p-8 text-center">
                        <div className="text-[#eb427e] mb-8 text-3xl uppercase font-bold">
                            {pricing.m}
                        </div>
                        <div className="mb-8">
                            <div>
                                <span className="text-4xl">$</span>
                                <span className="text-8xl">{pricing.p}</span>
                            </div>
                            <div className="text-[#6b747b]">monthly</div>
                        </div>
                        <div className="text-[#6b747b] mb-8">{pricing.d}</div>
                        <div className="text-center md:text-left text-[#6b747b] mb-8">
                            {pricing.l}
                        </div>
                        <div>
                            <button className="border p-3 pr-5 pl-5 rounded-xl mr-3 bg-[#594cda] text-white">
                                Download
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Block10 = (props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="bg-[url('/pages/pavo/images/conclusion-smartphone.png')] bg-div h-[600px]"></div>
            <div className="lp-block4-content">
                <div className="lp-block4-title md:pt-32">
                    Team management mobile applications don’t get much better
                    than Pavo. Download it today
                </div>
                <div className="lp-block4-text text-center md:text-left">
                    <p>
                        <button className="bg-red-700 p-3 mr-5 text-white rounded-xl">
                            <AiFillAndroid className="inline" /> Download
                        </button>
                        <button className="bg-blue-700 p-3 text-white rounded-xl">
                            <AiFillApple className="inline" /> Download
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

const Block11 = (props) => {
    const socials = [
        {
            i: <FaFacebookF />,
        },
        {
            i: <FaTwitter />,
        },
        {
            i: <FaPinterestP />,
        },
        {
            i: <FaInstagram />,
        },
        {
            i: <FaYoutube />,
        },
    ];
    return (
        <div>
            <div className="text-center font-bold text-xl">
                Pavo is a mobile application for marketing automation and you
                can reach the team at{" "}
                <a href={"mailto:email@domain.com"} className={"text-blue-700"}>
                    email@domain.com
                </a>
            </div>
            <div className="mt-5 flex justify-center gab-4">
                {socials.map((social) => {
                    return (
                        <div className="p-5 mr-5 border rounded-xl text-xl">
                            {social.i}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const Block12 = (props) => {
    return (
        <div className="text-[#6b747b]">
            <div className="flex justify-center">
                <div className="mr-5">Article Details</div>
                <div className="mr-5">Terms and Conditions</div>
                <div className="mr-5">Privacy Policy</div>
            </div>
            <div className="flex justify-center mt-5">
                <div>Copyright © Your name</div>
            </div>
        </div>
    );
};

const Pavo = () => {
    return (
        <div
        // className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-no-repeat bg-auto"
        // style={{
        //     background:
        //         "linear-gradient(rgba(197, 234, 249, 1), rgba(255, 255, 255, 1))",
        // }}
        >
            <div className="h-16">
                <NavBar />
            </div>
            <div className="container max-w-screen-lg mx-auto pr-4 pl-4">
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
                    <Block5 />
                </div>
                <div className="lp-block">
                    <Block6 />
                </div>
                <div className="lp-block">
                    <Block7 />
                </div>
            </div>
            <div className="bg-[#f1f9fc] pt-16 pb-16">
                <div className="container max-w-screen-lg mx-auto pr-4 pl-4">
                    <Block8 />
                </div>
            </div>
            <div className="pricing-background pt-16 pb-16">
                <div className="container max-w-screen-lg mx-auto pr-4 pl-4">
                    <Block9 />
                </div>
            </div>
            <div className="pt-16 pb-16">
                <div className="container max-w-screen-lg mx-auto pr-4 pl-4">
                    <Block10 />
                </div>
            </div>
            <div className="pt-16 pb-16">
                <div className="container max-w-screen-lg mx-auto pr-4 pl-4">
                    <Block11 />
                </div>
            </div>
            <div className="pt-16 pb-8">
                <div className="container max-w-screen-lg mx-auto pr-4 pl-4">
                    <Block12 />
                </div>
            </div>
        </div>
    );
};

export default Pavo;
