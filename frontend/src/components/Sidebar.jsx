import { useState } from "react";
import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoCalendarOutline,
  IoLocationOutline,
  IoChevronDown,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";
import { SiTelegram } from "react-icons/si";
import sidebarImage from "../assets/sidebar.webp";
import pic from "../assets/pic.jpg";

const Sidebar = ({ theme }) => {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <aside
      className={`w-full lg:w-80 lg:h-[calc(100vh-2rem)] lg:overflow-y-auto rounded-2xl shadow-xl border p-8 transition-all duration-300 relative sidebar-no-scrollbar ${
        theme === 'light' ? 'bg-white/90 border-gray-200' : 'bg-white/10 dark:bg-dark-800/30 border-gray-300/20 dark:border-gray-600/30'
      }`}
      style={{
        backgroundImage: theme === 'light' ? 'none' : `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${sidebarImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative z-10">
        <div className="sidebar-info">
          <figure className="avatar-box w-28 h-28 rounded-2xl overflow-hidden mx-auto border-4 border-white/30 shadow-lg mb-6">
            <img
              src={pic}
              alt="Salh Seid"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </figure>

          <div className="info-content text-center">
            <h1 className={`text-3xl font-extrabold tracking-tight mb-1 ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              Salh Seid
              {/* <span className="block text-yellow-400 text-lg font-medium mt-1">
                @salhdev
              </span> */}
            </h1>
            <p className={`text-[10px] rounded-full px-5 py-2 inline-block mt-2 border border-yellow-400/30 ${
  theme === 'light' ? 'bg-gray-200 text-gray-900' : 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-white/90 backdrop-blur-md'
}`}>
  Fullstack Dev. | Website Dev. | Mobile Dev.
</p>

            <a
              href="#"
              download="Salh_Seid_Resume.pdf"
              className="mt-4 inline-block px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Download Resume
            </a>
          </div>

          <button
            className={`info_more-btn flex items-center justify-center mt-8 mx-auto transition-all group ${
              theme === 'light' ? 'text-gray-800 hover:text-yellow-600' : 'text-white/90 hover:text-yellow-400'
            }`}
            onClick={() => setShowContacts(!showContacts)}
          >
            <span className="text-sm font-semibold tracking-wide group-hover:text-yellow-400 transition-colors">
              {showContacts ? "Hide Contacts" : "Show Contacts"}
            </span>
            <IoChevronDown
              className={`ml-2 text-lg transition-transform duration-300 ${
                showContacts ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`sidebar-info_more mt-8 transition-all duration-500 ease-in-out ${
            showContacts ? "max-h-[1000px]" : "max-h-0 overflow-hidden"
          }`}
        >
          <div className="separator h-px bg-gradient-to-r from-transparent via-gray-300/30 to-transparent my-6"></div>

          <ul className="contacts-list space-y-6">
            <li className="contact-item flex items-center group">
              <div className={`icon-box p-3 rounded-xl mr-4 text-yellow-400 shadow-lg group-hover:bg-yellow-400/20 transition-colors ${
                theme === 'light' ? 'bg-gray-200' : 'bg-white/10 backdrop-blur-md'
              }`}>
                <IoMailOutline className="text-xl" />
              </div>
              <div className="contact-info">
                <p className="contact-title text-xs uppercase tracking-wider mb-1 text-gray-500">
                  Email
                </p>
                <a
                  href="mailto:salhseid@gmail.com"
                  className={`contact-link text-lg font-medium transition-colors ${
                    theme === 'light' ? 'text-gray-900 hover:text-yellow-600' : 'text-white hover:text-yellow-400'
                  }`}
                >
                  salhseid92@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item flex items-center group">
              <div className={`icon-box p-3 rounded-xl mr-4 text-yellow-400 shadow-lg group-hover:bg-yellow-400/20 transition-colors ${
                theme === 'light' ? 'bg-gray-200' : 'bg-white/10 backdrop-blur-md'
              }`}>
                <IoPhonePortraitOutline className="text-xl" />
              </div>
              <div className="contact-info">
                <p className="contact-title text-xs uppercase tracking-wider mb-1 text-gray-500">
                  Phone
                </p>
                <a
                  href="tel:+251966782248"
                  className={`contact-link text-lg font-medium transition-colors ${
                    theme === 'light' ? 'text-gray-900 hover:text-yellow-600' : 'text-white hover:text-yellow-400'
                  }`}
                >
                  +251 96 678 2248
                </a>
              </div>
            </li>

            {/* <li className="contact-item flex items-center group">
              <div className={`icon-box p-3 rounded-xl mr-4 text-yellow-400 shadow-lg group-hover:bg-yellow-400/20 transition-colors ${
                theme === 'light' ? 'bg-gray-200' : 'bg-white/10 backdrop-blur-md'
              }`}>
                <IoCalendarOutline className="text-xl" />
              </div>
              <div className="contact-info">
                <p className="contact-title text-xs uppercase tracking-wider mb-1 text-gray-500">
                  Birthday
                </p>
                <time className={`text-lg font-medium ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                  June 23, 2000
                </time>
              </div>
            </li> */}

            <li className="contact-item flex items-center group">
              <div className={`icon-box p-3 rounded-xl mr-4 text-yellow-400 shadow-lg group-hover:bg-yellow-400/20 transition-colors ${
                theme === 'light' ? 'bg-gray-200' : 'bg-white/10 backdrop-blur-md'
              }`}>
                <IoLocationOutline className="text-xl " />
              </div>
              <div className="contact-info">
                <p className="contact-title text-xs uppercase tracking-wider mb-1 text-gray-500">
                  Location
                </p>
                <address className={`text-lg font-medium not-italic ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                  Addis Ababa, Ethiopia
                </address>
              </div>
            </li>
          </ul>

          <div className="separator h-px bg-gradient-to-r from-transparent via-gray-300/30 to-transparent my-8"></div>

          <div className="text-center mb-4">
            <h3 className="text-sm uppercase tracking-wider mb-5 text-gray-500">
              Connect With Me
            </h3>
            <ul className="social-list flex justify-center space-x-5">
              <li className="social-item">
                <a
                  href="https://github.com/salhe123"
                  className={`social-link p-3 rounded-xl inline-block transition-all transform hover:-translate-y-1 shadow-lg ${
                    theme === 'light' ? 'bg-gray-200 text-gray-900 hover:bg-blue-600 hover:text-white' : 'bg-white/10 backdrop-blur-md text-white hover:bg-blue-600'
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoGithub className="text-xl" />
                </a>
              </li>
              <li className="social-item">
                <a
                  href="https://www.linkedin.com/in/salhes"
                  className={`social-link p-3 rounded-xl inline-block transition-all transform hover:-translate-y-1 shadow-lg ${
                    theme === 'light' ? 'bg-gray-200 text-gray-900 hover:bg-blue-500 hover:text-white' : 'bg-white/10 backdrop-blur-md text-white hover:bg-blue-500'
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoLinkedin className="text-xl" />
                </a>
              </li>
              {/* <li className="social-item">
                <a
                  href="https://www.instagram.com/ibnu_seid27?igsh=MWZiZTNldTRwb2w0bg=="
                  className={`social-link p-3 rounded-xl inline-block transition-all transform hover:-translate-y-1 shadow-lg ${
                    theme === 'light' ? 'bg-gray-200 text-gray-900 hover:bg-pink-600 hover:text-white' : 'bg-white/10 backdrop-blur-md text-white hover:bg-pink-600'
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoInstagram className="text-xl" />
                </a>
              </li> */}
              <li className="social-item">
                <a
                  href="https://x.com/salhe20476?t=5sI2SZQiR7bZeH6xCUYFpw&s=09"
                  className={`social-link p-3 rounded-xl inline-block transition-all transform hover:-translate-y-1 shadow-lg ${
                    theme === 'light' ? 'bg-gray-200 text-gray-900 hover:bg-blue-400 hover:text-white' : 'bg-white/10 backdrop-blur-md text-white hover:bg-blue-400'
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoTwitter className="text-xl" />
                </a>
              </li>
              <li className="social-item">
                <a
                  href="https://t.me/SISAY7"
                  className={`social-link p-3 rounded-xl inline-block transition-all transform hover:-translate-y-1 shadow-lg ${
                    theme === 'light' ? 'bg-gray-200 text-gray-900 hover:bg-blue-300 hover:text-white' : 'bg-white/10 backdrop-blur-md text-white hover:bg-blue-300'
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiTelegram className="text-xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;