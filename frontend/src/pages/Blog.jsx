import BlogPostItem from "../components/BlogPostItem";
import sidebarImage from "../assets/sidebar.webp";
import ProjectImg from "../assets/project.png";

const Blog = ({ id, theme }) => {
  const posts = [
    {
      id: 1,
      title: "Design Conferences in 2022",
      category: "Design",
      date: "Feb 23, 2022",
      description:
        "Explore upcoming design conferences featuring industry leaders and trends.",
      link: "#",
      image: ProjectImg,
    },
    {
      id: 2,
      title: "Best Fonts for Every Designer",
      category: "Design",
      date: "Feb 23, 2022",
      description:
        "Discover the top fonts that improve readability and aesthetics in design projects.",
      link: "#",
      image: ProjectImg,
    },
    {
      id: 3,
      title: "Design Digest #80",
      category: "Design",
      date: "Feb 23, 2022",
      description:
        "A curated list of design inspirations, UX trends, and creative breakthroughs.",
      link: "#",
      image: ProjectImg,
    },
    {
      id: 4,
      title: "UI Interactions of the Week",
      category: "Design",
      date: "Feb 23, 2022",
      description:
        "An in-depth look at the latest engaging UI interactions and micro-animations.",
      link: "#",
      image: ProjectImg,
    },
  ];

  return (
    <section
      id={id}
      className={`relative overflow-hidden rounded-2xl shadow-2xl p-8 transition-all duration-300 ${
        theme === 'light' ? 'bg-white border-gray-200' : 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-300/20 dark:border-gray-600/30'
      }`}
      style={{
        backgroundImage: theme === 'light' ? 'none' : `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url(${sidebarImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header>
        <h2 className={`text-3xl font-bold relative pb-3 mb-8 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-gradient-to-r after:from-yellow-500 after:to-yellow-600 after:rounded ${
          theme === 'light' ? 'text-gray-900' : 'text-white'
        }`}>
          Blogs
        </h2>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {posts.map((post) => (
          <BlogPostItem key={post.id} post={post} theme={theme} />
        ))}
      </ul>
    </section>
  );
};

export default Blog;