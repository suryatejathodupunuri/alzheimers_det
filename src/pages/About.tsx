
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Medal, GraduationCap, Users, ServerIcon } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-medical-50 to-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Our Project</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A College Major Project by Computer Science & Engineering Students from
              Vignana Bharathi Institute of Technology
            </p>
            <img 
              src="/lovable-uploads/13e90896-3990-4f6c-b386-bf7c0ddf28d1.png" 
              alt="VBIT Logo" 
              className="h-24 mt-6 mx-auto" 
            />
            <p className="text-sm text-gray-600 mt-2">
              An UGC Autonomous Institution (Approved by AICTE, Affiliated by JNTUH, Accredited by NBA & NAAC)
            </p>
          </div>
        </section>
        
        {/* Project Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <p className="text-gray-700 mb-4">
                This project represents our college major project in Computer Science & Engineering at Vignana Bharathi Institute of Technology, 
                focused on developing a machine learning-powered system for the early detection of Alzheimer's disease.
              </p>
              <p className="text-gray-700 mb-4">
                Alzheimer's disease is a progressive neurological disorder that causes brain cells to degenerate 
                and die, leading to a continuous decline in thinking, behavioral and social skills. Early detection 
                is crucial for better management and potentially slowing the progression of the disease.
              </p>
              <p className="text-gray-700 mb-6">
                Our system uses machine learning algorithms trained on datasets containing cognitive test scores, 
                biomarkers, and patient demographics to identify patterns associated with early-stage Alzheimer's disease.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Approach</h3>
                  <p className="text-gray-700">
                    We used EEG-based features enhanced by GAN and optimized with MPA, followed by supervised learning using ensemble models. Trained on the OpenNeuro dataset, our approach improves accuracy in classifying Alzheimer’s, FTD, and healthy controls.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Research Impact</h3>
                  <p className="text-gray-700">
                    Our project contributes to the field of medical machine learning by demonstrating the effective application 
                    of ML algorithms in neurological disease detection. This work has potential implications for 
                    clinical practice and early intervention strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team section */}
        <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Meet Our Team</h2>
    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">The passionate minds behind our project</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
      {/* Person 1 - Dr. Rajesh Saturi */}
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center flex flex-col h-full">
        <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-blue-100">
          <img 
            src="/lovable-uploads/rajesh.png" 
            alt="Dr. Rajesh Saturi"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Crect fill='%23ddd' width='128' height='128' rx='64'/%3E%3Ctext fill='%23666' font-family='sans-serif' font-size='24' dy='.3em' text-anchor='middle' x='64' y='72'%3EPhoto%3C/text%3E%3C/svg%3E"
            }}
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">Dr. Rajesh Saturi</h3>
        <p className="text-gray-600 mb-1">Faculty Coordinator</p>
        <p className="text-sm text-gray-500 mb-4">Associate Professor, VBIT</p>
        <div className="mt-auto flex justify-center space-x-3">
          <a href="https://www.linkedin.com/in/rajeshsaturi" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="mailto:rajesh.saturi@vbithyd.ac.in" className="text-gray-500 hover:text-red-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Person 2 - Surya Teja Thodupunuri */}
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center flex flex-col h-full">
        <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-blue-100">
          <img 
            src="/lovable-uploads/surya.png" 
            alt="Surya Teja Thodupunuri"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Crect fill='%23ddd' width='128' height='128' rx='64'/%3E%3Ctext fill='%23666' font-family='sans-serif' font-size='24' dy='.3em' text-anchor='middle' x='64' y='72'%3EPhoto%3C/text%3E%3C/svg%3E"
            }}
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">Surya Teja Thodupunuri</h3>
        <p className="text-gray-600 mb-1">Team Lead</p>
        <p className="text-sm text-gray-500 mb-4 invisible">Placeholder</p>
        <div className="mt-auto flex justify-center space-x-3">
          <a href="https://www.linkedin.com/in/suryatejathodupunuri" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="mailto:suryatejathodupunuri@gmail.com" className="text-gray-500 hover:text-red-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Person 3 - Sirigajje Sathvik */}
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center flex flex-col h-full">
        <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-blue-100">
          <img 
            src="/lovable-uploads/sathvik.jpeg" 
            alt="Sirigajje Sathvik"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Crect fill='%23ddd' width='128' height='128' rx='64'/%3E%3Ctext fill='%23666' font-family='sans-serif' font-size='24' dy='.3em' text-anchor='middle' x='64' y='72'%3EPhoto%3C/text%3E%3C/svg%3E"
            }}
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">Sirigajje Sathvik</h3>
        <p className="text-gray-600 mb-1">Frontend Developer</p>
        <p className="text-sm text-gray-500 mb-4 invisible">Placeholder</p>
        <div className="mt-auto flex justify-center space-x-3">
          <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="mailto:sathviksirigajje@gmail.com" className="text-gray-500 hover:text-red-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Person 4 - Tangutoori Santhosh */}
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center flex flex-col h-full">
        <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-blue-100">
          <img 
            src="/lovable-uploads/santhosh.jpeg" 
            alt="Tangutoori Santhosh"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Crect fill='%23ddd' width='128' height='128' rx='64'/%3E%3Ctext fill='%23666' font-family='sans-serif' font-size='24' dy='.3em' text-anchor='middle' x='64' y='72'%3EPhoto%3C/text%3E%3C/svg%3E"
            }}
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">Tangutoori Santhosh</h3>
        <p className="text-gray-600 mb-1">Backend Developer</p>
        <p className="text-sm text-gray-500 mb-4 invisible">Placeholder</p>
        <div className="mt-auto flex justify-center space-x-3">
          <a href="https://www.linkedin.com/in/santhosh-tangutoori-a86537261/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="mailto:santhoshtanguturi582@gmail.com" className="text-gray-500 hover:text-red-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
        
        
      
      </main>
      <Footer />
    </div>
  );
};

export default About;
