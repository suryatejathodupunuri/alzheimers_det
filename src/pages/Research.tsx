
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, BookOpen, LineChart, FileQuestion, Database, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Research = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-medical-50 to-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Research</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Exploring the Potential of Machine Learning in Early Alzheimer's Disease Detection
            </p>
          </div>
        </section>
        
        {/* Research Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-6 flex-col md:flex-row">
                <div className="bg-medical-100 p-4 rounded-full md:mt-2">
                  <LineChart className="h-8 w-8 text-medical-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Methodology</h2>
                  <p className="text-gray-700 mb-4">
                    Our research focuses on EEG-based machine learning for early detection of Alzheimer's disease. We followed a multi-phase approach:
                  </p>
                  
                  <ol className="list-decimal pl-5 space-y-4 mb-6">
                    <li className="text-gray-700">
                      <span className="font-medium">Data Collection and Preprocessing:</span> We used the OpenNeuro dataset 
                      (<a href="https://openneuro.org/datasets/ds004504/versions/1.0.7" target="_blank" rel="noopener noreferrer" className="text-medical-600 hover:underline">DS004504</a>), 
                      applying standardized preprocessing to extract clean EEG signals.
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">Feature Engineering:</span> We extracted EEG bandpower and statistical features using Welch’s method, 
                      further enhanced through a GAN-based generator and optimized using the Marine Predators Algorithm (MPA).
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">Model Development:</span> We evaluated multiple classifiers, with ensemble models such as Random Forests 
                      delivering strong performance when trained on real and synthetic EEG features.
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">Validation and Testing:</span> We applied stratified cross-validation and held-out test sets to ensure 
                      generalizability across AD, FTD, and control groups.
                    </li>
                  </ol>
                  
                  <p className="text-gray-700">
                    Our approach achieved in classifying cognitive conditions, significantly advancing EEG-based Alzheimer's detection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Dataset section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Database className="h-6 w-6 text-medical-600" />
                <h2 className="text-3xl font-bold text-gray-900">Dataset & Base Paper</h2>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Dataset Information</h3>
                <p className="text-gray-700 mb-4">
                  We utilized the OpenNeuro dataset DS004504 (version 1.0.7), which contains comprehensive neuroimaging and clinical data 
                  from Alzheimer's patients and healthy controls. This dataset provided us with high-quality data for training our machine learning models.
                </p>
                <a 
                  href="https://openneuro.org/datasets/ds004504/versions/1.0.7" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-medical-600 hover:text-medical-700 font-medium"
                >
                  View Dataset
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Base Research Paper</h3>
                <p className="text-gray-700 mb-4">
                  Our methodology is based on the research paper titled "Deep Learning for Classification of Alzheimer Disease on Computed Tomography: 
                  A Preliminary Study" published in ScienceDirect. This paper provides the theoretical foundation for our approach to Alzheimer's 
                  detection using machine learning algorithms.
                </p>
                <a 
                  href="https://www.sciencedirect.com/science/article/pii/S1319157823004020" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-medical-600 hover:text-medical-700 font-medium"
                >
                  Read Research Paper
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="mt-12 text-center">
                <Link to="/upload" className="bg-medical-600 hover:bg-medical-700 text-white px-6 py-3 rounded-md transition-colors inline-block">
                  Try Our Current Tool
                </Link>
              </div>
          </div>
        </section>
        
        
       
        

      </main>
      <Footer />
    </div>
  );
};

export default Research;
