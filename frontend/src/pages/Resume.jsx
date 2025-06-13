import { IoBookOutline, IoBriefcaseOutline } from "react-icons/io5";
import sidebarImage from "../assets/sidebar.webp";
import BDU from "../assets/bdu.jpeg";
import Boost from "../assets/boost.png";
import Minab from "../assets/minab.jpeg";
import Abyssinia from "../assets/Abyssinia.png";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaVuejs,
} from "react-icons/fa";
import { SiNextdotjs, SiFlutter, SiPostgresql } from "react-icons/si";

const Resume = ({ id, theme }) => {
  const education = [
    {
      title: "Bahir Dar University",
      period: "2019 — 2024",
      description: "Bachelor's of Computer Engineering",
      logo: BDU,
    },
  ];

  const experience = [
    {
      title: "Internship Trainer",
      period: "May 2023 — Oct 2023",
      company: "Boost Software Development PLC",
      companyLink: "https://boostsoftwaredevelopment.com/",
      description:
        "Attended development process of systems for different clients, collaborated with development team to know different marketplace programming frameworks like Node.js, Express.js, React, Next.js, and Agile Development and databases like MongoDB.",
      logo: Boost,
    },
    {
      title: "Remote Internship Trainer",
      period: "Sep 2023 — May 2024",
      company: "Minab IT Solutions Sc (Haujobs)",
      companyLink: "https://www.minabtech.com/",
      description:
        "Developed responsive and dynamic web applications using Vue.js, Nuxt.js, and Tailwind CSS for the frontend, ensuring a seamless user experience. Built the backend using Golang, Hasura, and PostgreSQL to create scalable APIs and manage data efficiently and aditionaly worked on mobile app development using Flutter, integrating it with the backend services.",
      logo: Minab,
    },
    {
      title: "Full Stack Developer",
      period: "May 2024 — present",
      company: "Abyssinia Software Solutions",
      companyLink: "https://www.abyssiniasoftware.com/",
      description:
        "Since August 2024, I have been working as a Full Stack Developer and Mobile App Developer at Abyssinia Software Solutions. I design and develop responsive web applications and mobile apps, ensuring seamless user experiences. My role involves handling both frontend and backend development, building scalable and secure systems. I collaborate with cross-functional teams to deliver high-quality software solutions aligned with business needs and mobile app development using Flutter, integrating it with the backend services.",
      logo: Abyssinia,
    },
  ];

  const skills = [
    { name: "JavaScript", icon: <FaJs className="text-2xl text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-2xl text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-2xl text-green-500" /> },
    { name: "Flutter", icon: <SiFlutter className="text-2xl text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-2xl text-black" /> },
    { name: "Vue.js", icon: <FaVuejs className="text-2xl text-green-400" /> },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-2xl text-blue-600" />,
    },
    {name: "Golang", icon: <FaDatabase className="text-2xl text-green-600" />},
    {name:"AWS", icon: <FaDatabase className="text-2xl text-orange-500" />},
    {name:"Docker", icon: <FaDatabase className="text-2xl text-blue-500" />},
    {name:"CICD", icon: <FaGitAlt className="text-2xl text-red-500" />},
    {name:"GraphQL", icon: <FaDatabase className="text-2xl text-purple-500" />},
  ];

  return (
    <article
      id={id}
      className={`p-8 rounded-xl shadow-lg transition-all duration-300 ${
        theme === 'light' ? 'bg-white border-gray-200' : 'bg-gradient-to-br from-gray-700/40 to-gray-800/40 border-gray-300/20 dark:border-gray-600/30 backdrop-blur-lg'
      }`}
      style={{
        backgroundImage: theme === 'light' ? 'none' : `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${sidebarImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <header>
        <h2 className={`text-3xl font-bold relative pb-3 mb-8 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-gradient-to-r after:from-yellow-500 after:to-yellow-600 after:rounded ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}>
          Resume
        </h2>
      </header>

      {/* Education Section */}
      <section className="timeline mb-12">
        <div className="title-wrapper flex items-center mb-6">
          <div className={`icon-box p-2 rounded-full mr-4 ${
            theme === 'light' ? 'bg-blue-50' : 'bg-blue-100'
          }`}>
            <IoBookOutline className="text-blue-600 text-xl" />
          </div>
          <h3 className={`text-xl font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            Education
          </h3>
        </div>

        <ol className={`timeline-list space-y-8 pl-8 border-l-2 ${
          theme === 'light' ? 'border-gray-300' : 'border-gray-200'
        }`}>
          {education.map((item, index) => (
            <li key={index} className="timeline-item relative pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 items-start text-left space-y-2 sm:space-y-0">
                <img
                  src={item.logo}
                  alt="University Logo"
                  className="w-14 h-14 rounded-full"
                />
                <div>
                  <h4 className={`text-lg font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    {item.title}
                  </h4>
                  <span className={`text-sm block mb-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                    {item.period}
                  </span>
                  <p className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Experience Section */}
      <section className="timeline mb-12">
        <div className="title-wrapper flex items-center mb-6">
          <div className={`icon-box p-2 rounded-full mr-4 ${
            theme === 'light' ? 'bg-blue-50' : 'bg-blue-100'
          }`}>
            <IoBriefcaseOutline className="text-blue-600 text-xl" />
          </div>
          <h3 className={`text-xl font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            Experience
          </h3>
        </div>
        <ol className={`timeline-list space-y-8 pl-8 border-l-2 ${
          theme === 'light' ? 'border-gray-300' : 'border-gray-200'
        }`}>
          {experience.map((item, index) => (
            <li key={index} className="timeline-item relative pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 items-start text-left space-y-2 sm:space-y-0">
                <img
                  src={item.logo}
                  alt="Company Logo"
                  className="w-14 h-14 rounded-full"
                />
                <div>
                  <h4 className={`text-lg font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    <a
                      href={item.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {item.title}
                    </a>
                  </h4>
                  <span className={`text-sm block mb-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                    {item.period}
                  </span>
                  <p className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills Section */}
      <section className="skill">
        <h3 className={`text-xl font-medium mb-6 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
          My Skills
        </h3>
        <div className={`grid grid-cols-2 sm:grid-cols-3 gap-6 p-6 rounded-xl ${
          theme === 'light' ? 'bg-gray-50' : 'bg-gray-800/50'
        }`}>
          {skills.map((skill, index) => (
            <div key={index} className={`flex flex-col items-center ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
              <div className="mb-2">{skill.icon}</div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default Resume;