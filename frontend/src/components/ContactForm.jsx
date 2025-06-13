import { useState } from 'react'
import { IoPaperPlane } from 'react-icons/io5'

const ContactForm = ({ theme = 'dark' }) => {
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

  // Light and dark mode classes
  const inputBase = "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
  const inputTheme =
    theme === 'light'
      ? "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-400"
      : "bg-gray-800 bg-opacity-50 border-gray-700 text-white placeholder-gray-400"
  const requiredStarTheme = theme === 'light' ? "text-gray-400" : "text-gray-500"

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className={`${inputBase} ${inputTheme}`}
            placeholder="Full name"
            required
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <span className={requiredStarTheme}>*</span>
          </div>
        </div>
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${inputBase} ${inputTheme}`}
            placeholder="Email address"
            required
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <span className={requiredStarTheme}>*</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`${inputBase} ${inputTheme} min-h-40`}
          placeholder="Your Message"
          required
        ></textarea>
        <div className="absolute inset-y-0 right-0 flex items-start pr-3 pt-3 pointer-events-none">
          <span className={requiredStarTheme}>*</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={!isFormValid || isSubmitting}
        className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
          isFormValid
            ? (theme === 'light'
                ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:from-yellow-500 hover:to-yellow-600 shadow-lg hover:shadow-yellow-500/20'
                : 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 hover:from-yellow-600 hover:to-yellow-700 shadow-lg hover:shadow-yellow-500/20'
              )
            : (theme === 'light'
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-700 text-gray-500 cursor-not-allowed'
              )
        } ${isSubmitting ? 'opacity-80' : ''}`}
      >
        <IoPaperPlane className={`mr-2 ${isFormValid ? 'text-gray-900' : 'text-gray-500'}`} />
        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
      </button>

      <p className={`text-sm ${theme === 'light' ? 'text-gray-400' : 'text-gray-400'}`}>
        * Required fields
      </p>
    </form>
  )
}

export default ContactForm