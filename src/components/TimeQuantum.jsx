import React, { useState } from 'react'

const TimeQuantum = ({timeQuantum,setTimeQuantum}) => {
    
    return (
        <div className=' flex w-80 gap-4 p-4 bg-black text-white items-center rounded-lg shadow-md my-5'>
            <span className='font-semibold'>Time Quantum</span>

            <form>
                <input
                    type="number"
                    placeholder='  Quantum Time'
                    value={timeQuantum}
                    onChange={(e) =>setTimeQuantum(parseInt(e.target.value))}
                    className='w-46 p-2 text-black rounded bg-white-700 focus:outline-none'
                >
                </input>

            </form>
        </div>
    )
}

export default TimeQuantum