import React from "react";

const GanttChart = ({ results }) => {

  // Calculate total time for the chart
  const totalTime = results[results.length - 1].completionTime;

  return (
    <div className="p-6 bg-black rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">📊  Gantt Chart</h2>
      
      {/* Gantt Chart Container */}
      <div className="relative w-full overflow-x-auto bg-gray-900 rounded-md border border-gray-700">
        <div className="flex">
          {results.map((process, index) => {

            // toFixed() = method converts a number to a string.method rounds the string to a specified number of decimals.
            const widthPercentage = ((process.burst / totalTime) * 100).toFixed(2);

            return (
              <div
                key={index}
                className="flex items-center justify-center text-center border-r border-gray-700 relative group"
                style={{
                  width: `${widthPercentage}%`,
                  backgroundColor: `hsl(${(index * 30) % 360}, 70%, 60%)`,
                }}
              >
                <div className="p-2 text-sm font-medium text-white">
                  {process.process}
                </div>
                {/* Hover Tooltip */}
                {/* <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center">
                  <span className="px-2 py-1 text-xs text-white bg-black rounded-md shadow-md">
                    Start: {process.arrival} | End: {process.completionTime}
                  </span>
                  <div className="w-3 h-3 bg-black rotate-45 -mt-1"></div>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>

      {/* Time Labels */}
      <div className="flex justify-between text-gray-300 text-xs mt-4">
        {results.map((process, index) => (
          <span
            key={index}
            className="text-center"
            style={{ width: `${((process.burst / totalTime) * 100).toFixed(2)}%` }}
          >
            {process.completionTime}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GanttChart;
