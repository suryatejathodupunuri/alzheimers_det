
import React, { useState, useCallback } from 'react';
import { Upload, FileType, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface FileUploaderProps {
  onFileUpload: (file: File) => void;
  isLoading: boolean;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileUpload, isLoading }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const validateFile = (file: File): boolean => {
    if (!file.name.endsWith('.csv')) {
      toast({
        variant: "destructive",
        title: "Invalid file format",
        description: "Please upload a CSV file",
      });
      return false;
    }
    return true;
  };

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0];
        if (validateFile(file)) {
          setSelectedFile(file);
        }
      }
    },
    [toast]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        if (validateFile(file)) {
          setSelectedFile(file);
        }
      }
    },
    [toast]
  );

  const handleSubmit = useCallback(() => {
    if (selectedFile) {
      onFileUpload(selectedFile);
    } else {
      toast({
        variant: "destructive",
        title: "No file selected",
        description: "Please select a CSV file to upload",
      });
    }
  }, [selectedFile, onFileUpload, toast]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`drop-area p-8 ${dragActive ? 'active' : ''} ${
          isLoading ? 'opacity-70 pointer-events-none' : ''
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="bg-medical-100 p-4 rounded-full">
            <Upload className="h-10 w-10 text-medical-600" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800">
              {selectedFile ? 'File Selected' : 'Upload Your CSV File'}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {selectedFile
                ? selectedFile.name
                : 'Drag and drop or click to browse'}
            </p>
          </div>
          <input
            type="file"
            id="file-upload"
            className="hidden"
            accept=".csv"
            onChange={handleChange}
            disabled={isLoading}
          />
          <label
            htmlFor="file-upload"
            className="bg-white border border-medical-300 hover:bg-medical-50 px-4 py-2 rounded-md transition-colors cursor-pointer text-sm"
          >
            Browse Files
          </label>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <AlertCircle className="h-4 w-4" />
          <span>Only CSV files are accepted</span>
        </div>
        <Button 
          className="w-full mt-2" 
          onClick={handleSubmit} 
          disabled={!selectedFile || isLoading}
        >
          {isLoading ? 'Processing...' : 'Upload and Analyze'}
        </Button>
      </div>
    </div>
  );
};

export default FileUploader;
