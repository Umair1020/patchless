import React from 'react';
import Head from './components/Head';
import Footer from './components/Footer';

const Faq = () => {
    // Create an array of FAQs
    const faqArray = [
        {
            question: "How Much Do Digitize Designs Cost?",
            answer: "To obtain pricing information, please contact us by email or phone.",
        },
        {
            question: "Is Your Firm Willing to Provide a Free Trial Order?",
            answer: "Yes, we provide a risk–free trial order.",
        },
        {
            question: "Is Registration Free on Your Website?",
            answer: `Us digitize does, in fact, provide free registration. All you have to do is fill out a short form and your personal account will be activated. After completing the registration process, you will be able to place your purchase, make payments, and receive delivery.`,
        },
        {
            question: "What Are The Different Formats That You Offer?",
            answer: "We offer all major formats including EMB, EXP, CND, HUS, XXX, PES, POF, and DST.",
        },
        {
            question: "What types of patches US Digitize offer?",
            answer: `We offer embroidery patches, woven patches, PVC patch, Leather embossed patch and sublimation patch.`,
        },
        {
            question: "What materials do you use for patches?",
            answer: "Our patches are made from high-quality fabric and durable thread.",
        },
        {
            question: "How can I contact US Digitize customer service?",
            answer: `You can reach us via email, phone, or our website's contact form.
`,
        },
        {
            question: "What is US Digitize turnaround time?",
            answer: "US Digitize turnaround time is 4 hours.",
        },
        {
            question: "What is turnaround time of patches?",
            answer: `The turnaround time for patches is 7 to 8 days.`,
        },
        {
            question: "What is turnaround time for vector?",
            answer: "The turnaround time for vector is 3 to 4 hours.",
        },
        {
            question: "What is the cost of a patch?",
            answer: `Pricing varies based on size and complexity. Please check our pricing page for details.`,
        },
        {
            question: "Can you convert my raster image to vector format?",
            answer: "Yes, we offer conversion services to transform raster images (like .JPEG or .PNG) into vector files.",
        },
        {
            question: "Is there a return policy?",
            answer: `We accept returns on defective products. If you receive the wrong item or a defective patch, contact us within 7 days.`,
        },
        {
            question: "How do I place an order?",
            answer: "You can place an order through our website by uploading your design and selecting options.",
        },
        {
            question: "Are your patches safe for all fabrics?",
            answer: `Yes, our patches can be applied to most fabrics.
`,
        },
      
    ];

    return (
        <div>
            <Head />
            <main
                id="content"
                className="prose prose-primary max-w-full dark:prose-invert container"
            >
                <div className="relative isolate  overflow-x-clip layout-full before:backdrop-blur-xs prose-a:text-accent dark:bg-header-dark">
                    <div className="prose-invert relative  md:pb-4 md:pt-24 prose-h1:text-center">
                        <h1 className="text-center">Frequently Asked Questions</h1>
                    </div>
                </div>
                <p className="lead text-balance text-center text-xl font-bold leading-loose">
                This page will answer some questions that new customers commonly ask of us. If your question isn’t answered here, give us a call at 
                    <a href="tel:+1 516-927-7625" className="whitespace-nowrap text-accent-400">
                    1 516-927-7625
                    </a>
                </p>
                <div className="grid gap-8 py-12 lg:grid-cols-2">
                    {faqArray.map((faq, index) => (
                        <div key={index} className="mb-12 flex items-start justify-start">
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
                            <div>
                                <h2 className="mb-3 mt-0 fw-bold text-dark">{faq.question}</h2>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Faq;
