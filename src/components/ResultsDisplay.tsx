
import React from 'react';
import { Check, X, AlertTriangle, BrainCircuit } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export interface PredictionResult {
  status: 'positive' | 'negative' | 'inconclusive';
  confidence: number;
  message: string;
  details?: string;
}

interface ResultsDisplayProps {
  result: PredictionResult | null;
  isLoading: boolean;
}

const LoadingResults = () => (
  <div className="w-full max-w-2xl mx-auto animate-pulse">
    <Card>
      <CardHeader className="shimmer h-20 rounded-t-lg"></CardHeader>
      <CardContent className="space-y-4 py-6">
        <div className="shimmer h-6 w-3/4 rounded"></div>
        <div className="shimmer h-4 w-full rounded"></div>
        <div className="shimmer h-4 w-5/6 rounded"></div>
        <div className="shimmer h-16 w-full rounded mt-6"></div>
      </CardContent>
      <CardFooter className="shimmer h-12 rounded-b-lg"></CardFooter>
    </Card>
  </div>
);

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result, isLoading }) => {
  if (isLoading) {
    return <LoadingResults />;
  }

  if (!result) {
    return null;
  }

  const iconMap = {
    positive: <X className="h-8 w-8 text-red-500" />,
    negative: <Check className="h-8 w-8 text-green-500" />,
    inconclusive: <AlertTriangle className="h-8 w-8 text-yellow-500" />,
  };

  const colorMap = {
    positive: 'bg-red-100 text-red-800 border-red-200',
    negative: 'bg-green-100 text-green-800 border-green-200',
    inconclusive: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  };

  const titleMap = {
    positive: 'Alzheimer\'s Disease Indicators Detected',
    negative: 'No Alzheimer\'s Disease Indicators Detected',
    inconclusive: 'Analysis Inconclusive',
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      <Card className={`border-2 ${colorMap[result.status]}`}>
        <CardHeader className="flex flex-row items-center gap-4">
          <div className={`p-2 rounded-full ${result.status === 'positive' ? 'bg-red-100' : result.status === 'negative' ? 'bg-green-100' : 'bg-yellow-100'}`}>
            {iconMap[result.status]}
          </div>
          <div>
            <CardTitle className="text-xl">{titleMap[result.status]}</CardTitle>
            <CardDescription>
              Analysis completed with {result.confidence}% confidence
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">Confidence Level</span>
              <span className="text-sm font-medium">{result.confidence}%</span>
            </div>
            <Progress value={result.confidence} className="h-2" />
          </div>
          
          <p className="text-gray-700">{result.message}</p>
          
          {result.details && (
            <div className="bg-white p-4 rounded-lg border border-gray-200 mt-4">
              <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                <BrainCircuit className="h-4 w-4" />
                <span>Technical Details</span>
              </h4>
              <p className="text-sm text-gray-600">{result.details}</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="bg-gray-50 gap-4 justify-between">
          <p className="text-xs text-gray-500">
            This analysis is for informational purposes only and should not be considered medical advice.
            Please consult with a healthcare professional for proper diagnosis.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ResultsDisplay;
