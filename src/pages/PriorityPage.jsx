import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import InputForm from '../components/InputForm';
import ResultsTable from '../components/ResultsTable';
import { priority } from '../Algorithms/PriorityAlgo';

const PriorityPage = () => {
  const [results, setResults] = useState([]);

  const handleFormSubmit = (processes) => {
    // console.log("Submitted Processes : ", processes);
    const output = priority(processes);
    setResults(output);
  };

  return (
    <div className='min-h-screen bg-yellow-400'>
      {/* navbar */}
      <div className='h-full flex flex-col bg-yellow-400 items-center'>
        <Navbar title="PRIORITY SCHEDULING" />

        <div className='my-5'>

          <InputForm onSubmit={handleFormSubmit} />

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

export default PriorityPage