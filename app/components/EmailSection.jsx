"use client";
import React, { useState } from "react";
import GithubIcon from "/public/github-icon.svg";
import LinkedinIcon from "/public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useForm, ValidationError } from '@formspree/react';

// Your component code here


const EmailSection = () => {
  const [state, handleSubmit] = useForm("xqazodqv");

  if (state.succeeded) {
    return (
      <section id="contact" className="my-12 py-24 text-center">
        <p className="text-green-500 text-4xl font-bold animate-pulse drop-shadow-lg">Thanks for reaching out! We will get back to you shortly.</p>
      </section>
    );
  }

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
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="shrey@google.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg w-full ${state.submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
