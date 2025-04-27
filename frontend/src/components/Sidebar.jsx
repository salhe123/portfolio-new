import { useState } from 'react'
import { 
  IoMailOutline, 
  IoPhonePortraitOutline, 
  IoCalendarOutline, 
  IoLocationOutline,
  IoChevronDown,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'
import sidebarImage from '../assets/sidebar.webp'
import Avatar from "../assets/avater.jpg"

export default function Sidebar() {
  const [showContacts, setShowContacts] = useState(false)

  return (
    <aside 
      className="w-full lg:w-80 rounded-2xl shadow-xl border border-gray-300/20 dark:border-gray-600/30 p-8 transition-all duration-300 relative overflow-hidden"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${sidebarImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative z-10">
        {/* Avatar Section */}
        <div className="sidebar-info">
          <figure className="avatar-box w-28 h-28 rounded-2xl overflow-hidden mx-auto border-4 border-white/30 shadow-lg mb-6">
            <img 
              src={Avatar} 
              alt="Salh Seid" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </figure>

          <div className="info-content text-center">
            <h1 className="text-3xl font-extrabold text-white tracking-tight mb-1">
              Salh Seid
              <span className="block text-yellow-400 text-lg font-medium mt-1">@salhdev</span>
            </h1>
            <p className="text-sm bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-white/90 rounded-full px-5 py-2 inline-block mt-2 backdrop-blur-md border border-yellow-400/30">
              Fullstack Developer
            </p>
          </div>

          <button 
            className="info_more-btn flex items-center justify-center mt-8 mx-auto text-white/90 hover:text-yellow-400 transition-all group"
            onClick={() => setShowContacts(!showContacts)}
          >
            <span className="text-sm font-semibold tracking-wide group-hover:text-yellow-400 transition-colors">
              {showContacts ? 'Hide Contacts' : 'Show Contacts'}
            </span>
            <IoChevronDown className={`ml-2 text-lg transition-transform duration-300 ${showContacts ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Contacts Section */}
        <div className={`sidebar-info_more mt-8 overflow-hidden transition-all duration-500 ease-in-out ${showContacts ? 'max-h-[500px]' : 'max-h-0'}`}>
          <div className="separator h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-6"></div>

          <ul className="contacts-list space-y-6">
            <li className="contact-item flex items-center group">
              <div className="icon-box bg-white/10 backdrop-blur-lg p-3 rounded-xl mr-4 text-yellow-400 shadow-lg group-hover:bg-yellow-400/20 transition-colors">
                <IoMailOutline className="text-xl" />
              </div>
              <div className="contact-info">
                <p className="contact-title text-xs text-white/70 uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:salhseid@gmail.com" className="contact-link text-lg font-medium text-white hover:text-yellow-400 transition-colors">
                  salhseid@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item flex items-center group">
              <div className="icon-box bg-white/10 backdrop-blur-lg p-3 rounded-xl mr-4 text-yellow-400 shadow-lg group-hover:bg-yellow-400/20 transition-colors">
                <IoPhonePortraitOutline className="text-xl" />
              </div>
              <div className="contact-info">
                <p className="contact-title text-xs text-white/70 uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:+251966782248" className="contact-link text-lg font-medium text-white hover:text-yellow-400 transition-colors">
                  +251 96 678 2248
                </a>
              </div>
            </li>

            <li className="contact-item flex items-center group">
              <div className="icon-box bg-white/10 backdrop-blur-lg p-3 rounded-xl mr-4 text-yellow-400 shadow-lg group-hover:bg-yellow-400/20 transition-colors">
                <IoCalendarOutline className="text-xl" />
              </div>
              <div className="contact-info">
                <p className="contact-title text-xs text-white/70 uppercase tracking-wider mb-1">Birthday</p>
                <time className="text-lg font-medium text-white">June 23, 2000</time>
              </div>
            </li>

            <li className="contact-item flex items-center group">
              <div className="icon-box bg-white/10 backdrop-blur-lg p-3 rounded-xl mr-4 text-yellow-400 shadow-lg group-hover:bg-yellow-400/20 transition-colors">
                <IoLocationOutline className="text-xl" />
              </div>
              <div className="contact-info">
                <p className="contact-title text-xs text-white/70 uppercase tracking-wider mb-1">Location</p>
                <address className="text-lg font-medium text-white not-italic">Addis Ababa, Ethiopia</address>
              </div>
            </li>
          </ul>

          <div className="separator h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-8"></div>

          {/* Social Links */}
          <div className="text-center mb-4">
            <h3 className="text-sm text-white/70 uppercase tracking-wider mb-5">Connect With Me</h3>
            <ul className="social-list flex justify-center space-x-5">
              <li className="social-item">
                <a href="#" className="social-link bg-white/10 backdrop-blur-lg p-3 rounded-xl inline-block hover:bg-blue-600 text-white hover:text-white transition-all transform hover:-translate-y-1 shadow-lg">
                  <IoLogoGithub className="text-xl" />
                </a>
              </li>
              <li className="social-item">
                <a href="#" className="social-link bg-white/10 backdrop-blur-lg p-3 rounded-xl inline-block hover:bg-blue-500 text-white hover:text-white transition-all transform hover:-translate-y-1 shadow-lg">
                  <IoLogoLinkedin className="text-xl" />
                </a>
              </li>
              <li className="social-item">
                <a href="#" className="social-link bg-white/10 backdrop-blur-lg p-3 rounded-xl inline-block hover:bg-pink-600 text-white hover:text-white transition-all transform hover:-translate-y-1 shadow-lg">
                  <IoLogoInstagram className="text-xl" />
                </a>
              </li>
              <li className="social-item">
                <a href="#" className="social-link bg-white/10 backdrop-blur-lg p-3 rounded-xl inline-block hover:bg-blue-400 text-white hover:text-white transition-all transform hover:-translate-y-1 shadow-lg">
                  <IoLogoTwitter className="text-xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  )
}