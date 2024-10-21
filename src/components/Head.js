import { Link } from "react-router-dom"
import { FaPhone, FaQuestion } from "react-icons/fa6";


const Head = () => {

    return (
        <>

            <header className="relative z-10 select-none">

                <div className="top-nav relative z-10  py-3 text-sm shadow shadow bg-neutral-800" style={{ background: "#FF2424" }}>
                    <div className="container">
                        <div className="flex items-center justify-between">
                            <nav className="not-prose">
                                <div aria-label="Breadcrumbs">
                                    <ol className="flex flex-wrap items-center rounded font-heading font-bold !text-neutral-400 !text-light-400">
                                        <li>
                                            <a title="Custom Patches" href="/" className="transition  underline focus:text-light-900 focus:underline text-accent">
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
                                <a href="#"  title="Email us at s.com" className="flex items-center gap-4 whitespace-nowrap">
                                    <svg className="size-6 text-light text-white lg:opacity-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                    <span className=" text-xl font-bold text-light text-white lg:inline-block">
                                        <span className="sr-only">Email:</span>
                                        <span className="__cf_email__">digitize@usdigitize.com</span>

                                    </span>
                                </a>
                                <a href="#" title="Call Us at 1 516-927-7625" onClick="window.fathom.trackEvent('Telephone Link')" className="flex items-center gap-4 whitespace-nowrap">
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
            <section className="page-title parallax-section about "  >
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <div class="container ">
                        <Link class="navbar-brand" to="/"><img src="/logo.png" /></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul class="navbar-nav ms-auto  mb-2 mb-lg-0 p-2" style={{ background: "#38383880", borderRadius: "10px" }} >
                                <li class="nav-item">
                                    <Link class="nav-link active text-light" aria-current="page" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link text-light " to="/about">About Us</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link text-light " to="/service">Services</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link text-light " to="/gallery">Gallery</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link text-light " to="/product">Products</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link text-light " to="/prising">Pricing</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link text-light " to="/blog">Blog</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link
                                        to="/contact"
                                        className="nav-link text-dark d-flex align-items-center"
                                        activeStyle={{ color: "#FF2424" }} // Active tab color
                                    >
                                        <FaPhone className="me-2" /> Contact Us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/faq"
                                        className="nav-link text-dark d-flex align-items-center"
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
        </>
    )
}

export default Head