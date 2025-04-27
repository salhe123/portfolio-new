import { useState } from "react";
import { IoEyeOutline, IoChevronDown } from "react-icons/io5";
import ProjectItem from "../components/ProjectItem";
import sidebarImage from "../assets/sidebar.webp";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showSelectList, setShowSelectList] = useState(false);

  const filters = [
    { id: "all", name: "All" },
    { id: "web-design", name: "Web Design" },
    { id: "applications", name: "Applications" },
    { id: "web-development", name: "Web Development" },
  ];

  const projects = [
    {
      id: 1,
      title: "Finance",
      category: "web-development",
      image: "/src/assets/images/project-1.jpg",
    },
    {
      id: 2,
      title: "Orizon",
      category: "web-development",
      image: "/src/assets/images/project-2.png",
    },
    {
      id: 3,
      title: "Fundo",
      category: "web-design",
      image: "/src/assets/images/project-3.jpg",
    },
    {
      id: 4,
      title: "Brawlhalla",
      category: "applications",
      image: "/src/assets/images/project-4.png",
    },
    {
      id: 5,
      title: "DSM.",
      category: "web-design",
      image: "/src/assets/images/project-5.png",
    },
    {
      id: 6,
      title: "MetaSpark",
      category: "web-design",
      image: "/src/assets/images/project-6.png",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <article 
      className="relative overflow-hidden rounded-2xl shadow-2xl"
      style={{
        background: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url(${sidebarImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Decorative yellow accent elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
      <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-yellow-400/10 blur-xl"></div>
      
      <div className="p-8 relative z-10">
        <header className="mb-10">
          <h2 className="text-4xl font-bold text-white mb-2 relative inline-block">
            Projects
          </h2>
          <p className="text-gray-300">Explore my creative work and professional projects</p>
        </header>

        <section className="projects">
          <div className="flex justify-between items-center mb-12">
            <ul className="filter-list hidden md:flex space-x-3">
              {filters.map((filter) => (
                <li key={filter.id} className="filter-item">
                  <button
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeFilter === filter.id
                        ? "bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-400/30"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700"
                    }`}
                    onClick={() => setActiveFilter(filter.id)}
                  >
                    {filter.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="filter-select-box md:hidden relative w-48">
              <button
                className="filter-select w-full bg-gray-800 hover:bg-gray-700 text-gray-300 px-5 py-2.5 rounded-full flex items-center justify-between border border-gray-700 transition-colors"
                onClick={() => setShowSelectList(!showSelectList)}
              >
                <span>
                  {filters.find((f) => f.id === activeFilter)?.name ||
                    "Select Category"}
                </span>
                <IoChevronDown
                  className={`transition-transform duration-200 ${
                    showSelectList ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showSelectList && (
                <ul className="select-list absolute top-full left-0 mt-2 bg-gray-800 shadow-xl rounded-xl w-full z-10 border border-gray-700 overflow-hidden">
                  {filters.map((filter) => (
                    <li key={filter.id} className="select-item">
                      <button
                        className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors ${
                          activeFilter === filter.id
                            ? "bg-yellow-400/10 text-yellow-400"
                            : "text-gray-300 hover:bg-gray-700"
                        }`}
                        onClick={() => {
                          setActiveFilter(filter.id);
                          setShowSelectList(false);
                        }}
                      >
                        {filter.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <ul className="project-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}