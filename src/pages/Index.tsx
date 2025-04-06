
import { useState, useEffect } from "react";
import HomePage from "./HomePage";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="blood-drop bg-blood-500 h-16 w-8 mx-auto mb-4 animate-pulse-slow"></div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">LifeFlow</h1>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return <HomePage />;
};

export default Index;
