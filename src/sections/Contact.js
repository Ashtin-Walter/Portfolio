import React, { useState } from "react";
import ErrorBoundary from '../ErrorBoundary';

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ show: false, type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        message: "Message sent successfully!",
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

  return (
    <ErrorBoundary>
      <section id="contact" className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
              aria-label="Contact form"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              <h2 className="text-gray-900 dark:text-white text-4xl mb-4 font-bold">Get In Touch</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">Let's work together to create something amazing.</p>
              
              {status.show && (
                <div className={`p-4 rounded mb-6 text-white ${
                  status.type === "success" ? "bg-green-600" : "bg-red-600"
                }`}>
                  {status.message}
                </div>
              )}

              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="text-sm text-gray-600 dark:text-gray-300 block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    className="w-full bg-gray-100 dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-900 text-base outline-none text-gray-800 dark:text-gray-100 py-2 px-4 transition-colors duration-200"
                    onChange={handleChange}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="text-sm text-gray-600 dark:text-gray-300 block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    className="w-full bg-gray-100 dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-900 text-base outline-none text-gray-800 dark:text-gray-100 py-2 px-4 transition-colors duration-200"
                    onChange={handleChange}
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="text-sm text-gray-600 dark:text-gray-300 block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    className="w-full bg-gray-100 dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-900 h-40 text-base outline-none text-gray-800 dark:text-gray-100 py-2 px-4 resize-none transition-colors duration-200"
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-indigo-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300 disabled:opacity-50"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-gray-900 dark:text-white text-lg font-semibold mb-2">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">Cape Town, Western Cape, ZA</p>
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white text-lg font-semibold mb-2">Email</h3>
                    <a
                      href="mailto:ashtin@walterhouse.co.za"
                      className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                    >
                      ashtin@walterhouse.co.za
                    </a>
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white text-lg font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+27 78 051 6010</p>
                  </div>
                </div>
              </div>

              <iframe
                title="map"
                className="w-full h-[300px] rounded-lg"
                frameBorder={0}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d847632.0994285573!2d17.996640348826478!3d-33.91378097274573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town!5e0!3m2!1sen!2sza!4v1708441931771!5m2!1sen!2sza"
                style={{ filter: "grayscale(0.8) contrast(1.1) opacity(0.8) dark:grayscale(1) dark:contrast(1.2) dark:opacity(0.7)" }}
              />
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
}
