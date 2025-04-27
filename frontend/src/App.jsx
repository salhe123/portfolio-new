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

  const renderPage = () => {
    switch (activePage) {
      case "about":
        return <About id="about" />;
      case "resume":
        return <Resume id="resume" />;
      case "projects":
        return <Projects id="projects" />;
      case "blog":
        return <Blog id="blog" />;
      case "contact":
        return <Contact id="contact" />;
      default:
        return <About id="about" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 font-poppins text-gray-300 pb-16 lg:pb-0">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-1">
            {/* Navbar */}
            <Navbar activePage={activePage} setActivePage={setActivePage} />

            {/* Page Content */}
            <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-2 mt-4">
              {renderPage()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}