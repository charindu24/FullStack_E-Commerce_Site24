


const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-4 h-4 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-4 h-4 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <div className="sr-only">Loading</div>
        </div>
      );
    };
  
  export default LoadingSpinner;
  