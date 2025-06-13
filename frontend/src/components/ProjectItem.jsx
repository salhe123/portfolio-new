import { IoArrowForward } from "react-icons/io5";

const ProjectItem = ({ project, theme }) => {
  return (
    <li className={`group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${
      theme === 'light' ? 'bg-white border border-gray-200' : 'bg-gray-800/50 backdrop-blur-sm border border-gray-600/30'
    }`}>
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-6">
        {/* Category Tag */}
        <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mb-2 ${
          theme === 'light' ? 'bg-gray-200 text-gray-900' : 'bg-yellow-500/20 text-yellow-400'
        }`}>
          {project.category === 'web-development' ? 'Web' : 'App'}
        </span>

        {/* Title */}
        <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className={`text-sm sm:text-base mb-4 line-clamp-3 ${
          theme === 'light' ? 'text-gray-600' : 'text-gray-300'
        }`}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs rounded-full ${
                theme === 'light' ? 'bg-gray-100 text-gray-700' : 'bg-gray-700 text-gray-300'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Project Button */}
        <a
          href={project.link}
          className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-gray-900 ${
            theme === 'light' ? 'bg-gray-200 text-gray-900 hover:bg-yellow-400' : 'bg-gray-700 text-gray-300 hover:bg-yellow-400'
          }`}
        >
          View Project
          <IoArrowForward className="ml-2 text-lg transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </li>
  );  
};

export default ProjectItem;