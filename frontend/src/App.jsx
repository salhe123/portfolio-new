import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

export default function App() {
  const [activePage, setActivePage] = useState('about')

  const renderPage = () => {
    switch (activePage) {
      case 'about': return <About />
      case 'resume': return <Resume />
      case 'projects': return <Projects />
      case 'blog': return <Blog />
      case 'contact': return <Contact />
      default: return <About />
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 font-poppins text-gray-300 pb-16 lg:pb-0" >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <Sidebar />
          
          {/* Main Content */}
          <div className="flex-1">
            {/* Navbar */}
            <Navbar activePage={activePage} setActivePage={setActivePage} />
            
            {/* Page Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-2 mt-4"
              >
                {renderPage()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}