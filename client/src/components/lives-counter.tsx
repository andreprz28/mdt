import { useState, useEffect } from "react";
import { TrendingUp, Heart } from "lucide-react";

export function LivesCounter() {
  const [livesSaved, setLivesSaved] = useState(2847956);
  const [livesPerSecond, setLivesPerSecond] = useState(2.3);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate lives saved incrementing every second
      setLivesSaved(prev => prev + Math.floor(Math.random() * 3) + 2);
      
      // Slight variation in lives per second
      setLivesPerSecond(2.3 + (Math.random() - 0.5) * 0.2);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lives-counter rounded-xl shadow-lg p-6 mb-6 text-white">
      <div className="text-center">
        <div className="text-sm font-medium mb-2 opacity-90">
          Lives Saved Through Medtronic Innovation
        </div>
        <div className="text-5xl font-bold mb-2" id="livesSavedCounter">
          {livesSaved.toLocaleString()}
        </div>
        <div className="text-sm opacity-75 flex items-center justify-center gap-4">
          <span className="inline-flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-green-200" />
            <span>{livesPerSecond.toFixed(1)} lives/second</span>
          </span>
          <span className="inline-flex items-center gap-1">
            <Heart className="w-4 h-4 text-red-200" />
            <span>Since 1949</span>
          </span>
        </div>
      </div>
    </div>
  );
}
