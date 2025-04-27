import { useState } from 'react'
import ServiceItem from '../components/ServiceItem'
import TestimonialModal from '../components/TestimonialModal'
import sidebarImage from '../assets/sidebar.webp'

export default function About() {
  const services = [
    {
      icon: '/src/assets/images/icon-design.svg',
      title: 'Web design',
      text: 'The most modern and high-quality design made at a professional level.'
    },
    {
      icon: '/src/assets/images/icon-dev.svg',
      title: 'Web development',
      text: 'High-quality development of sites at the professional level.'
    },
    {
      icon: '/src/assets/images/icon-app.svg',
      title: 'Mobile apps',
      text: 'Professional development of applications for iOS and Android.'
    },
    {
      icon: '/src/assets/images/icon-photo.svg',
      title: 'Photography',
      text: 'I make high-quality photos of any category at a professional level.'
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: "Daniel lewis",
      avatar: "/src/assets/images/avatar-1.png",
      date: "14 June, 2021",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
    },
    {
      id: 2,
      name: "Jessica miller",
      avatar: "/src/assets/images/avatar-2.png",
      date: "22 May, 2021",
      text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia."
    }
  ]

  const [selectedTestimonial, setSelectedTestimonial] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openTestimonial = (testimonial) => {
    setSelectedTestimonial(testimonial)
    setIsModalOpen(true)
  }

  return (
    <article className="card about"  style={{
      backgroundImage: `url(${sidebarImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <header>
        <h2 className="text-2xl font-semibold text-white relative pb-2 mb-6 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-1 after:bg-gradient-to-r after:from-yellow-500 after:to-yellow-600 after:rounded">
          About me
        </h2>
      </header>

      <section className="about-text space-y-4 text-gray-400"   >
        <p>
          I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
          I enjoy turning complex problems into simple, beautiful and intuitive designs.
        </p>

        <p>
          My job is to build your website so that it is functional and user-friendly but at the same time attractive.
          Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
          across your message and identity in the most creative way. I created web design for many famous brand companies.
        </p>
      </section>

      <section className="service mt-12">
        <h3 className="text-xl font-semibold text-white mb-6">What i'm doing</h3>

        <ul className="service-list grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </ul>
      </section>

      <section className="testimonials mt-12">
        <h3 className="text-xl font-semibold text-white mb-6">Testimonials</h3>

        <div className="overflow-x-auto">
          <div className="flex space-x-6 pb-6">
            {testimonials.map(testimonial => (
              <div 
                key={testimonial.id} 
                className="min-w-[300px] bg-gradient-to-br from-gray-700 to-gray-900 p-6 rounded-xl shadow-md cursor-pointer relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-600 before:to-gray-800 before:rounded-xl before:z-[-1]"
                onClick={() => openTestimonial(testimonial)}
              >
                <figure className="absolute -top-5 left-6 w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-gray-600 to-gray-800 shadow-md">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </figure>
                <h4 className="text-lg font-medium text-white mt-8 mb-2">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        testimonial={selectedTestimonial} 
      />
    </article>
  )
}