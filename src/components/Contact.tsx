import React, { useState } from "react";

const EMAIL = "ketanraichura8@gmail.com";

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Heading, Subtitle, Buttons */}
        <div className="mb-10 md:mb-0">
          <h1 className="text-5xl font-bold mb-2">Contact</h1>
          <p className="text-gray-400 mb-8 text-lg max-w-2xl">
            I'm always looking to collaborate on interesting projects with great people. Need a supportive hand? I have two!
          </p>
          <div className="flex gap-3">
            <button className="bg-zinc-900 border border-gray-600 text-white hover:text-gray-400 px-4 py-2 rounded-md font-medium">Schedule a free call</button>
            <button
              className="bg-zinc-900 border border-gray-600 text-white hover:text-gray-400 px-4 py-2 rounded-md font-medium relative"
              onClick={handleCopyEmail}
              type="button"
            >
              {copied ? (
                <span>Copied!</span>
              ) : (
                "Email"
              )}
            </button>
          </div>
        </div>
        {/* Right Column: Form Card */}
        <div className="flex justify-end w-full">
          <div className="bg-[#18181b] rounded-xl p-10 border border-gray-700 w-full max-w-2xl">
            <h2 className="text-xl font-semibold mb-1">Send a message</h2>
            <p className="text-gray-400 text-sm mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>
            <form>
              <div className="flex gap-4 mb-4">
                <div className="w-1/2">
                  <label className="block text-gray-300 text-sm mb-1">Name</label>
                  <input type="text" placeholder="Enter your name" className="w-full p-2 bg-[#101012] border border-gray-700 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-700" />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-300 text-sm mb-1">Email</label>
                  <input type="email" placeholder="Enter your email" className="w-full p-2 bg-[#101012] border border-gray-700 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-700" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 text-sm mb-1">Message</label>
                <textarea placeholder="Enter your message" className="w-full p-2 h-32 bg-[#101012] border border-gray-700 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-700" />
              </div>
              <button type="submit" className="w-full py-2 bg-[#232329] text-white rounded-md hover:bg-[#232329]/80 transition font-medium">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      {/* Newsletter Card */}
      <div className="mt-12 bg-[#18181b] rounded-xl p-6 border border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-1">Join with like-minded developers</h3>
          <p className="text-gray-400 text-sm">Sent out every two weeks. No spam.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <input type="email" placeholder="Your E-mail" className="bg-[#101012] border border-gray-700 rounded px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-700 w-full md:w-64" />
          <button className="bg-[#232329] text-white rounded-md px-4 py-2 font-medium hover:bg-[#232329]/80">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
