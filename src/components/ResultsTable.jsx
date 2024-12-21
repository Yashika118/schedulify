import React from "react";

const ResultsTable = ({ results }) => {
  return (
    <div className='p-4 bg-black text-white rounded-lg shadow-md my-5'>
      <h2 className="text-3xl font-bold text-center py-4 text-white border-b">
        𝄜  Scheduling Results
      </h2>
      <table className="w-full text-sm text-left text-gray-700">
        {/* Table Header */}
        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-center">Process</th>
            <th className="px-6 py-3 text-center">Arrival Time</th>
            <th className="px-6 py-3 text-center">Burst Time</th>
            <th className="px-6 py-3 text-center">Completion Time</th>
            <th className="px-6 py-3 text-center">Turnaround Time</th>
            <th className="px-6 py-3 text-center">Waiting Time</th>
          </tr>
        </thead>
        
        {/* Table Body */}
        <tbody>
          {results.map((r, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
              } hover:bg-blue-100 transition-colors duration-200`}
            >
              <td className="px-6 py-4 text-center font-medium">{r.process}</td>
              <td className="px-6 py-4 text-center">{r.arrival}</td>
              <td className="px-6 py-4 text-center">{r.burst}</td>
              <td className="px-6 py-4 text-center">{r.completionTime}</td>
              <td className="px-6 py-4 text-center">{r.turnaroundTime}</td>
              <td className="px-6 py-4 text-center">{r.waitingTime}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer with Notes */}
      <div className="text-sm text-gray-600 text-center py-4 bg-gray-50 border-t">
        Results are dynamically calculated based on Algorithm.
      </div>
    </div>
  );
};

export default ResultsTable;
