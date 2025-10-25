"use client";
import React from "react";

const ContactUs = () => {
  return (
    <main className="bg-background-light dark:bg-background-dark font-display min-h-screen">
      {/* Title Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-black dark:text-white leading-tight tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-black/60 dark:text-white/60 max-w-2xl mx-auto">
            Have a question or need assistance? We're here to help. Reach out to
            us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div className="bg-white dark:bg-black/20 p-8 lg:p-12 rounded-xl shadow-lg shadow-black/5">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
                Get in Touch
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-black/80 dark:text-white/80"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="mt-2 w-full bg-background-light dark:bg-background-dark border-transparent rounded-lg px-4 py-3 text-black dark:text-white focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-black/80 dark:text-white/80"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="mt-2 w-full bg-background-light dark:bg-background-dark border-transparent rounded-lg px-4 py-3 text-black dark:text-white focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-black/80 dark:text-white/80"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Question about an order"
                    className="mt-2 w-full bg-background-light dark:bg-background-dark border-transparent rounded-lg px-4 py-3 text-black dark:text-white focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-black/80 dark:text-white/80"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Your message..."
                    className="mt-2 w-full bg-background-light dark:bg-background-dark border-transparent rounded-lg px-4 py-3 text-black dark:text-white focus:ring-primary focus:border-primary"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-black font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 dark:bg-primary/20 text-primary p-3 rounded-lg">
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black dark:text-white">
                        Address
                      </h4>
                      <p className="text-black/60 dark:text-white/60">
                        123 Sneaker Avenue, Shoetown, ST 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 dark:bg-primary/20 text-primary p-3 rounded-lg">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black dark:text-white">
                        Phone
                      </h4>
                      <p className="text-black/60 dark:text-white/60">
                        (123) 456-7890
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 dark:bg-primary/20 text-primary p-3 rounded-lg">
                      <span className="material-symbols-outlined">email</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black dark:text-white">
                        Email
                      </h4>
                      <p className="text-black/60 dark:text-white/60">
                        support@footwear.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                  Our Location
                </h3>
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg shadow-black/5">
                  <iframe
                    className="w-full h-full"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.219572225679!2d-73.98784168459385!3d40.75797497932688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c64801b7%3A0x449e70f6e14300ee!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1678886504543!5m2!1sen!2sus"
                    style={{ border: 0 }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
