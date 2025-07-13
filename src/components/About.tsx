import { MapPin, Briefcase, Box, Layers, Compass, LifeBuoy } from 'lucide-react';
import profile from "../assets/profile.png"

export default function PersonalWebsite() {
  return (
    <div className="px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header with location */}
        <div className="flex items-center mb-8">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-gray-400">Based in India</span>
        </div>

        {/* Main content section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left content - About me */}
          <div className="md:col-span-3">
            <h1 className="text-5xl font-bold text-white mb-6">About Me</h1>
            <p className="text-gray-400 mb-8">
              Hi, I'm Harshit, a software engineer based in India. I
              specialize in creating functional, responsive websites
              and web applications, always staying up-to-date with
              new technologies to provide high-quality solutions. My
              goal is to deliver seamless user experiences and help
              businesses grow online.
            </p>

            {/* Info sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Background section */}
              <div>
                <div className="flex items-center mb-4">
                  <Briefcase className="h-5 w-5 mr-2" />
                  <h2 className="text-xl font-semibold text-white">Background</h2>
                </div>
                <p className="text-gray-400">
                  I've been involved in web development since 2017,
                  focusing on full-stack development and DevOps. I
                  am currently pursuing a B.Tech degree.
                </p>
              </div>

              {/* Skills section */}
              <div>
                <div className="flex items-center mb-4">
                  <Layers className="h-5 w-5 mr-2" />
                  <h2 className="text-xl font-semibold text-white">Skills</h2>
                </div>
                <p className="text-gray-400">
                  MERN, Next.js, TypeScript, Git, Docker, Prisma, Jenkins,
                  Postgres and AWS.
                </p>
              </div>

              {/* Interests section */}
              <div>
                <div className="flex items-center mb-4">
                  <Compass className="h-5 w-5 mr-2" />
                  <h2 className="text-xl font-semibold text-white">Interests</h2>
                </div>
                <p className="text-gray-400">
                  Exploring new tech, Web3, DevOps, and AI.
                </p>
              </div>

              {/* Hobbies section */}
              <div>
                <div className="flex items-center mb-4">
                  <LifeBuoy className="h-5 w-5 mr-2" />
                  <h2 className="text-xl font-semibold text-white">Hobbies</h2>
                </div>
                <p className="text-gray-400">
                  Hiking, cycling, playing instruments, cooking, and
                  traveling.
                </p>
              </div>
            </div>
          </div>

          {/* Right content - Profile image */}
          <div className="md:col-span-2">
            <div className="rounded-lg overflow-hidden h-64 w-64 mx-auto md:mx-0">
              <img
                src={profile} 
                alt="Harshit Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Stack card */}
          <div className=" bg-opacity-50 rounded-lg p-8 border border-gray-600">
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
          <div className=" bg-opacity-50 rounded-lg p-8 border border-gray-600">
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
