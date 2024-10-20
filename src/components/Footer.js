import React from 'react'

const Footer = () => {
  return (
    <div>
            <footer class="w-full select-none border-t-4 text-dark">
        <div class="mx-auto max-w-7xl px-8 py-12">
            <div class="mb-3 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
                <div class="col-span-3 text-sm">
                    <a href="/" class="logo select-none text-xl font-black leading-none text-dark">
                       <img src='/logo.svg' />
                    </a>
                    <p
                        class="-mx-2 mb-4 mt-1 text-pretty text-sm font-bold leading-normal text-dark lg:text-center">
                        Custom patches at incredibly low prices!
                    </p>

                    <a href="//cdn-cgi/l/email-protection#86f5e7eae3f5c6f6e7f2e5eee3f5b2eae3f5f5a8e5e9eb"
                        class="flex items-center py-2" onclick="window.fathom.trackEvent('Email Link')">
                        <svg class="mr-2 size-5 text-dark" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24"
                            fill="currentColor" aria-hidden="true" data-slot="icon">
                            <path
                                d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path
                                d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg> <span class="font-bold text-dark">
                            <span class="sr-only">Email:</span>
                            <span class="__cf_email__"
                                data-cfemail="f083919c9583b080918493989583c49c958383de939f9d">digitize@usdigitize.com
                                orders@usdigitize.com
                                usdigitize@gmail.com</span>
                        </span>
                    </a>

                    <a href="/tel:+1-866-847-2824" onclick="window.fathom.trackEvent('Telephone Link')"
                        class="flex items-center py-2">
                        <svg class="mr-2 size-5 text-dark" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24"
                            fill="currentColor" aria-hidden="true" data-slot="icon">
                            <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                            <path fill-rule="evenodd"
                                d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
                                clip-rule="evenodd" />
                        </svg> <span class="font-bold text-dark">
                            <span class="sr-only">Phone:</span>
                            +1 (516) 927 7625
                        </span>
                    </a>

                    <div class="flex items-center py-2">
                        <svg class="mr-2 size-5 text-dark" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24"
                            fill="currentColor" aria-hidden="true" data-slot="icon">
                            <path fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                                clip-rule="evenodd" />
                        </svg> <span class="font-bold text-dark">
                          24 / 7
                        </span>
                    </div>

                   
                </div>
                <nav class="col-span-1 md:col-span-1 lg:col-span-2" aria-label="Additional Links">
                    <p class="mb-3 text-xs font-semibold uppercase tracking-wider text-dark">Additional Links</p>
                    <a href="/blog/" title="Explore Our Blog for the Latest in Custom Patch Trends"
                        class="mb-3 flex text-sm font-medium text-dark transition hover:text-dark md:mb-2">
                        Blog
                    </a>
                    <a href="/gallery" title="View Our Stunning Custom Patch Designs"
                        class="mb-3 flex text-sm font-medium text-dark transition hover:text-dark md:mb-2">
                        Gallery
                    </a>
                    <a href="/option" title="Explore Your Options for Personalized Patches"
                        class="mb-3 flex text-sm font-medium text-dark transition hover:text-dark md:mb-2">
                        Options
                    </a>
                    <a href="/quote" title="Start Your Custom Patch Journey with Us"
                        class="mb-3 flex text-sm font-medium text-dark transition hover:text-dark md:mb-2">
                        Free Quote
                    </a>
                    <a href="/how-to-iron-on-patches"
                        title="A Step-By-Step Guide on How to Apply Iron On Patches to any garment"
                        class="mb-3 flex text-pretty text-sm font-medium text-dark transition hover:text-dark md:mb-2">
                        How To Iron On A Patch
                    </a>
                </nav>
                <nav class="col-span-1 md:col-span-1 lg:col-span-2" aria-label="About">
                    <p class="mb-3 text-xs font-semibold uppercase tracking-wider text-dark">About</p>
                    <a href="/about" title="Discover the Story Behind Our Custom Patch Expertise"
                        class="mb-3 flex text-sm font-medium text-dark transition hover:text-dark md:mb-2">
                        About Us
                    </a>
                    <a href="https://feedback" title="Read What Others Say About Our Custom Patches"
                        class="mb-3 flex text-sm font-medium text-dark transition hover:text-dark md:mb-2">
                        Feedback
                    </a>
                    <a href="/contact" title="Get in Touch for Your Custom Patch Needs"
                        class="mb-3 flex text-sm font-medium text-dark transition hover:text-dark md:mb-2">
                        Contact Us
                    </a>
                </nav>
                <nav class="col-span-2 md:col-span-1 lg:col-span-2" aria-label="Help">
                    <p class="mb-3 text-xs font-semibold uppercase tracking-wider text-dark">Help</p>
                    <a href="/faq" title="FAQs: Your Questions Answered on Custom Patch Design and Order"
                        class="mb-3 flex text-sm font-medium text-dark transition hover:text-dark md:mb-2">
                        FAQs
                    </a>
                    <a href="/designing-custom-patches"
                        title="Designing Your Patch: A Guide to Creating Your Perfect Custom Patch"
                        class="mb-3 flex text-sm font-medium text-dark transition hover:text-dark md:mb-2">
                        Designing
                    </a>
                    <a href="/pricing" title="Pricing Information: Understanding the Cost of Custom Patches"
                        class="mb-3 flex text-sm font-medium text-dark transition hover:text-dark md:mb-2">
                        Pricing
                    </a>
                    <a href="/payment-form" title="Easy Online Payment: Securely Pay for Your Custom Patches Online"
                        class="mb-3 flex text-sm font-medium text-dark transition hover:text-dark md:mb-2">
                        Pay Online
                    </a>
                    <a href="/sitemap" title="Navigate our site"
                        class="mb-3 flex text-sm font-medium text-dark transition hover:text-dark md:mb-2">
                        Sitemap
                    </a>
                </nav>
                <div class="col-span-3">
                    <ul class="social-links list-none flex gap-4">
                        <li>
                            <a href="https://www.facebook.com" title="Visit us on Facebook"
                                class="flex size-8 rounded p-1 text-primary-50 transition focus-hover:bg-accent/10 focus-hover:text-accent">
                                <img src='/facebook.svg' />
                                <span class="sr-only">Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" title="Visit us on Instagram"
                                class="flex size-8 rounded p-1 text-primary-50 transition focus-hover:bg-accent/10 focus-hover:text-accent">
                              <img src='/insta.svg' />
                                <span class="sr-only">Instagram</span>
                            </a>
                        </li>
                       
                                           </ul>
                </div>
            </div>
           
        </div>
    </footer>
    </div>
  )
}

export default Footer