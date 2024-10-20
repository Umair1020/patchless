import React from 'react'
import Head from "./components/Head"
import Footer from './components/Footer'
const Faq = () => {
    return (
        <div>
            <Head />

            <main
                id="content"
                className="prose prose-primary max-w-full dark:prose-invert container"
            >
                <div
                    className="relative isolate  overflow-x-clip layout-full before:backdrop-blur-xs prose-a:text-accent   dark:bg-header-dark"
                    bis_skin_checked={1}
                >
                    <div
                        className="prose-invert relative  md:pb-4 md:pt-24 prose-h1:text-center"
                        bis_skin_checked={1}
                    >
                        <h1 className='text-center'>Frequently Asked Questions</h1>
                    </div>
                </div>
                <p className="lead text-balance text-center text-xl font-bold leading-loose">
                    This page will answer some questions that new customers commonly ask of us.
                    If your question isn’t answered here, give us a call at
                    <a
                        href="tel:+1-866-847-2824"
                        className="whitespace-nowrap text-accent-400"
                        bis_skin_checked={1}
                    >
                        1 866-847-2824
                    </a>
                </p>
                <div className="grid gap-8 py-12 lg:grid-cols-2" bis_skin_checked={1}>
                    <div className="mb-12 flex items-start justify-start" bis_skin_checked={1}>
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="mr-4 size-8 flex-none text-accent"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <div bis_skin_checked={1}>
                            <h2 className="mb-3 mt-0">How Much Do Digitize
                            Designs Cost ?</h2>
                            <p>
                            To obtain pricing information, please contact us by email or phone.
                            </p>
                        </div>
                    </div>
                    <div className="mb-12 flex items-start justify-start" bis_skin_checked={1}>
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="mr-4 size-8 flex-none text-accent"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <div bis_skin_checked={1}>
                            <h2 className="mb-3 mt-0">
                            Is Your Firm Willing to
                            Provide a Free Trial Order
                            </h2>
                            <p>
                            Yes, we provide a risk–free trial order.
                            </p>
                        </div>
                    </div>
                    <div className="mb-12 flex items-start justify-start" bis_skin_checked={1}>
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="mr-4 size-8 flex-none text-accent"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <div bis_skin_checked={1}>
                            <h2 className="mb-3 mt-0">
                            Is Registration Free on
                            Your Website
                            </h2>
                            <p>
                            Us digitize does, in fact, provide free registration. All you have to do is fill out a short form and your personal account will be activated. After completing the registration process, you will be able to place your purchase, make payments, and receive delivery.
                            </p>
                        </div>
                    </div>
                   
                    <div className="mb-12 flex items-start justify-start" bis_skin_checked={1}>
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="mr-4 size-8 flex-none text-accent"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <div bis_skin_checked={1}>
                            <h2 className="mb-3 mt-0">
                            What Are The Different
Formats That Your Offer
                            </h2>
                            <p>
                            We understand the requirement of a number of formats which is why we offer all major formats that include EMB, EXP, CND, HUS, XXX, PES,POF and DST.
                            </p>
                        </div>
                    </div>
                 
                   
                </div>
            </main>
<Footer />
        </div>
    )
}

export default Faq