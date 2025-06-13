import { IoPaperPlane, IoLocationSharp, IoMail, IoCall } from 'react-icons/io5';
import ContactForm from '../components/ContactForm';
import sidebarImage from "../assets/sidebar.webp";

const Contact = ({ id, theme }) => {
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
          Contact Me
        </h2>
        <p className={`mb-8 max-w-2xl ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
          Have a project in mind or want to chat? Drop me a message and I'll get back to you as soon as possible.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className={`rounded-xl p-6 border ${
            theme === 'light' ? 'bg-gray-50 border-gray-200' : 'bg-gray-800 bg-opacity-50 backdrop-blur-sm border-gray-700'
          }`}>
            <h3 className={`text-xl font-semibold mb-6 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
              Contact Information
            </h3>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="bg-yellow-500 p-2 rounded-full mr-4">
                  <IoLocationSharp className="text-gray-900 text-lg" />
                </div>
                <div>
                  <h4 className={`font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    Location
                  </h4>
                  <p className={`text-gray-400 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-500 p-2 rounded-full mr-4">
                  <IoMail className="text-gray-900 text-lg" />
                </div>
                <div>
                  <h4 className={`font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    Email
                  </h4>
                  <p className={`text-gray-400 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                    salhseid92@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-500 p-2 rounded-full mr-4">
                  <IoCall className="text-gray-900 text-lg" />
                </div>
                <div>
                  <h4 className={`font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    Phone
                  </h4>
                  <p className={`text-gray-400 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                    +251 96 678 2248
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`rounded-xl overflow-hidden border ${
            theme === 'light' ? 'bg-gray-50 border-gray-200' : 'bg-gray-800 bg-opacity-50 backdrop-blur-sm border-gray-700'
          }`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.02029225862!2d38.61333028088326!3d8.963479538784137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1745748410917!5m2!1sen!2set"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-90 hover:opacity-100 transition-opacity"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className={`rounded-xl p-6 border ${
          theme === 'light' ? 'bg-gray-50 border-gray-200' : 'bg-gray-800 bg-opacity-50 backdrop-blur-sm border-gray-700'
        }`}>
          <h3 className={`text-xl font-semibold mb-6 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            Send Me a Message
          </h3>
          <ContactForm theme={theme} />
        </div>
      </div>
    </section>
  );
};

export default Contact;