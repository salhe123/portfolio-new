import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <>
      {/* Desktop Theme Button */}
      <button
        className={`fixed top-4 right-4 z-50 hidden lg:block p-3 rounded-full transition-all duration-300 ${
          theme === 'light' ? 'text-gray-800 hover:text-yellow-600' : 'text-white/80 hover:text-yellow-400'
        }`}
        onClick={toggleTheme}
      >
        {theme === 'light' ? <IoMoonOutline size={24} /> : <IoSunnyOutline size={24} />}
      </button>

      {/* Mobile Theme Button */}
      <button
        className={`fixed top-4 right-4 z-50 lg:hidden flex flex-col items-center text-xs font-medium transition-all duration-300 ${
          theme === 'light' ? 'text-gray-800 hover:text-yellow-600' : 'text-white/80 hover:text-yellow-400'
        }`}
        onClick={toggleTheme}
      >
        <span className="mb-1">{theme === 'light' ? <IoMoonOutline size={20} /> : <IoSunnyOutline size={20} />}</span>
        Theme
      </button>
    </>
  );
};

export default Navbar;