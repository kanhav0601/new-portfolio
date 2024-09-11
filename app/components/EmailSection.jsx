"use client";
import React, { useState } from "react";
import GithubIcon from "/public/github-icon.svg";
import LinkedinIcon from "/public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setEmailSubmitted(false);
    setIsLoading(true);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      await response.json();
      console.log("Message sent.");
      setEmailSubmitted(true);
      e.target.reset();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setError("Failed to send email. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          We specialize in providing IT solutions and services for government
          operations. For further inquiries, orders, or assistance, please
          reach out to us. Our team is dedicated to supporting your needs and
          will respond promptly to ensure your requirements are met.
        </p>
        <div className="socials flex flex-row gap-4 mt-4">
          <Link href="https://github.com/shreyyyyy" target="_blank" aria-label="Github Profile">
            <Image src={GithubIcon} alt="Visit Shreyans's Github profile" width={30} height={30} />
          </Link>
          <Link href="https://www.linkedin.com/in/shreyans-jain-9255351a7/" target="_blank" aria-label="LinkedIn Profile">
            <Image src={LinkedinIcon} alt="Visit Shreyans's LinkedIn profile" width={30} height={30} />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your email</label>
              <input
                name="email"
                type="email"
                id="email"
                required
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="shrey@google.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">Subject</label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">Message</label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg w-full ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
