
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/13e90896-3990-4f6c-b386-bf7c0ddf28d1.png" 
            alt="VBIT Logo" 
            className="h-10" 
          />
          <span className="text-xl font-semibold text-gray-800">Alzheimer's Detection</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-medical-600 transition-colors">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-medical-600 transition-colors">About</Link>
          <Link to="/research" className="text-gray-700 hover:text-medical-600 transition-colors">Research</Link>
        </div>
        <Link to="/upload" className="bg-medical-600 hover:bg-medical-700 text-white px-4 py-2 rounded-md transition-colors">
          Start Analysis
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
