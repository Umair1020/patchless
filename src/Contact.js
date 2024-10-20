import React , {useState} from 'react'
import Footer from "./components/Footer"
import Head from './components/Head'
import axios from 'axios';
import ContactUsForm from './components/Contactform';


const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const { fullName, email, phone, message } = formData;
    
        if (fullName && email && phone && message) {
          try {
            const headers = { 'Content-Type': 'application/json' };
            const response = await axios.post('https://formspree.io/f/mwkzrgoz', {
              name: fullName,
              replyto: email,
              phone: phone,
              message: message,
            }, { headers });
    
            alert('Message sent successfully');
          } catch (error) {
            console.error('Error sending message:', error);
            alert('Error sending message');
          }
        } else {
          alert('Please fill out all fields');
        }
      };
    return (
        <div>
            <Head />
            <main id="content" className="prose container prose-primary max-w-full dark:prose-invert">
                <div className="relative isolate  overflow-x-clip layout-full before:backdrop-blur-xs prose-a:text-accentbg-header prose-h1:text-center dark:bg-header-dark" bis_skin_checked="1">
                    <div className="prose-invert relative md:pb-4 md:pt-24" bis_skin_checked="1">
                        <h1 className='text-center'>Contact Us</h1>
                    </div>
                </div>

                <div className="my-12 container" bis_skin_checked="1">
                    <div className="overflow-clip rounded-lg  shadow-lg" bis_skin_checked="1">
                        <div className="flex flex-wrap sm:flex-nowrap" bis_skin_checked="1">
                            <div className="prose prose-invert grow  p-8 sm:min-w-[360px]" bis_skin_checked="1" style={{ background: "#FF2424E5" }}>
                                <h2 className="mt-0 text-center text-white">Get in touch</h2>

                                <div className="space-y-8 text-sm text-white" bis_skin_checked="1">
                                    <div className="flex items-center" bis_skin_checked="1">
                                        <p className="sr-only">Phone number</p>
                                        <svg className="size-6 shrink-0 text-primary-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"></path>
                                        </svg>                                <a onclick="window.fathom.trackEvent('Telephone Link')" href="tel:+1-516-927-7625" className="ml-3 text-accent-50" bis_skin_checked="1">
                                        1 516-927-7625
                                        </a>
                                    </div>
                                    <p className="flex items-center space-x-4">
                                        <svg className="size-6 shrink-0 text-primary-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                                        </svg>                                <span className="sr-only">Email us at</span>
                                        <a onclick="window.fathom.trackEvent('Email Link')" className="ml-3 text-accent-50" href="mailto:digitize@usdigitize.com" bis_skin_checked="1">
                                            sdigitize@usdigitize.com
                                        </a>
                                    </p>

                                    <p className="flex items-center space-x-4">
                                        <svg className="size-6 shrink-0 text-primary-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                                        </svg>                                <span className="sr-only">24 /7</span>
                                        <span>
                                        24 /  7
                                        </span>
                                    </p>

                                  
                                </div>


                            </div>
                            <div className="grow p-3 px-8 shadow-md dark:bg-neutral-950" bis_skin_checked="1">
                                <div className="mx-auto max-w-lg lg:max-w-none" bis_skin_checked="1">
                                    <p>
                                        Fill out the form and our team will get back to you within 24 hours. We look forward to
                                        hearing from you!
                                    </p>

                                <ContactUsForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
            <Footer />
        </div >
    )
}

export default Contact