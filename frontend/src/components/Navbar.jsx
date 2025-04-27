import ThemeToggle from './ThemeToggle'
import sidebarImage from '../assets/sidebar.webp'

export default function Navbar({ activePage, setActivePage }) {
  const pages = [
    { id: 'about', name: 'About' },
    { id: 'resume', name: 'Resume' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'blog', name: 'Blog' },
    { id: 'contact', name: 'Contact' }
  ]

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="card hidden lg:flex bg-white dark:bg-dark-800 rounded-xl shadow-lg border border-gray-200 dark:border-dark-700 mb-4 p-2 items-center"      style={{
              backgroundImage: `url(${sidebarImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>
              
        <ul className="flex space-x-1 flex-1">
          {pages.map(page => (
            <li key={page.id}>
              <button
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activePage === page.id 
                    ? 'bg-gradient-to-br from-yellow-500 to-yellow-600 text-gray-900' 
                    : 'text-gray-700 hover:text-yellow-500'
                }`}
                onClick={() => setActivePage(page.id)}
              >
                {page.name}
              </button>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-800 shadow-lg border-t border-gray-200 dark:border-dark-700 z-50">
        <div className="flex items-center">
          {pages.map(page => (
            <button
              key={page.id}
              className={`flex-1 py-3 px-2 text-xs font-medium ${
                activePage === page.id 
                  ? 'text-yellow-500' 
                  : 'text-gray-700 hover:text-yellow-500'
              }`}
              onClick={() => setActivePage(page.id)}
            >
              <div className="flex flex-col items-center">
                <span>{page.name}</span>
              </div>
            </button>
          ))}
          <div className="p-2">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </>
  )
}