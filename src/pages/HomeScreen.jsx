import React from 'react'
import { Link } from 'react-router';


const algorithms = [
  { name: "First Come First Serve", path: "/fcfs", color: "bg-blue-500" },
  { name: "Shortest Job First", path: "/sjf", color: "bg-green-500" },
  { name: "Round Robin", path: "/round-robin", color: "bg-yellow-500" },
  { name: "Priority Scheduling", path: "/priority", color: "bg-red-500" },
  { name: "Shortest Remaining Time First Scheduling", path: "/srtf", color: "bg-red-500" },
];

const HomeScreen = () => {
  return (
    <div className='min-h-screen pb-5 flex flex-col bg-yellow-400 items-center'>
      {/* header */}
      <div className=' text-center py-8'>
        <h1 className='text-8xl font-bold'>SCHEDULIFY</h1>
        <p className='text-2xl mt-5 font-serif'>Select an algorithm to get started.</p>
      </div>

      {/* list of algo */}
      <div className='flex flex-col gap-3'>
        {algorithms.map((algorithm, index) => (
          <Link
            to={algorithm.path} key={index}
            className='p-12 h-20 w-96 flex bg-black text-white items-center justify-center text-center 
            text-xl border-black border-4 rounded-xl hover:scale-105 transition-transform duration-300'
          >
            {algorithm.name}
          </Link>
        ))}
        
      </div>

    </div>
  )
}

export default HomeScreen