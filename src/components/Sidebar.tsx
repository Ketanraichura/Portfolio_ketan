// components/Sidebar.tsx
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSearch, FiUser, FiBox, FiTool, FiLayers, FiLink, FiAlertTriangle } from "react-icons/fi";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { LuPencil, LuBook, LuMessageCircle } from "react-icons/lu";
import profile from "../assets/profile.png";

const Sidebar: FC = () => {
  const location = useLocation();
  
  const navGroups = [
    {
      label: "",
      links: [
        { icon: FiBox, text: "Explore", shortcut: "1", path: "/" },
        { icon: FiTool, text: "Experience", shortcut: "2", path: "/experience" },
        { icon: LuPencil, text: "Projects", shortcut: "3", path: "/projects" },
        { icon: FiLayers, text: "Services", shortcut: "4", path: "/services" },
        { icon: FiUser, text: "About", shortcut: "5", path: "/about" },
      ],
    },
    {
      label: "Resources",
      links: [
        { icon: FiBox, text: "Feed", shortcut: "6", path: "/feed" },
        { icon: LuBook, text: "Thoughts", shortcut: "7", path: "/thoughts" },
        { icon: FiLayers, text: "Stack", shortcut: "8", path: "/stack" },
      ],
    },
    {
      label: "Extras",
      links: [
        { icon: LuMessageCircle, text: "Guest Book", shortcut: "G", path: "/guest-book" },
        { icon: FiAlertTriangle, text: "Don't Click", shortcut: "D", path: "/dontclick" },
      ],
    },
    {
      label: "Connect",
      links: [
        { icon: FiLink, text: "Contact", shortcut: "C", path: "/contact" },
        { icon: FiLink, text: "Peerlist", shortcut: "↗", path: "https://peerlist.io/kodewithme", external: true },
        { icon: FaTwitter, text: "Twitter", shortcut: "↗", path: "https://twitter.com/ketanraichura8", external: true },
        { icon: FaLinkedin, text: "LinkedIn", shortcut: "↗", path: "https://www.linkedin.com/in/ketan-raichura-8a5262245/", external: true },
        { icon: FaGithub, text: "GitHub", shortcut: "↗", path: "https://github.com/yourusername", external: true },
        { icon: FaInstagram, text: "Instagram", shortcut: "↗", path: "https://instagram.com/ketnaraichura8", external: true },
      ],
    },
  ];

  // Helper function to render navigation links
  const renderNavLink = (link: any, index: number) => {
    const isActive = location.pathname === link.path;
    
    // For external links (social media, etc.)
    if (link.external) {
      return (
        <a 
          key={index}
          href={link.path}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex justify-between items-center p-2 rounded transition-colors duration-150 hover:bg-gray-800 cursor-pointer ${isActive ? 'bg-gray-800 text-white' : 'text-gray-400'}`}
        >
          <div className="flex items-center gap-3">
            <link.icon className="text-base" />
            <span className="text-sm">{link.text}</span>
          </div>
          <span className="text-xs text-gray-500">{link.shortcut}</span>
        </a>
      );
    }
    
    // For internal links (app routes)
    return (
      <Link 
        key={index}
        to={link.path}
        className={`flex justify-between items-center p-2 rounded transition-colors duration-150 hover:bg-gray-800 cursor-pointer ${isActive ? 'bg-gray-800 text-white' : 'text-gray-400'}`}
      >
        <div className="flex items-center gap-3">
          <link.icon className="text-base" />
          <span className="text-sm">{link.text}</span>
        </div>
        <span className="text-xs text-gray-500">{link.shortcut}</span>
      </Link>
    );
  };

  return (
<aside className="w-60 h-screen bg-[#1c1c1c] text-gray-200 p-4 flex flex-col justify-between overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#1c1c1c] [&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-600">
<div>
        {/* Profile */}
        <Link to="/" className="flex items-center gap-4 px-2 pt-1 pb-2">
          <img
            src={profile}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-700"
          />
          <div>
            <h1 className="text-md font-semibold leading-tight">Ketan Raichura</h1>
            <p className="text-sm text-gray-400">Software Engineer</p>
          </div>
        </Link>
        
        {/* Navigation Groups */}
        {navGroups.map((group, i) => (
          <div key={i} className="mt-6 mb-6 py-3">
            <p className="text-xs uppercase text-gray-500 mb-4 tracking-widest pl-2">{group.label}</p>
            {group.links.map((link, j) => renderNavLink(link, j))}
          </div>
        ))}
      </div>

      {/* Search Shortcut */}
      <div className="border-t border-gray-700 pt-4">
        <div className="flex items-center justify-between p-2 bg-[#1a1a1a] rounded-md cursor-pointer hover:bg-[#222]">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FiSearch />
            <span>Search or Ask...</span>
          </div>
          <span className="text-xs text-gray-500">⌘ + K</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
