import { IoArrowForwardOutline } from "react-icons/io5";
import ProjectImg from "../assets/project.png";

const BlogPostItem=({ post }) =>{
  // Format date for better readability
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <li className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow transform hover:scale-105">
      <a href={post.link} className="block">
        {/* Blog Image */}
        <figure className="relative h-48 overflow-hidden">
          <img
            src={post.image || ProjectImg}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="text-white flex items-center gap-2 px-4 py-2 rounded-md bg-yellow-500 hover:bg-yellow-600 transition-colors">
              Read More <IoArrowForwardOutline className="text-xl" />
            </button>
          </div>
        </figure>

        {/* Blog Content */}
        <div className="p-6">
          {/* Blog Meta Data */}
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span className="font-medium">{post.category}</span>
            <span className="w-1 h-1 bg-gray-400 rounded-full mx-2"></span>
            <time dateTime={post.date}>{formattedDate}</time>
          </div>

          {/* Blog Title & Description */}
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
          <p className="text-gray-600">{post.description}</p>

          {/* "Read More" Button */}
          <a href={post.link} className="mt-4 inline-flex items-center text-yellow-500 hover:text-yellow-600 transition-colors">
            Read More <IoArrowForwardOutline className="text-lg ml-2" />
          </a>
        </div>
      </a>
    </li>
  );
}


export default BlogPostItem