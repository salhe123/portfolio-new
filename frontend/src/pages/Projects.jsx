import { useState } from "react";
import ProjectItem from "../components/ProjectItem";
import sidebarImage from "../assets/sidebar.webp";
import ProjectImg from "../assets/project.png";
import biometric from "../assets/biometric.png";
import eventease from "../assets/eventease.png";
import birra from "../assets/birra.png";
import future from "../assets/future.png";

const Projects = ({ id, theme }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "All" },
    { id: "applications", name: "App" },
    { id: "web-development", name: "Web" },
  ];

  const projects = [
    {
      id: 1,
      title: "EventEase",
      category: "web-development",
      description: "EventEase is a comprehensive event management platform that simplifies the planning and execution of events, from conferences to weddings.and also it have 3 main features like admin, Organizor, and attendee engagement.",
      link: "https://event-ifyp.vercel.app/",
      image: eventease,
      tags: ["Nextjs",  "Tailwind","Shadicn","Node.js", "SQL","Squlize"],
    },
    {
      id: 2,
      title: "Biomedical Horizon Network",
      category: "web-development",
      description: "A platform connecting biomedical researchers and professionals to share knowledge, resources, and opportunities in the field.",
      link: "https://www.biomedicalhorizonnetwork.com/",
      image: biometric,
      tags: ["Next.js", "Tailwind", "Shadcn", "Node.js", "SQL", "Sequelize","framer-motion"],
    },
    {
      id: 3,
      title: "Birra Group",
      category: "web-development",
      description: "A modern web application for managing and tracking beer production, sales, and distribution additional with Cofee import and export management.",
      link: "https://birragroup.com/",
      image: birra,
      tags: ["Nextjs", "Tailwind","Shadicn","Better Auth"],
    },
    {
      id: 4,
      title: "FutureX",
      category: "applications",
      description: "FutureX is a mobile application that is E-Learning App to provide personalized learning experiences, career guidance, and skill development resources for Students.",
      link: "https://play.google.com/store/apps/details?id=com.inspireethiopia.net.futurexappversion2",
      image: future,
      tags: ["Flutter", "Dart", "Node.js", "Firebase", "REST API"],
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <article
      id={id}
      className={`relative overflow-hidden rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 transition-all duration-300 ${
        theme === 'light' ? 'bg-white border-gray-200' : 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-300/20 dark:border-gray-600/30 backdrop-blur-lg'
      }`}
      style={{
        backgroundImage: theme === 'light' ? 'none' : `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url(${sidebarImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header>
        <h2 className={`text-2xl sm:text-3xl font-bold relative pb-3 mb-6 sm:mb-8 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-gradient-to-r after:from-yellow-500 after:to-yellow-600 after:rounded ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}>
          Projects
        </h2>
      </header>

      {/* Filter Section */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
              activeFilter === filter.id
                ? 'bg-yellow-500 text-black shadow-lg'
                : theme === 'light' ? 'bg-gray-200 text-gray-900 hover:bg-yellow-400 hover:text-gray-900' : 'bg-gray-700 text-gray-300 hover:bg-yellow-400 hover:text-gray-900'
            }`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.name}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {filteredProjects.map((project) => (
          <ProjectItem key={project.id} project={project} theme={theme} />
        ))}
      </ul>
    </article>
  );
};

export default Projects;