import { useState } from 'react';
import { FaReact, FaDocker, FaGithub, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPrisma, SiPostgresql, SiExpress, SiMongodb, SiGraphql, SiJenkins, SiVercel, SiAmazon, SiKubernetes, SiPostman, SiGo, SiDeno, SiHono, SiShadcnui, SiCanva, SiPosthog } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { TbBrandVscode } from 'react-icons/tb';

const TOOL_CATEGORIES = [
  {
    name: 'Frontend Development',
    tools: [
      {
        name: 'Next.js',
        icon: <SiNextdotjs className="text-2xl" />, 
        desc: 'React framework for production-grade applications',
        tags: ['React', 'SSR', 'TypeScript'],
      },
      {
        name: 'TypeScript',
        icon: <SiTypescript className="text-2xl text-blue-500" />, 
        desc: 'Strongly typed programming language for JavaScript',
        tags: ['Language', 'JavaScript'],
      },
      {
        name: 'React',
        icon: <FaReact className="text-2xl text-blue-400" />, 
        desc: 'Library for building user interfaces',
        tags: ['UI', 'Components'],
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className="text-2xl text-cyan-400" />, 
        desc: 'Utility-first CSS framework',
        tags: ['CSS', 'Styling'],
      },
      {
        name: 'shadcn/ui',
        icon: <SiShadcnui className="text-2xl" />, 
        desc: 'Re-usable components built with Radix UI and Tailwind',
        tags: ['Components', 'UI', 'Tailwind'],
      },
    ],
  },
  {
    name: 'Backend Development',
    tools: [
      {
        name: 'Prisma',
        icon: <SiPrisma className="text-2xl text-green-400" />, 
        desc: 'Next-generation ORM for Node.js and TypeScript',
        tags: ['ORM', 'Database'],
      },
      {
        name: 'PostgreSQL',
        icon: <SiPostgresql className="text-2xl text-blue-400" />, 
        desc: 'Advanced open source database',
        tags: ['Database', 'SQL'],
      },
      {
        name: 'Express.js',
        icon: <SiExpress className="text-2xl" />, 
        desc: 'Fast, unopinionated web framework for Node.js',
        tags: ['Node.js', 'Web Framework'],
      },
      {
        name: 'Hono',
        icon: <SiHono className="text-2xl text-orange-400" />, 
        desc: 'Ultrafast web framework for edge computing',
        tags: ['Edge Computing', 'Web Framework'],
      },
      {
        name: 'Deno',
        icon: <SiDeno className="text-2xl text-gray-400" />, 
        desc: 'Modern runtime for JavaScript and TypeScript',
        tags: ['Runtime', 'JavaScript', 'TypeScript'],
      },
      {
        name: 'Go',
        icon: <SiGo className="text-2xl text-cyan-500" />, 
        desc: 'Simple and efficient programming language',
        tags: ['Language', 'Systems', 'Performance'],
      },
      {
        name: 'MongoDB',
        icon: <SiMongodb className="text-2xl text-green-500" />, 
        desc: 'Document-oriented NoSQL database',
        tags: ['Database', 'NoSQL'],
      },
      {
        name: 'GraphQL',
        icon: <SiGraphql className="text-2xl text-pink-400" />, 
        desc: 'Query language for APIs',
        tags: ['API', 'Query Language'],
      },
    ],
  },
  {
    name: 'DevOps & Cloud',
    tools: [
      {
        name: 'Docker',
        icon: <FaDocker className="text-2xl text-blue-400" />, 
        desc: 'Platform for building, shipping, and running applications',
        tags: ['Containers', 'DevOps'],
      },
      {
        name: 'Jenkins',
        icon: <SiJenkins className="text-2xl text-red-400" />, 
        desc: 'Open source automation server',
        tags: ['CI/CD', 'Automation'],
      },
      {
        name: 'Vercel',
        icon: <SiVercel className="text-2xl" />, 
        desc: 'Platform for frontend frameworks and static sites',
        tags: ['Hosting', 'Deployment'],
      },
      {
        name: 'AWS',
        icon: <SiAmazon className="text-2xl text-yellow-400" />, 
        desc: 'Comprehensive cloud computing platform',
        tags: ['Cloud', 'Infrastructure'],
      },
      {
        name: 'Kubernetes',
        icon: <SiKubernetes className="text-2xl text-blue-300" />, 
        desc: 'Container orchestration platform',
        tags: ['Container Orchestration', 'DevOps'],
      },
    ],
  },
  {
    name: 'Development Tools',
    tools: [
      {
        name: 'Git',
        icon: <FaGitAlt className="text-2xl text-orange-400" />, 
        desc: 'Distributed version control system',
        tags: ['Version Control'],
      },
      {
        name: 'GitHub',
        icon: <FaGithub className="text-2xl" />, 
        desc: 'Platform for software development and collaboration',
        tags: ['Git', 'Collaboration'],
      },
      {
        name: 'Postman',
        icon: <SiPostman className="text-2xl text-orange-400" />, 
        desc: 'API platform for building and testing APIs',
        tags: ['API', 'Testing'],
      },
      {
        name: 'PostHog',
        icon: <SiPosthog className="text-2xl text-pink-400" />, 
        desc: 'Open source product analytics platform',
        tags: ['Analytics', 'Product Metrics'],
      },
      {
        name: 'Cursor',
        icon: <TbBrandVscode className="text-2xl text-blue-400" />, 
        desc: 'AI-first code editor built on VSCode',
        tags: ['IDE', 'AI', 'Code Editor'],
      },
      {
        name: 'v0',
        icon: <VscCode className="text-2xl text-gray-400" />, 
        desc: 'AI-powered UI generation from text prompts',
        tags: ['AI', 'UI Generation', 'Components'],
      },
    ],
  },
  {
    name: 'Design Tools',
    tools: [
      {
        name: 'Figma',
        icon: <FaFigma className="text-2xl text-pink-400" />, 
        desc: 'Collaborative interface design tool',
        tags: ['Design', 'UI/UX'],
      },
      {
        name: 'Canva',
        icon: <SiCanva className="text-2xl text-blue-400" />, 
        desc: 'Online design and visual content creation platform',
        tags: ['Design', 'Graphics', 'Content Creation'],
      },
    ],
  },
];

export default function Stack() {
  const [search, setSearch] = useState('');

  const filteredCategories = TOOL_CATEGORIES.map(category => ({
    ...category,
    tools: category.tools.filter(tool =>
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.desc.toLowerCase().includes(search.toLowerCase()) ||
      tool.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
    )
  })).filter(category => category.tools.length > 0);

  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold mb-2">Tools I Use Daily</h1>
      <p className="text-gray-400 mb-8 text-lg">A curated list of my favorite tools, frameworks, and services that power my projects.</p>
      <input
        type="text"
        placeholder="Search tools..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full mb-8 p-2 rounded bg-[#18181b] border border-[#232329] text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-700"
      />
      <div className="space-y-8">
        {filteredCategories.map(category => (
          <div key={category.name} className="bg-[#18181b] rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.tools.map(tool => (
                <div key={tool.name} className="flex items-start gap-4 bg-[#101012] rounded-lg p-4 border border-[#232329]">
                  <div className="mt-1">{tool.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg font-medium text-white">{tool.name}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{tool.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {tool.tags.map(tag => (
                        <span key={tag} className="bg-[#232329] text-xs text-gray-300 px-2 py-0.5 rounded font-mono">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
