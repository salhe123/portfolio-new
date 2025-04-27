export default function ServiceItem({ icon, title, text }) {
    return (
      <li className="service-item bg-gradient-to-br from-gray-700 to-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-600 before:to-gray-800 before:rounded-xl before:z-[-1]">
        <div className="flex flex-col items-center text-center">
          <div className="icon-box bg-gradient-to-br from-gray-600 to-gray-800 p-3 rounded-lg mb-4 text-yellow-400 shadow-md">
            <img src={icon} alt={title} width="40" height="40" />
          </div>
  
          <div className="service-content-box">
            <h4 className="text-lg font-medium text-white mb-2">{title}</h4>
            <p className="text-gray-400 text-sm">{text}</p>
          </div>
        </div>
      </li>
    )
  }