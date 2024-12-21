import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import InputForm from '../components/InputForm.jsx'
import ResultsTable from '../components/ResultsTable.jsx';
import { fcfs } from "../Algorithms/FcfsAlgo.js";
import GanttChart from '../components/GanttChart.jsx';

const FCFSPage = () => {

  const [results, setResults] = useState([]);

  const handleFormSubmit = (processes) => {
    // console.log("Submitted Processes : ", processes);
    const output = fcfs(processes);
    setResults(output);
  };

  return (
    <div className='min-h-screen bg-yellow-400'>
      {/* navbar */}
      <div className='h-full flex flex-col bg-yellow-400 items-center'>
        <Navbar title="FIRST COME FIRST SERVE SCHEDULING" />

        <div className='my-5'>

          <InputForm onSubmit={handleFormSubmit} />

          {
            results.length > 0 && (
              <>
                <ResultsTable results={results}/>
                <GanttChart results={results}/>
              </>
            ) 
          }



        </div>

      </div>



    </div>
  )
}

export default FCFSPage