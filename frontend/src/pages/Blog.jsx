import BlogPostItem from '../components/BlogPostItem'

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Design conferences in 2022",
      category: "Design",
      date: "Feb 23, 2022",
      image: "/src/assets/images/blog-1.jpg",
      excerpt: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo."
    },
    {
      id: 2,
      title: "Best fonts every designer",
      category: "Design",
      date: "Feb 23, 2022",
      image: "/src/assets/images/blog-2.jpg",
      excerpt: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi."
    },
    {
      id: 3,
      title: "Design digest #80",
      category: "Design",
      date: "Feb 23, 2022",
      image: "/src/assets/images/blog-3.jpg",
      excerpt: "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit."
    },
    {
      id: 4,
      title: "UI interactions of the week",
      category: "Design",
      date: "Feb 23, 2022",
      image: "/src/assets/images/blog-4.jpg",
      excerpt: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi."
    }
  ]

  return (
    <article className="card blog">
      <header>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map(post => (
            <BlogPostItem key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </article>
  )
}