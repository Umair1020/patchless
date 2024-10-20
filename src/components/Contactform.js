import React, { useState } from 'react';
import axios from 'axios';

const ContactUsForm = () => {
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
   
      <form className="master-form" onSubmit={handleSubmit}>
        <div className="grid grid-cols-[--cols-default] fi-fo-component-ctn gap-6">
          <div className="col-[--col-span-default]">
            <section className="fi-section rounded-xl bg-white shadow-sm ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10" id="data.contact-us">
              <header className="fi-section-header flex flex-col gap-3 px-6">
                <div className="flex items-center gap-3">
                  <div className="grid flex-1 gap-y-1">
                    <h3 className="fi-section-header-heading text-base font-semibold leading-6 text-gray-950 dark:text-white">
                      Contact Us
                    </h3>
                  </div>
                </div>
              </header>

              <div className="fi-section-content-ctn border-t border-gray-200 dark:border-white/10">
                <div className="fi-section-content p-6">
                  <div className="grid grid-cols-[--cols-default] fi-fo-component-ctn gap-6">
                    <div className="col-[--col-span-default]">
                      <div data-field-wrapper="">
                        <div className="grid gap-y-2">
                          <div className="flex items-center gap-x-3 justify-between">
                            <label className="fi-fo-field-wrp-label inline-flex items-center gap-x-3" htmlFor="fullName">
                              <span className="text-sm font-medium leading-6 text-gray-950 dark:text-white">
                                Full Name<sup className="text-danger-600 dark:text-danger-400 font-medium">*</sup>
                              </span>
                            </label>
                          </div>
                          <div className="grid auto-cols-fr gap-y-2">
                            <input
                              className="fi-input block w-full border-none py-1.5 text-base text-gray-950"
                              id="fullName"
                              placeholder="Enter your full name"
                              type="text"
                              required
                              value={formData.fullName}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-[--col-span-default]">
                      <div data-field-wrapper="">
                        <div className="grid gap-y-2">
                          <div className="flex items-center gap-x-3 justify-between">
                            <label className="fi-fo-field-wrp-label inline-flex items-center gap-x-3" htmlFor="email">
                              <span className="text-sm font-medium leading-6 text-gray-950 dark:text-white">
                                Email<sup className="text-danger-600 dark:text-danger-400 font-medium">*</sup>
                              </span>
                            </label>
                          </div>
                          <div className="grid auto-cols-fr gap-y-2">
                            <input
                              className="fi-input block w-full border-none py-1.5 text-base text-gray-950"
                              id="email"
                              placeholder="Enter your email address"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-[--col-span-default]">
                      <div data-field-wrapper="">
                        <div className="grid gap-y-2">
                          <div className="flex items-center gap-x-3 justify-between">
                            <label className="fi-fo-field-wrp-label inline-flex items-center gap-x-3" htmlFor="phone">
                              <span className="text-sm font-medium leading-6 text-gray-950 dark:text-white">
                                Phone<sup className="text-danger-600 dark:text-danger-400 font-medium">*</sup>
                              </span>
                            </label>
                          </div>
                          <div className="grid auto-cols-fr gap-y-2">
                            <input
                              className="fi-input block w-full border-none py-1.5 text-base text-gray-950"
                              id="phone"
                              placeholder="Enter your phone number"
                              type="number"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-[--col-span-default]">
                      <div data-field-wrapper="">
                        <div className="grid gap-y-2">
                          <div className="flex items-center gap-x-3 justify-between">
                            <label className="fi-fo-field-wrp-label inline-flex items-center gap-x-3" htmlFor="message">
                              <span className="text-sm font-medium leading-6 text-gray-950 dark:text-white">
                                Message<sup className="text-danger-600 dark:text-danger-400 font-medium">*</sup>
                              </span>
                            </label>
                          </div>
                          <div className="grid auto-cols-fr gap-y-2">
                            <textarea
                              className="block h-full w-full border-none bg-transparent px-3 py-1.5 text-base text-gray-950"
                              id="message"
                              placeholder="Enter your message"
                              required
                              value={formData.message}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <button
          className="master-form-submit-button mt-4 fi-btn fi-btn-size-md relative grid-flow-col items-center justify-center font-semibold outline-none transition duration-75 focus:ring-2 disabled:pointer-events-none disabled:opacity-70 rounded-lg fi-btn-color-accent gap-1.5 px-3 py-2 text-sm inline-grid shadow-sm bg-accent-600 text-white hover:bg-accent-500 dark:bg-accent-500 dark:hover:bg-accent-400 focus:ring-accent-500"
          type="submit"
        >
          Submit
        </button>
      </form>

  );
};

export default ContactUsForm;
