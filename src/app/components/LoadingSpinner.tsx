import { useEffect, useState } from 'react';

export function LoadingSpinner() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0F19]">
      <div className="flex flex-col items-center gap-6">
        {/* Simple Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-[#C9A227]/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#C9A227] animate-spin"></div>
        </div>

        {/* Brand Name */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white">JOPIPS</h2>
          <p className="text-sm text-gray-400">Loading...</p>
        </div>

        {/* Simple Progress Bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#C9A227] transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
