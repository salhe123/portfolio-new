import { useState } from 'react'
import { IoEyeOutline, IoChevronDown } from 'react-icons/io5'
import ProjectItem from '../components/ProjectItem'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [showSelectList, setShowSelectList] = useState(false)

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'web-design', name: 'Web design' },
    { id: 'applications', name: 'Applications' },
    { id: 'web-development', name: 'Web development' }
  ]

  const projects = [
    {
      id: 1,
      title: "Finance",
      category: "web-development",
      image: "/src/assets/images/project-1.jpg"
    },
    {
      id: 2,
      title: "Orizon",
      category: "web-development",
      image: "/src/assets/images/project-2.png"
    },
    {
      id: 3,
      title: "Fundo",
      category: "web-design",
      image: "/src/assets/images/project-3.jpg"
    },
    {
      id: 4,
      title: "Brawlhalla",
      category: "applications",
      image: "/src/assets/images/project-4.png"
    },
    {
      id: 5,
      title: "DSM.",
      category: "web-design",
      image: "/src/assets/images/project-5.png"
    },
    {
      id: 6,
      title: "MetaSpark",
      category: "web-design",
      image: "/src/assets/images/project-6.png"
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <article className="card portfolio">
      <header>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Portfolio</h2>
      </header>

      <section className="projects">
        <div className="flex justify-between items-center mb-6">
          <ul className="filter-list hidden md:flex space-x-2">
            {filters.map(filter => (
              <li key={filter.id} className="filter-item">
                <button
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeFilter === filter.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="filter-select-box md:hidden relative">
            <button 
              className="filter-select bg-gray-100 px-4 py-2 rounded-md flex items-center"
              onClick={() => setShowSelectList(!showSelectList)}
            >
              <span className="mr-2">
                {filters.find(f => f.id === activeFilter)?.name || 'Select category'}
              </span>
              <IoChevronDown className={`transition-transform ${showSelectList ? 'rotate-180' : ''}`} />
            </button>

            {showSelectList && (
              <ul className="select-list absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md w-full z-10">
                {filters.map(filter => (
                  <li key={filter.id} className="select-item">
                    <button
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                        activeFilter === filter.id ? 'bg-blue-50 text-blue-600' : ''
                      }`}
                      onClick={() => {
                        setActiveFilter(filter.id)
                        setShowSelectList(false)
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
          {filteredProjects.map(project => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </ul>
      </section>
    </article>
  )
}