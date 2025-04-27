const ServiceItem = ({ icon, title, text }) => {
  return (
    <li className="bg-gray-800/50 backdrop-blur-lg border border-gray-600/30 p-6 rounded-2xl shadow-md hover:shadow-yellow-500/20 transition-all duration-300 relative overflow-hidden">
      <div className="flex flex-col items-center text-center">
        <div className="bg-gradient-to-br from-purple-500/50 to-pink-500/50 p-4 rounded-full mb-4 shadow-md">
          {icon}
        </div>

        <div className="service-content-box">
          <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
          <p className="text-gray-300 text-sm">{text}</p>
        </div>
      </div>
    </li>
  );
};

export default ServiceItem;
