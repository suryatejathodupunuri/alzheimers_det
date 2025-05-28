
import React from 'react';
import { ArrowRight, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-medical-50 to-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 bg-medical-100 text-medical-800 px-3 py-1 rounded-full text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-medical-600"></span>
              </span>
              Advanced Machine Learning Technology
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
               Alzheimer's Disease Detection with ML
            </h1>
            
            <p className="text-lg text-gray-600">
              Our advanced machine learning algorithm analyzes patient data to detect  signs of Alzheimer's disease, empowering  intervention and better treatment outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/upload" className="bg-medical-600 hover:bg-medical-700 text-white px-6 py-3 rounded-md transition-colors inline-flex items-center justify-center gap-2">
                Start Analysis
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/research" className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-6 py-3 rounded-md transition-colors inline-flex items-center justify-center">
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-medical-400 to-blue-400 rounded-lg blur opacity-30 animate-pulse-slow"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-medical-50 p-6 rounded-lg flex items-center justify-center">
                    <Brain className="h-16 w-16 text-medical-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2.5 bg-medical-200 rounded-full w-24"></div>
                    <div className="h-2 bg-medical-100 rounded-full w-full"></div>
                    <div className="h-2 bg-medical-100 rounded-full w-20"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2.5 bg-medical-200 rounded-full w-28"></div>
                    <div className="h-2 bg-medical-100 rounded-full w-full"></div>
                    <div className="h-2 bg-medical-100 rounded-full w-24"></div>
                  </div>
                  <div className="bg-gradient-to-br from-medical-100 to-blue-50 p-4 rounded-lg flex items-center justify-center">
                    <div className="h-10 w-10 rounded-full bg-medical-500 flex items-center justify-center text-white font-bold">
                      ML
                    </div>
                  </div>
                </div>
                <div className="mt-4 h-2 bg-medical-100 rounded-full w-full"></div>
                <div className="mt-2 h-2 bg-medical-100 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
