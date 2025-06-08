import React, { useState } from "react";
import ErrorBoundary from '../ErrorBoundary';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { contactInfo } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ show: false, type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear status when user starts typing
    if (status.show) {
      setStatus({ show: false, type: "", message: "" });
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        show: true,
        type: "error",
        message: "Please fill in all fields",
      });
      return;
    }

    setIsLoading(true);
    try {
      const apiUrl = process.env.NODE_ENV === 'production' 
        ? 'https://walterhouse.co.za/api/contact'
        : '/api/contact';

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus({
        show: true,
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        show: true,
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    }
    setIsLoading(false);
  }

  const ContactInfo = ({ icon, title, content, href }) => (
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
        {icon}
      </div>
      <div>
        <h3 className="text-gray-900 dark:text-white text-lg font-semibold mb-1">{title}</h3>
        {href ? (
          <a
            href={href}
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-200"
          >
            {content}
          </a>
        ) : (
          <p className="text-gray-600 dark:text-gray-300">{content}</p>
        )}
      </div>
    </div>
  );

  return (
    <ErrorBoundary>
      <section id="contact" className="relative py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a question or want to work together? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                aria-label="Contact form"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>
                
                {status.show && (
                  <div 
                    className={`p-4 rounded-lg mb-6 ${
                      status.type === "success" 
                        ? "bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800" 
                        : "bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800"
                    } animate-fadeIn`}
                  >
                    {status.message}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 
                        focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent
                        text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500
                        transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 
                        focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent
                        text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500
                        transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 
                        focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent
                        text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500
                        transition-colors duration-200 resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg
                      transform transition-all duration-200 hover:scale-[1.02]
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                      dark:focus:ring-offset-gray-800"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center space-x-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Sending...</span>
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 space-y-8">
                <ContactInfo                  icon={<MapPinIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
                  title="Location"
                  content={contactInfo.location}
                />
                <ContactInfo
                  icon={<EnvelopeIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
                  title="Email"
                  content={contactInfo.email}
                  href={`mailto:${contactInfo.email}`}
                />
                <ContactInfo
                  icon={<PhoneIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
                  title="Phone"
                  content={contactInfo.phone}
                  href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                />
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-lg h-[300px] group">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300 z-10"></div>
                <iframe
                  title="map"
                  className="w-full h-full"
                  loading="lazy"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d847632.0994285573!2d17.996640348826478!3d-33.91378097274573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town!5e0!3m2!1sen!2sza!4v1708441931771!5m2!1sen!2sza"
                  style={{ filter: "grayscale(1) contrast(1.2)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
}
