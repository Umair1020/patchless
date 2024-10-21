import "../App.css";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./header.css";
import { useMediaQuery } from 'react-responsive';
import { FaPhone, FaQuestion } from "react-icons/fa6";

const Haeder = () => {
    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 });
        return isMobile ? children : null;
    };

    const [isScrolled, setIsScrolled] = useState(false);
    const listenScrollEvent = () => setIsScrolled(window.scrollY > 120);
    
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);

    return (
        <>
            <header className="relative z-10 select-none">

<div className="top-nav relative z-10  py-3 text-sm shadow shadow bg-neutral-800" style={{ background: "#FF2424" }}>
    <div className="container">
        <div className="flex items-center justify-between">
            <nav className="not-prose">
                <div aria-label="Breadcrumbs">
                    <ol className="flex flex-wrap items-center rounded font-heading font-bold !text-neutral-400 !text-primary-400">
                        <li>
                            <a title="Custom Patches" href="/" className="transition  underline focus:text-primary-900 focus:underline text-accent">
                                <svg aria-hidden="true" className="size-5 text-white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                </svg> <span className="sr-only">Custom Patches</span>
                            </a>
                        </li>
                    </ol>
                </div>
            </nav>
            <nav aria-label="top navigation" className="flex items-center gap-8 font-heading">
                <a href="" title="Email us at .com" className="flex items-center gap-4 whitespace-nowrap">
                    <svg className="size-6 text-primary text-white lg:opacity-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <span className=" text-xl font-bold text-primary text-white lg:inline-block">
                        <span className="sr-only">Email:</span>
                        <span className="__cf_email__">digitize@usdigitize.com</span>

                    </span>
                </a>
                <a href="#" title="Call Us at 1 516-927-7625"  className="flex items-center gap-4 whitespace-nowrap">
                    <svg className="size-6  text-white md:opacity-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                    <span className=" text-nowrap text-xl font-bold __cf_email__  text-white sm:inline-block">
                        <span className="sr-only">Phone:</span>
                        1 516-927-7625
                    </span>
                </a>

            </nav>
        </div>
    </div>
</div>
</header>
            <div className="bg-patch-wall">
                <section className="page-title parallax-section about">
                    <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between">
                        <div className="container">
                            <a className="navbar-brand" href="/">
                                <img src="/logo.png" alt="Logo" />
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                    {/* Use Link to add active class */}
                                    <li className="nav-item">
                                        <Link
                                            to="/"
                                            exact
                                            className="nav-link text-light active"
                                            id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"
                                            activeStyle={{ color: "#FF2424" }} // Active tab color
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/about"
                                            className="nav-link text-light"
                                            activeStyle={{ color: "#FF2424" }} // Active tab color
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/service"
                                            className="nav-link text-light"
                                            activeStyle={{ color: "#FF2424" }} // Active tab color
                                        >
                                            Services
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/gallery"
                                            className="nav-link text-light"
                                            activeStyle={{ color: "#FF2424" }} // Active tab color
                                        >
                                            Gallery
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/product"
                                            className="nav-link text-light"
                                            activeStyle={{ color: "#FF2424" }} // Active tab color
                                        >
                                            Products
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/prising"
                                            className="nav-link text-light"
                                            activeStyle={{ color: "#FF2424" }} // Active tab color
                                        >
                                            Pricing
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/blog"
                                            className="nav-link text-light"
                                            activeStyle={{ color: "#FF2424" }} // Active tab color
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link
                                            to="/contact"
                                            className="nav-link text-light d-flex align-items-center"
                                            activeStyle={{ color: "#FF2424" }} // Active tab color
                                        >
                                            <FaPhone className="me-2" /> Contact Us
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="/faq"
                                            className="nav-link text-light d-flex align-items-center"
                                            activeStyle={{ color: "#FF2424" }} // Active tab color
                                        >
                                            <FaQuestion className="me-2" /> FAQ'S
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </section>
                   
          
            <br />           
            <div className="relative isolate -mt-24 overflow-x-clip layout-full before:backdrop-blur-xs prose-a:text-accent   from-primary-950/80 to-primary-700/90 bg-cover before:absolute before:-inset-[1px] before:bg-gradient-to-b dark:from-primary-950/70 dark:to-primary-950/90">
                <div className="prose-invert relative mt-8  md:pb-4 md:pt-24 to-breakout">
                    <div className="flex flex-wrap items-center gap-8 lg:flex-nowrap">

                        <div className="flex-grow">
                            <br /><br /> 
                            <p className=" text-pretty text-center font-heading  text-1xl font-black capitalize text-white mb-2 mt-0">Welcome To</p>
                            <h2 style={{ viewTransitionName: 'hero-title', color: "#FF2424" }} className="mb-2 mt-0 text-center text-5xl ">US Digitize
                            </h2>
                            <p className="mt-0 text-pretty text-center font-heading text-3xl font-black capitalize text-white">
                                Top Quality Custom Patches at <br /> Incredibly  Low Prices
                            </p><br /><br />
                            <nav className="flex flex-wrap justify-evenly gap-4">
                                <div className="prose-img:not-prose group relative isolate select-none outline-none transition *:text-center hover:scale-110 hover:no-underline focus:scale-110" href="/embroidered-patches">
                                    <span className="absolute -inset-2 -z-10 rounded group-hover:bg-white/10 group-focus:bg-white/10" />
                                    <div className="overflow-clip rounded-full border-4 group-hover:border-accent group-focus:border-accent">
                                        <img src="/image.png" width={125} height={125} className="not-prose mx-auto rounded-full" alt="" aria-hidden="true" />
                                    </div>
                                    <h2 className="mb-1 mt-2 text-xl !no-underline text-light" >
                                        Embroidered
                                        <span className="sr-only">Patches</span>
                                    </h2>

                                </div>
                                <div className="prose-img:not-prose group relative isolate select-none outline-none transition *:text-center hover:scale-110 hover:no-underline focus:scale-110" href="/woven-patches">
                                    <span className="absolute -inset-2 -z-10 rounded group-hover:bg-white/10 group-focus:bg-white/10" />
                                    <div className="overflow-clip rounded-full border-4 group-hover:border-accent group-focus:border-accent">
                                        <img src="/image-1.png" width={125} height={125} className="not-prose mx-auto" alt="" aria-hidden="true" />
                                    </div>
                                    <h2 className="mb-1 mt-2 text-xl !no-underline text-light">
                                        Woven
                                        <span className="sr-only">Patches</span>
                                    </h2>

                                </div>

                                <div className="prose-img:not-prose group relative isolate select-none outline-none transition *:text-center hover:scale-110 hover:no-underline focus:scale-110" href="/name-patches">
                                    <span className="absolute -inset-2 -z-10 rounded group-hover:bg-white/10 group-focus:bg-white/10" />
                                    <div className="overflow-clip rounded-full border-4 group-hover:border-accent group-focus:border-accent">
                                        <img src="/image-2.png" width={125} height={125} className="not-prose mx-auto rounded-full" alt="" aria-hidden="true" />
                                    </div>
                                    <h2 className="mb-1 mt-2 text-xl !no-underline text-light">
                                        Name
                                        <span className="sr-only">Patches</span>
                                    </h2>

                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </>
    )
}

export default Haeder