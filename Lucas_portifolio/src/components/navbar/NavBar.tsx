import React, { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Meu Portfólio</div>
        <div className="hidden md:flex space-x-4">
          <a href="#sobre" className="text-gray-300 hover:text-white">Sobre</a>
          <a href="#skills" className="text-gray-300 hover:text-white">Skills</a>
          <a href="#projetos" className="text-gray-300 hover:text-white">Projetos</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.829a1 1 0 0 1-1.414-1.414l4.829-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.828 4.828 4.829-4.828a1 1 0 0 1 1.414 1.414l-4.828 4.829 4.828 4.829z" />
              ) : (
                <path fillRule="evenodd" clipRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <a href="#sobre" className="block text-gray-300 hover:text-white py-2">Sobre</a>
          <a href="#skills" className="block text-gray-300 hover:text-white py-2">Skills</a>
          <a href="#projetos" className="block text-gray-300 hover:text-white py-2">Projetos</a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;