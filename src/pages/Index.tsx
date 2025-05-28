
import React from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, Brain, BarChart3, FileText } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Features section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">How Our ML Detection Works</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Our advanced system uses machine learning algorithms to analyze patient data and identify patterns associated with Alzheimer's disease.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="bg-medical-100 p-3 rounded-lg inline-block mb-4">
                  <FileText className="h-6 w-6 text-medical-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Upload</h3>
                <p className="text-gray-600">
                  Upload patient data in CSV format containing relevant biomarkers and cognitive test results.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="bg-medical-100 p-3 rounded-lg inline-block mb-4">
                  <Brain className="h-6 w-6 text-medical-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">ML Processing</h3>
                <p className="text-gray-600">
                  Our machine learning model analyzes the data, comparing it with known cases.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="bg-medical-100 p-3 rounded-lg inline-block mb-4">
                  <BarChart3 className="h-6 w-6 text-medical-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pattern Recognition</h3>
                <p className="text-gray-600">
                  The system identifies patterns and biomarkers associated with early-stage Alzheimer's.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="bg-medical-100 p-3 rounded-lg inline-block mb-4">
                  <CheckCircle2 className="h-6 w-6 text-medical-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Results & Analysis</h3>
                <p className="text-gray-600">
                  Receive detailed results with confidence scores and recommendations for next steps.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 bg-gradient-to-r from-medical-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Start Your Analysis Today</h2>
            <p className="max-w-2xl mx-auto mb-8 text-medical-50">
              Upload your patient data and get instant insights that can help in early detection and intervention.
            </p>
            <a href="/upload" className="bg-white text-medical-700 hover:bg-medical-50 px-6 py-3 rounded-md font-medium transition-colors inline-block">
              Try It Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
