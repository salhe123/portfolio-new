import ServiceItem from "../components/ServiceItem";
import BackgroundImg from "../assets/sidebar.webp";
import { FaReact, FaServer, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

const About = ({ id, theme }) => {
  const services = [
    {
      icon: <FaReact size={40} className="text-cyan-400" />,
      title: "Frontend Development",
      text: "Building interactive and dynamic user interfaces with React.js ,Nextjs and  modern front-end technologies.",
    },
    {
      icon: <FaServer size={40} className="text-green-400" />,
      title: "Backend Development",
      text: "Developing scalable and efficient server-side applications with Node.js/Express,Nestjs and Gin/Go with SQL or NoSQL databases.",
    },
    {
      icon: <FaMobileAlt size={40} className="text-blue-400" />,
      title: "Mobile App Development",
      text: "Creating cross-platform mobile applications for iOS and Android using Flutter",
    },
    // {
    //   icon: <FaPaintBrush size={40} className="text-yellow-400" />,
    //   title: "Web Design",
    //   text: "Designing beautiful and modern websites with attention to detail and user experience using tools like Figma.",
    // },
  ];

  return (
    <article
      id={id}
      className={`w-full p-6 md:p-10 rounded-2xl shadow-2xl border transition-all duration-300 relative overflow-hidden space-y-12 ${
        theme === 'light' ? 'bg-white border-gray-200' : 'bg-white/10 dark:bg-dark-800/30 border-gray-300/20 dark:border-gray-600/30 backdrop-blur-lg'
      }`}
      style={{
        backgroundImage: theme === 'light' ? 'none' : `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${BackgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <header>
        <h2 className={`text-3xl font-bold relative pb-3 mb-8 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-gradient-to-r after:from-yellow-500 after:to-yellow-600 after:rounded ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}>
          About Me
        </h2>
      </header>

      <section className={`space-y-6 text-lg leading-relaxed ${
        theme === 'light' ? 'text-gray-700' : 'text-gray-300'
      }`}>
        <p>
Hey! I'm a full-stack developer who loves building things that actually make a difference. I work on both web and mobile stuff, and I enjoy jumping between frontend and backend—whether it's making a slick UI or setting up a solid backend system. Lately, I've been diving into everything from DevOps to AI agents. I'm always experimenting with new tools, building projects, and sharing what I learn along the way. Basically, if there's an idea worth building, I'm all in.
        </p>

        {/* <p>
          Whether it's a mobile app for iOS and Android or a powerful web
          platform, I focus on clean code, great user experience, and seamless
          functionality. My work helps businesses and individuals bring their
          ideas to life through technology.
        </p> */}
      </section>

      <section className="service space-y-8">
        <h3 className={`text-2xl font-semibold mb-6 ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}>
          What I'm Doing
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} theme={theme} />
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;