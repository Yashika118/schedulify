import React, { useState } from 'react'

const InputForm = ({onSubmit}) => {

  const [processes, setProcesses] = useState([{ arrival: "", burst: "", priority: "" }]);
  // const [processes, setProcesses] = useState([
  //   { arrival: "0", burst: "4", priority: "0" },
  //   { arrival: "1", burst: "3", priority: "0" },
  //   { arrival: "2", burst: "1", priority: "0" },
  //   { arrival: "3", burst: "2", priority: "0" },
  //   { arrival: "4", burst: "6", priority: "0" },
    
  // ]);

  // add a new empty row for process input
  const addProcess=()=>{
    setProcesses([...processes,{ arrival: "", burst: "", priority: "" }]);
  };

  // Remove a specific process
  const removeProcess = (delIndex) => {
    const updatedProcesses = processes.filter((_, index) => index !== delIndex);
    setProcesses(updatedProcesses);
  };


  // handle input field changes dynamically
  const handleChange=(index,field,value)=>{
    const updatedProcesses=[...processes];
    updatedProcesses[index][field]=value;
    setProcesses(updatedProcesses);
  };

  // handle form submission
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log("submit");

    // pass the processes input to parent component
    const formattedProcesses=processes.map((p,i)=>({
      
      id:i+1,
      arrival:parseInt(p.arrival) || 0,
      burst: parseInt(p.burst) || 0,
      priority: parseInt(p.priority) || 0,

    }));
    onSubmit(formattedProcesses);
  }

  return (
    <div className='p-4 bg-black text-white rounded-lg shadow-md my-5'>
      <h2 className='p-4 text-xl font-sans mb-4 text-center'>Process Input Form</h2>
      <form onSubmit={handleSubmit}>
        <div className='p-4 flex flex-col gap-4'>
          {processes.map((process, index) => (

            // div for input blocks
            <div key={index} className='flex flex-wrap gap-4 items-center justify-between'>
              <span className='font-semibold'>Process {index + 1} </span>
              {/* input block for arrival time */}
              <input
                type="number"
                placeholder='  Arrival Time'
                value={process.arrival}
                onChange={(e) => handleChange(index, "arrival", e.target.value)}
                className='w-46 p-2 text-black rounded bg-white-700 focus:outline-none'
              >
              </input>

              {/* input block for burst time */}
              <input
                type="number"
                placeholder='  Burst Time'
                value={process.burst}
                onChange={(e) => handleChange(index, "burst", e.target.value)}
                className='w-46 p-2 text-black rounded bg-white-700 focus:outline-none'
              ></input>

              {/* input block for priority */}
              <input
                type="number"
                placeholder='  Priority'
                value={process.priority}
                onChange={(e) => handleChange(index, "priority", e.target.value)}
                className='w-46 p-2 text-black rounded bg-white-700 focus:outline-none'
              ></input>

              {/* remove process button */}
              <button
                  type="button"
                  onClick={() => removeProcess(index)}
                  className="w-46 p-2 text-sm font-semibold rounded-lg bg-red-600 hover:bg-red-800 transition duration-300"
                >
                  Remove
              </button>

            </div>

          ))}

          {/* div for add process and submit button */}
          <div className='mt-4 flex justify-center gap-4'>

            <button
              type='button'
              onClick={addProcess}
              className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition'
            >
              Add Process
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Submit
            </button>

          </div>

        </div>
      </form>
    </div>
  )
}

export default InputForm