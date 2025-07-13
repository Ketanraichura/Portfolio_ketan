import { Box, Layers } from 'lucide-react';
import React from 'react';
import Footer from './Footer';

export default function ExperienceSection() {
  return (
    <div className="px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Experience Header */}
        <h1 className="text-3xl font-bold text-white mb-2 mt-5">Experience</h1>
        <p className="text-lg text-gray-400 mb-8">
          A summary of my professional work history, technologies I've used, and key achievements.
        </p>

        {/* Biteezy */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-1">Biteezy</h2>
          <p className="text-md text-gray-400 mb-2">Founder & Full-Stack Developer, January 2025 – Present</p>
          <p className="text-md text-gray-400 mb-3">
            As the founder of Biteezy, a mobile app that scans packaged food products and provides users with health insights tailored for the Indian market, I led the development and product strategy to launch the MVP within a rapid two-month timeline.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-md text-gray-400">
            <li>
              <span className="font-medium">Product Vision:</span> Conceptualized and built an Indian-centric food barcode scanner app inspired by Yuka, aimed at promoting healthier eating habits through tech.
            </li>
            <li>
              <span className="font-medium">Front-end Development:</span> Built a fast and intuitive Android-first application using <span className="text-white">React Native</span>, styled with <span className="text-white">Tailwind CSS</span> and <span className="text-white">shadcn/ui</span>.
            </li>
            <li>
              <span className="font-medium">Back-end Engineering:</span> Implemented key features like barcode scanning, nutrition scoring, and user onboarding using <span className="text-white">Node.js</span>, <span className="text-white">Supabase</span>, and <span className="text-white">PostgreSQL</span>.
            </li>
            <li>
              <span className="font-medium">Data Integration:</span> Built a food product data pipeline and integrated third-party APIs for real-time product information.
            </li>
            <li>
              <span className="font-medium">User Acquisition:</span> Launched a "Coming Soon" landing page with email collection, and integrated social media to build pre-launch momentum.
            </li>
            <li>
              <span className="font-medium">Collaboration:</span> Managed product development alongside a peer, overseeing both strategic and technical execution.
            </li>
          </ul>
        </div>

        {/* Freelance */}
        <div>
          <h2 className="text-xl font-bold text-white mb-1">Freelance</h2>
          <p className="text-md text-gray-400 mb-2">Full-Stack Developer, 2023 - Present</p>
          <p className="text-md text-gray-400 mb-3">
            In my freelance career, I have worked on a variety of web development projects. Technologies and achievements include:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-md text-gray-400">
            <li>
              <span className="font-medium">Web Development:</span> Built and deployed full-featured web applications using <span className="text-white">React</span>, <span className="text-white">Node.js</span>, and <span className="text-white">Next.js</span>.
            </li>
            <li>
              <span className="font-medium">Client Solutions:</span> Provided custom solutions tailored to clients' business needs, helping them improve their online presence and efficiency.
            </li>
          </ul>
        </div>

        {/* Bottom cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Stack card */}
          <div className="bg-opacity-50 rounded-lg p-8 border border-gray-600">
            <div className="flex items-center mb-4">
              <Box className="h-6 w-6 mr-2" />
              <h2 className="text-lg text-white">Stack</h2>
            </div>
            <p className="text-gray-400 mb-6 text-md font-extralight">Tools, resources and software I use daily.</p>
            <button className="border border-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition">
              View Stack
            </button>
          </div>

          {/* Projects card */}
          <div className="bg-opacity-50 rounded-lg p-8 border border-gray-600">
            <div className="flex items-center mb-4">
              <Layers className="h-6 w-6 mr-2" />
              <h2 className="text-2xl font-semibold text-white">Projects</h2>
            </div>
            <p className="text-gray-400 mb-6">Dive Into My Projects</p>
            <button className="border border-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
