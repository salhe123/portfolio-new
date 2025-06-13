const ServiceItem = ({ icon, title, text, theme = 'dark' }) => {
  return (
    <li
      className={`backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-yellow-500/20 transition-all duration-300 relative overflow-hidden border
        ${theme === 'light'
          ? 'bg-gray-100 border-gray-200'
          : 'bg-gray-800/50 border-gray-600/30'
        }`
      }
    >
      <div className="flex flex-col items-center text-center">
        <div className="bg-gradient-to-br from-purple-500/50 to-pink-500/50 p-4 rounded-full mb-4 shadow-md">
          {icon}
        </div>

        <div className="service-content-box">
          <h4 className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} text-lg font-semibold mb-2`}>{title}</h4>
          <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} text-sm`}>{text}</p>
        </div>
      </div>
    </li>
  );
};

export default ServiceItem;