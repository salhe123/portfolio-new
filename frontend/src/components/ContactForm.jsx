import { useState } from 'react'
import { IoPaperPlane } from 'react-icons/io5'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Message sent successfully!')
      setFormData({ fullname: '', email: '', message: '' })
    }, 1500)
  }

  const isFormValid = formData.fullname && formData.email && formData.message

  return (
    <form onSubmit={handleSubmit} className="form space-y-4">
      <div className="card input-wrapper grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          className="form-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Full name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email address"
          required
        />
      </div>

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="form-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-32"
        placeholder="Your Message"
        required
      ></textarea>

      <button
        type="submit"
        disabled={!isFormValid || isSubmitting}
        className={`form-btn flex items-center px-6 py-2 rounded-md transition-colors ${
          isFormValid 
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        <IoPaperPlane className="mr-2" />
        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
      </button>
    </form>
  )
}