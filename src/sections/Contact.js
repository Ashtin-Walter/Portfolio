import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ show: false, type: "", message: "" });

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

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
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });
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
        message: "Something went wrong. Please try again.",
      });
    }
    setIsLoading(false);
  }

  return (
    <section id="contact" className="relative py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <form
            netlify
            name="contact"
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 rounded-lg shadow-xl"
          >
            <h2 className="text-white text-4xl mb-4 font-bold">Get In Touch</h2>
            <p className="text-gray-300 mb-8">Let's work together to create something amazing.</p>
            
            {status.show && (
              <div className={`p-4 rounded mb-6 ${
                status.type === "success" ? "bg-green-600" : "bg-red-600"
              }`}>
                {status.message}
              </div>
            )}

            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="text-sm text-gray-300 block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  className="w-full bg-gray-700 rounded border-gray-600 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 transition-colors duration-200"
                  onChange={handleChange}
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="text-sm text-gray-300 block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  className="w-full bg-gray-700 rounded border-gray-600 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 transition-colors duration-200"
                  onChange={handleChange}
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="text-sm text-gray-300 block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  className="w-full bg-gray-700 rounded border-gray-600 focus:ring-2 focus:ring-indigo-900 h-40 text-base outline-none text-gray-100 py-2 px-4 resize-none transition-colors duration-200"
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
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
              <div className="space-y-8">
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-300">Cape Town, Western Cape, ZA</p>
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:ashtinjw.dev@gmail.com"
                    className="text-indigo-400 hover:text-indigo-300"
                  >
                    ashtinjw.dev@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">Phone</h3>
                  <p className="text-gray-300">+27 78 051 6010</p>
                </div>
              </div>
            </div>

            <iframe
              title="map"
              className="w-full h-[300px] rounded-lg"
              frameBorder={0}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d847632.0994285573!2d17.996640348826478!3d-33.91378097274573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town!5e0!3m2!1sen!2sza!4v1708441931771!5m2!1sen!2sza"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.7)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
