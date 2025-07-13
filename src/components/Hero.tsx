import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const [email, setEmail] = useState('');

  return (
    <div className="px-6 py-12 p-6 md:p-12 max-w-6xl mx-25">
      {/* Header Section */}
      <header className="mb-5">
        <h1 className="text-5xl font-normal mb-2">
          Hey, I'm Ketan,<br />
          A Full-Stack <span className="text-gray-400">Developer.</span>
        </h1>
        <p className="text-gray-400 mt-6 mb-8 max-w-2xl">
          I'm a developer who enjoys building web applications and exploring new technologies —
          basically, I spend most of my time in front of a screen.
        </p>
        <div className="flex gap-3">
          <Button asChild className="bg-gray-600 text-white hover:bg-gray-900">
            <Link to="/about">About</Link>
          </Button>
          <Button 
            className="bg-zinc-900 border border-gray-600 text-white hover:text-gray-400 flex items-center gap-2"
            onClick={() => {
              navigator.clipboard.writeText('ketanraichura.official@gmail.com');
              const button = document.querySelector('.email-button');
              if (button) {
                button.textContent = 'Copied!';
                setTimeout(() => {
                  button.textContent = 'Email';
                }, 2000);
              }
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span className="email-button">Email</span>
          </Button>
        </div>
      </header>

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-md font-normal mb-3">New Drops</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Card 1 */}
          <Card className="bg-zinc-800 overflow-hidden rounded-lg">
            <div className="h-64 bg-gray-700 relative">
              <div className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">AI</div>
              <img src="/api/placeholder/600/400" alt="System Prompt Generator" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">System Prompt Generator</h3>
              <p className="text-gray-400 text-sm mt-1">
                A modern web application that helps users create effective AI system prompts with intelligent suggestions.
              </p>
            </div>
          </Card>

          {/* Project Card 2 */}
          <Card className="bg-zinc-800 overflow-hidden rounded-lg">
            <div className="h-64 bg-gray-700 relative">
              <div className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">AI Chat</div>
              <img src="/api/placeholder/600/400" alt="LumeAI" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">LumeAI</h3>
              <p className="text-gray-400 text-sm mt-1">
                LumeAI is a cutting-edge AI-powered chat application featuring advanced conversation capabilities.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Section */}
      <div className=' border border-[#1c1c1c] rounded-md'>
      <section className="mb-3  rounded-lg p-5">
        <h2 className="text-xl font-normal mb-2">Thoughts</h2>
        <p className="text-gray-400 mb-6 font-light">Sharing experiences, knowledge and videos on system design & tech.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {/* Blog Post 1 */}
          <div className="flex items-start gap-3 bg-zinc-900 rounded-lg">
            <div className="mt-1">
              <div className="bg-zinc-800 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-md font-light">Best Coding Practices for Modern Web Development</h3>
              <p className="text-gray-400 text-sm mt-1 font-thin">A comprehensive guide to the best coding practices for developers.</p>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="flex items-start gap-3 bg-zinc-900 rounded-lg">
            <div className="mt-1">
              <div className="bg-zinc-800 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-md font-light">Building MDX Blog with Contentlayer and Next.js</h3>
              <p className="text-gray-400 text-sm mt-1 font-thin">The world of digital design isn't limited to creating for screens.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-2 bg-[#1c1c1c] rounded-md pt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Join with like-minded developers</h3>
            <p className="text-gray-400 text-sm">Sent out every two weeks. No spam.</p>
          </div>
          <div className="flex gap-2">
            <Input 
              type="email" 
              placeholder="Your E-mail" 
              className="bg-zinc-800 border-zinc-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button className="bg-white text-black hover:bg-gray-200">Subscribe</Button>
          </div>
        </div>
      </section>
      </div>
      

      {/* Newsletter Section */}
      
    </div>
  );
}