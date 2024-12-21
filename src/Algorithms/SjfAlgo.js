import React from 'react'

export const sjf = (processes) => {
    var size = processes.length;
    let time = 0;
    let results = [];
    let completed = new Array(size).fill(0);                          // competed process array
    let completedProcess = 0;                                         // number of completed process                    
    // sort processes by arrival time
    processes.sort((a, b) => a.burst - b.burst);
    // console.log(processes);
    while (1) {
        let flag = 0;
        if (completedProcess === size) break;
        for (let i = 0; i < size; i++) {
            if (time >= processes[i].arrival && completed[i] === 0) {
                completedProcess++;
                completed[i] = 1;
                flag = 1;

                const completionTime = time + processes[i].burst;
                const turnaroundTime = completionTime - processes[i].arrival;
                const waitingTime = turnaroundTime - processes[i].burst;
                time = completionTime;
                
                results.push({
                    process: `P${processes[i].id}`,
                    arrival: processes[i].arrival,
                    burst: processes[i].burst,
                    completionTime,
                    turnaroundTime,
                    waitingTime,
                    temp:processes[i].id,
                })
                break;
            }
        }
        if (flag === 0) {
            time++;
        }
    }
    results.sort((a,b)=>(a.temp-b.temp));
    // console.log(results);
    return results;
}

