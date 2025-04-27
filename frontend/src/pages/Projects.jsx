import { useState } from "react";
import ProjectItem from "../components/ProjectItem";
import sidebarImage from "../assets/sidebar.webp";
import ProjectImg from "../assets/project.png";

const Projects = ({ id }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "All" },
    { id: "applications", name: "App" },
    { id: "web-development", name: "Web" },
  ];

  const projects = [
    {
      id: 1,
      title: "Finance",
      category: "web-development",
      description: "A cutting-edge financial tool designed to enhance budgeting and expense tracking.",
      link: "#",
      image: ProjectImg,
    },
    {
      id: 2,
      title: "Orizon",
      category: "web-development",
      description: "Orizon streamlines digital collaboration for teams with real-time communication features.",
      link: "#",
      image: ProjectImg,
    },
    {
      id: 3,
      title: "Brawlhalla",
      category: "applications",
      description: "A dynamic gaming app with intuitive controls and immersive gameplay.",
      link: "#",
      image: ProjectImg,
    },
    {
      id: 4,
      title: "MetaSpark",
      category: "applications",
      description: "An AI-powered tool for generating creative digital designs effortlessly.",
      link: "#",
      image: ProjectImg,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <article
      id={id}
      className="relative overflow-hidden rounded-2xl shadow-2xl p-8 bg-gradient-to-br from-gray-900 to-gray-800"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url(${sidebarImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header>
        <h2 className="text-3xl font-bold text-white relative pb-3 mb-8 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-gradient-to-r after:from-yellow-500 after:to-yellow-600 after:rounded">
          Projects
        </h2>
      </header>

      {/* Filter Section */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg font-medium transition-all duration-300 ${
              activeFilter === filter.id
                ? "bg-yellow-500 text-black shadow-lg"
                : "bg-gray-700 text-gray-300 hover:bg-yellow-400 hover:text-gray-900"
            }`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.name}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ul>
    </article>
  );
};

export default Projects;
