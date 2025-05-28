
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/13e90896-3990-4f6c-b386-bf7c0ddf28d1.png" 
                alt="VBIT Logo" 
                className="h-8" 
              />
              <span className="text-xl font-semibold text-gray-800">Alzheimer's Detection</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Leveraging cutting-edge machine learning technology to assist in the early detection of Alzheimer's disease, helping healthcare providers make more informed decisions.
            </p>
            <p className="text-sm text-gray-500">
              This tool is for research and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-medical-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/upload" className="text-gray-600 hover:text-medical-600 transition-colors">Analysis Tool</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-medical-600 transition-colors">About Project</Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-600 hover:text-medical-600 transition-colors">Research</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://openneuro.org/datasets/ds004504/versions/1.0.7" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-medical-600 transition-colors">
                  OpenNeuro Dataset
                </a>
              </li>
              <li>
                <a href="https://www.sciencedirect.com/science/article/pii/S1319157823004020" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-medical-600 transition-colors">
                  Base Research Paper
                </a>
              </li>
              <li>
                <a href="https://www.alz.org/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-medical-600 transition-colors">
                  Alzheimer's Association
                </a>
              </li>
              <li>
                <a href="https://www.nia.nih.gov/health/alzheimers" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-medical-600 transition-colors">
                  National Institute on Aging
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Alzheimer's Detection. College Major Project - Vignana Bharathi Institute of Technology.
          </p>
          <div className="flex items-center gap-1 text-sm text-gray-500 mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 text-red-500" /> by CSE Students
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
