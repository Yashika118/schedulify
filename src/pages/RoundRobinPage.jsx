import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import InputForm from '../components/InputForm';
import ResultsTable from '../components/ResultsTable';
import { roundRobin } from '../Algorithms/RoundRobinAlgo';
import TimeQuantum from '../components/TimeQuantum';

const RoundRobinPage = () => {
  const [results, setResults] = useState([]);
  const [timeQuantum,setTimeQuantum]=useState(0);

  const handleFormSubmit = (processes) => {
    // console.log("Submitted Processes : ", processes);
    if(timeQuantum<=0){
      alert("Not a valid time quantum");
      return;
    }
    const output = roundRobin(processes, timeQuantum);
    setResults(output);
  };

  return (
    <div className='min-h-screen bg-yellow-400'>
      {/* navbar */}
      <div className='h-full flex flex-col bg-yellow-400 items-center'>
        <Navbar title="ROUND ROBIN SCHEDULING" />

        <div className=' flex flex-col items-center my-5'>

          <InputForm onSubmit={handleFormSubmit} />

          <TimeQuantum timeQuantum={timeQuantum} setTimeQuantum={setTimeQuantum}/>

          {
            results.length > 0 && (
              <>
                <ResultsTable results={results}/>
                
              </>
            ) 
          }
        </div>

      </div>
    </div>
  )
}

export default RoundRobinPage