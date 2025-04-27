import { useState } from "react";
import ServiceItem from "../components/ServiceItem";
import sidebarImage from "../assets/sidebar.webp";
import { FaReact, FaServer, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

export default function About() {

const services = [
  {
    icon: <FaReact size={40} className="text-cyan-400" />,
    title: "Frontend Development",
    text: "Building interactive and dynamic user interfaces with React.js and modern front-end technologies.",
  },
  {
    icon: <FaServer size={40} className="text-green-400" />,
    title: "Backend Development",
    text: "Developing scalable and efficient server-side applications with Node.js, Express, and MongoDB.",
  },
  {
    icon: <FaMobileAlt size={40} className="text-blue-400" />,
    title: "Mobile App Development",
    text: "Creating cross-platform mobile applications for iOS and Android using Flutter or React Native.",
  },
  {
    icon: <FaPaintBrush size={40} className="text-yellow-400" />,
    title: "Web Design",
    text: "Designing beautiful and modern websites with attention to detail and user experience using tools like Figma.",
  },
];



  return (
    <article
      className="w-full p-6 md:p-10 rounded-2xl shadow-2xl border border-gray-300/20 dark:border-gray-600/30 backdrop-blur-lg bg-white/10 dark:bg-dark-800/30 transition-all duration-300 relative overflow-hidden space-y-12"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${sidebarImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* About Me Header */}
      <header>
        <h2 className="text-3xl font-bold text-white relative pb-3 mb-8 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-gradient-to-r after:from-yellow-500 after:to-yellow-600 after:rounded"></h2>
        <h2 className="text-3xl font-bold text-white">About Me</h2>
      </header>

      {/* About Text */}
      <section className="space-y-6 text-gray-300 text-lg leading-relaxed">
        <p>
          I'm a Full Stack Developer specializing in mobile and web
          applications. I build fast, modern, and scalable apps using
          technologies like Flutter, Next.js, and GraphQL.
        </p>
        <p>
          My goal is to create applications that are easy to use, visually
          appealing, and highly efficient. I make sure every project runs
          smoothly, from front-end design to back-end logic.
        </p>
        <p>
          Whether it's a mobile app for iOS and Android or a powerful web
          platform, I focus on clean code, great user experience, and seamless
          functionality. My work helps businesses and individuals bring their
          ideas to life through technology.
        </p>
      </section>

      {/* Services */}
      <section className="service space-y-8">
        <h3 className="text-2xl font-semibold text-white mb-6">
          What I'm Doing
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </ul>
      </section>

  

    
    </article>
  );
}
