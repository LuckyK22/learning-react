import React, { useState } from 'react';

const DesktopSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`transition-all duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } w-64 bg-gray-800 text-white p-4`}
      >
        <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
        {/* Add your sidebar navigation links here */}
        <nav>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:text-white">
                Services
              </a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-grow p-4">
        {/* Toggle button for the sidebar */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden block text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          {isOpen ? 'Close' : 'Open'} Sidebar
        </button>
        {/* Add your main content here */}
      </div>
    </div>
  );
};

export default DesktopSidebar;
