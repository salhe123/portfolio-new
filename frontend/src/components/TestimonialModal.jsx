import { IoCloseOutline } from 'react-icons/io5'

export default function TestimonialModal({ isOpen, onClose, testimonial }) {
  if (!isOpen) return null

  return (
    <div className="card fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black bg-opacity-70"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-gray-800 rounded-xl border border-gray-700 max-w-md w-full max-h-[90vh] overflow-y-auto z-10 shadow-2xl">
        <button 
          className="absolute top-4 right-4 bg-gray-700 p-2 rounded-lg text-gray-300 hover:text-white"
          onClick={onClose}
        >
          <IoCloseOutline className="text-xl" />
        </button>

        <div className="p-6">
          <div className="flex flex-col items-center mb-6">
            <figure className="w-20 h-20 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-gray-600 to-gray-800 p-1 shadow-md">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-full h-full object-cover rounded-lg"
              />
            </figure>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-white">{testimonial.name}</h4>
              <time className="text-gray-400 text-sm">{testimonial.date}</time>
            </div>
          </div>

          <div className="text-gray-300">
            <p>{testimonial.text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}