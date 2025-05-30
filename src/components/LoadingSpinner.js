import React from 'react';
import '../components/styles/components.css';

export default function LoadingSpinner() {
  return (
    <div className="loading-spinner flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500" aria-label="Loading"></div>
    </div>
  );
}
