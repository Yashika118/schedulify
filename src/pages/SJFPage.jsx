import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import InputForm from '../components/InputForm';
import ResultsTable from '../components/ResultsTable.jsx';
import {sjf} from '../Algorithms/SjfAlgo.js';
import GanttChart from '../components/GanttChart.jsx';

const SJFPage = () => {

  const [results, setResults] = useState([]);

  const handleFormSubmit = (processes) => {
    // console.log("Submitted Processes : ", processes);
    const output = sjf(processes);
    setResults(output);
  };

  return (
    <div className='min-h-screen bg-yellow-400'>
      {/* navbar */}
      <div className='h-full flex flex-col bg-yellow-400 items-center'>
        <Navbar title="SHORTEST JOB FIRST SCHEDULING" />

        <div className='my-5'>

          <InputForm onSubmit={handleFormSubmit} />

          {
            results.length > 0 && (
              <>
                <ResultsTable results={results}/>
                {/* <GanttChart results={results}/> */}
              </>
            ) 
          }



        </div>

      </div>



    </div>
  )
}

export default SJFPage