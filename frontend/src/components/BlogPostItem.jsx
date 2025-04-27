export default function BlogPostItem({ post }) {
    return (
      <li className="card blog-post-item bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <a href="#" className="block">
          <figure className="blog-banner-box h-48 overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </figure>
  
          <div className="blog-content p-4">
            <div className="blog-meta flex items-center text-sm text-gray-500 mb-2">
              <span className="blog-category">{post.category}</span>
              <span className="dot w-1 h-1 bg-gray-400 rounded-full mx-2"></span>
              <time dateTime="2022-02-23">{post.date}</time>
            </div>
  
            <h3 className="h3 blog-item-title text-lg font-medium text-gray-800 mb-2">{post.title}</h3>
            <p className="blog-text text-gray-600">{post.excerpt}</p>
          </div>
        </a>
      </li>
    )
  }