import ThemeToggle from './ThemeToggle'
import sidebarImage from '../assets/sidebar.webp'

export default function Navbar({ activePage, setActivePage }) {
  const pages = [
    { id: 'about', name: 'About' },
    { id: 'resume', name: 'Resume' },
    { id: 'projects', name: 'Projects' },
    { id: 'blog', name: 'Blog' },
    { id: 'contact', name: 'Contact' }
  ]

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className="hidden lg:flex w-full rounded-2xl shadow-xl border border-gray-300/20 dark:border-gray-600/30 p-4 mb-6 items-center justify-between backdrop-blur-lg bg-white/10 dark:bg-dark-800/30 transition-all duration-300 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${sidebarImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <ul className="flex space-x-4">
          {pages.map(page => (
            <li key={page.id}>
              <button
                className={`px-5 py-2 rounded-xl font-semibold tracking-wide transition-all duration-300 ${
                  activePage === page.id
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 shadow-md'
                    : 'text-white/80 hover:text-yellow-400'
                }`}
                onClick={() => setActivePage(page.id)}
              >
                {page.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden fixed bottom-4 left-4 right-4 mx-auto bg-white/10 dark:bg-dark-800/30 backdrop-blur-lg shadow-lg border border-gray-300/20 dark:border-gray-600/30 rounded-2xl p-2 flex items-center justify-between z-50">
        <ul className="flex flex-1 justify-around items-center">
          {pages.map(page => (
            <li key={page.id}>
              <button
                className={`flex flex-col items-center text-xs font-medium transition-all duration-300 ${
                  activePage === page.id
                    ? 'text-yellow-400'
                    : 'text-white/80 hover:text-yellow-400'
                }`}
                onClick={() => setActivePage(page.id)}
              >
                {page.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="ml-2">
          <ThemeToggle />
        </div>
      </nav>
    </>
  )
}
