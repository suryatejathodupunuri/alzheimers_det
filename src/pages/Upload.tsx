import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FileUploader from '@/components/FileUploader';
import ResultsDisplay, { PredictionResult } from '@/components/ResultsDisplay';
import { useToast } from '@/components/ui/use-toast';
import { InfoIcon } from 'lucide-react';

const Upload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const { toast } = useToast();

  // Map the backend prediction codes to full status messages
  const getStatusFromPrediction = (prediction: string) => {
    switch (prediction) {
      case 'AD':
        return 'positive';
      case 'FTD':
        return 'positive'; // or you might want a different status for FTD
      case 'CN':
        return 'negative';
      default:
        return 'inconclusive';
    }
  };

  // Generate appropriate messages based on prediction
  const getMessageFromPrediction = (prediction: string, confidence: number) => {
    switch (prediction) {
      case 'AD':
        return `The analysis suggests patterns consistent with Alzheimer's disease (confidence: ${confidence}%).`;
      case 'FTD':
        return `The analysis suggests patterns consistent with Frontotemporal Dementia (confidence: ${confidence}%).`;
      case 'CN':
        return `Analysis indicates normal cognitive patterns (confidence: ${confidence}%).`;
      default:
        return `The analysis was inconclusive (confidence: ${confidence}%).`;
    }
  };

  const handleFileUpload = async (file: File) => {
    setIsLoading(true);
    setResult(null);
    
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Transform the backend response to match your frontend's PredictionResult type
      const transformedResult: PredictionResult = {
        status: getStatusFromPrediction(data.prediction),
        confidence: data.confidence,
        message: getMessageFromPrediction(data.prediction, data.confidence),
        details: `Detailed analysis results: Prediction - ${data.prediction}, Confidence - ${data.confidence}%`
      };

      setResult(transformedResult);
      
      toast({
        title: "Analysis Complete",
        description: "Your data has been successfully analyzed",
      });
    } catch (error) {
      console.error('Error uploading file:', error);
      toast({
        variant: "destructive",
        title: "Upload Failed",
        description: "Please check the .csv file format. There was an error analyzing your data. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Alzheimer's Disease Detection Tool</h1>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Upload your CSV file containing patient data to receive a machine learning-powered analysis for early Alzheimer's disease detection.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg mb-6">
              <InfoIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-blue-900">CSV Format Requirements</h3>
                <p className="text-sm text-blue-800 mt-1">
                Your CSV file should contain time-series EEG data with each column representing an electrode (e.g., Fp1, Fp2, F3, ..., O2) and each row representing a time point. Please ensure the file includes headers with correct channel names and is free from missing or corrupted values.
                </p>
              </div>
            </div>
            
            <FileUploader onFileUpload={handleFileUpload} isLoading={isLoading} />
          </div>
          
          {(isLoading || result) && (
            <div className="mt-10 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Analysis Results</h2>
              <ResultsDisplay result={result} isLoading={isLoading} />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Upload;