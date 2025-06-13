import { useState } from 'react'; 
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState("about");
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`min-h-screen font-poppins ${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-gray-300'}`}>
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-80 lg:fixed lg:top-8 lg:left-8">
          <Sidebar theme={theme} />
        </div>

        {/* Main Content */}
        <div className={`w-full lg:ml-96 pb-16 lg:pb-0 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
          {/*Year is 2025*/} 
          <Navbar activePage={activePage} setActivePage={setActivePage} theme={theme} toggleTheme={toggleTheme} />

          {/* All Sections */}
          <div className={`rounded-xl shadow-lg border p-2 mt-4 space-y-8 ${
            theme === 'light' ? 'bg-white border-gray-200' : 'bg-gray-800 border-gray-700'
          }`}>
            <About id="about" theme={theme} />
            <Resume id="resume" theme={theme} />
            <Projects id="projects" theme={theme} />
            {/* <Blog id="blog" theme={theme} /> */}
            <Contact id="contact" theme={theme} />
          </div>
        </div>
      </div>
    </div>
  );
}