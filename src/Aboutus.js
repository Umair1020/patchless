import React from 'react'
import Head from './components/Head'
import Footer from './components/Footer'

const Aboutus = () => {
    return (
        <div className=''>
            <Head />
            <h2 class="mb-2 mt-2 text-center  " style={{ color: "#FF2424", fontSize: "50px", }}>
                About Us
            </h2>
            <div className='bg-patch-wall h-auto p-5'>
                <div className="relative container isolate overflow-x-clip layout-full before:backdrop-blur-xs prose-a:text-accent   from-primary-950/80 to-primary-700/90 bg-cover before:absolute before:-inset-[1px] before:bg-gradient-to-b dark:from-primary-950/70 dark:to-primary-950/90">
                    <div className="prose-invert relative  to-breakout">
                        <div className="flex flex-wrap items-center gap-8 lg:flex-nowrap">

                            <div className="flex-grow">
                                <br />

                                <h2 style={{ viewTransitionName: 'hero-title', color: "#FF2424" }} className="mb-2 mt-0 text-start text-5xl ">Crafting Excellence in Every Patch !
                                </h2><br />
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <img src='/about.png' /></div>
                                    <div className='col-lg-6' > <p className='text-light'>US Digitize is one of the top embroidery digitization firms in the United States. We offer excellent digitizing at very inexpensive rates. Because of our expertise in this field, we are well-known and gained the trust of people throughout the region. With a number of years of dedication, precision, and innovation, we have carved an enviable reputation as one of the most leading digitizers in this industry. The commitment to excellence and customer satisfaction has earned the company a reputation as one of the leading service providers for customers whose need for quality necessitates the highest standards in custom embroidery design.</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 class="mb-2 mt-10 text-center  md:mt-16" style={{ color: "#FF2424", fontSize: "35px", }}>
            Our Story
                </h2>
                <br />

                <div class="items-center gap-12 md:flex md:flex-nowrap">

                    <div class="md:w-2/3 col-lg-8 text-center mx-auto w-75">
                        <p>
                        Once upon a time, US Digitize set the bar for quality in the world of embroidery digitization. It started small but found a product differentiation in providing cheap quality digitization. From an art perspective, this venture was also founded on perfection and devotion to work. The services soon proved popular throughout the region because it had a reputation for skill and dependability.
                            <br /> <br />
                              Years of hard work and dedication resulted in US Digitize building an excellent reputation as one of the finest digitizers in the country. How do they ensure this? A very stringent quality assurance process has been implemented, ensuring that designs were executed with precision, and there was practically zero error. Every single project is treated like a baby-turning your vision into reality.
                            <br /> <br />
                              Thenceforth, a committed team of enthusiastic professionals poured their hearts and souls into helping their clients in all digitizing needs. Energetic and always at work, ready to help if called upon even on a moment's notice, support and guidance were always unparalleled. Together, they built a legacy continuing to flourish, engraving US Digitize's name as a force to be trusted in the business.
                        </p>


                    </div>
               
                </div> 
                <div className='container'>

                {/* <div className='row d-flex align-items-center'>
                                    <div className='col-lg-6'>
                                        <img src='/about1.png' className='  style={{width: "50px"}}' /></div>
                                    <div className='col-lg-6' ></div>
                </div> */}

<section id="features" class="features">

      <div class="container" >

       
        
        <div class="row feature-icons" >
         

          <div class="row">

            <div class="col-xl-6 text-center" >
              <img src="/about1.png" class="img-fluid p-4" alt="" />
            </div>

            <div class="col-xl-6 d-flex content">
              <div class="row align-self-center gy-4">

                <div class="col-md-12 icon-box" >
                <img src='/about2.svg' className='' style={{width: "50px"}} />
                  <div>
                    <h4 className='fw-bold'>Quality in Every Patch</h4>
                    <p>At US Digitize, quality isn't just a promise, it's our practice. Our patches are designed to represent your identity and values with vibrant colors and durable materials, ensuring they stand out and last long.</p>
                  </div>
                </div>

                <div class="col-md-12 icon-box" >
                <img src='/about3.svg' className='' style={{width: "50px"}} />
                  <div>
                    <h4 className='fw-bold'>Customer Service Excellence
                    </h4>
                    <p>From personalized consultations to meticulous attention to your needs, we ensure a seamless experience from start to finish.</p>
                  </div>
                </div>

                <div class="col-md-12 icon-box" >
                  <img src='/about4.svg' className='' style={{width: "50px"}} />
                  <div>
                    <h4 className='fw-bold'>Guaranteed Satisfaction</h4>
                    <p>We stand firmly behind every patch we produce, Our goal is to not just meet your expectations but to exceed them, every single time.</p>
                  </div>
                </div>


              </div>
            </div>

          </div>

        </div>

      </div>

    </section>


                                </div>
                                <Footer />
        </div>
    )
}

export default Aboutus