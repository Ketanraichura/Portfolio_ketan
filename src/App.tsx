import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Experience from "./components/Experience"
import Services from "./components/Services";
import Footer from "./components/Footer";
import { Dontclick } from "./components/Dontclick";
import GuestBook from "./components/GuestBook";
import Thoughts from "./components/Thoughts";
import Stack from "./components/Stack";
import Feed from "./components/Feed";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex h-screen bg-[#171717] text-white">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#171717] [&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-600">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/dontclick" element={<div className="p-0"><Dontclick /></div>} />
            <Route path="/guest-book" element={<GuestBook />} />
            <Route path="/thoughts" element={<Thoughts />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="*" element={<div className="flex items-center justify-center h-full">Page not found</div>} />
          </Routes>
          <div className="flex justify-center"><Footer /></div>
        </main>
      </div>
    </Router>
  );
};

export default App;
