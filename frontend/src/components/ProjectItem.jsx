import { IoEyeOutline, IoChevronDown } from "react-icons/io5";

const ProjectItem=({ project }) =>{
  return (
    <li className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
      <a href={project.link} className="block">
        <figure className="relative group">
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <IoEyeOutline className="text-white text-3xl" />
          </div>
        </figure>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
          <p className="text-gray-600">{project.description}</p>
        </div>
      </a>
    </li>
  );
}

export default ProjectItem
