import { IoEyeOutline } from 'react-icons/io5'

export default function ProjectItem({ project }) {
  return (
    <li className="project-item bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <a href="#" className="block">
        <figure className="project-img relative overflow-hidden group">
          <div className="project-item-icon-box absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <IoEyeOutline className="text-white text-2xl" />
          </div>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-48 object-cover transition-transform group-hover:scale-105"
          />
        </figure>

        <div className="p-4">
          <h3 className="project-title text-lg font-medium text-gray-800">{project.title}</h3>
          <p className="project-category text-gray-500 capitalize">{project.category.replace('-', ' ')}</p>
        </div>
      </a>
    </li>
  )
}