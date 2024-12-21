export const roundRobin = (processes, timeQuantum) => {
    // Create a deep copy of processes to avoid modifying the original array
    let copyProcesses = processes.map(p => ({ ...p, remainingBurst: p.burst }));

    let size = processes.length;
    let visited = new Array(size).fill(0);
    let time = 0;
    let results = [];
    let completedProcesses = 0;

    var queue = [];               // ready queue

    while (completedProcesses < size) {
        for (let i = 0; i < size; i++) {
            if (copyProcesses[i].arrival <= time && copyProcesses[i].remainingBurst != 0 && visited[i] === 0) {
                visited[i] = 1;
                queue.push(i);
            }
        }

        if (queue.length === 0) {
            time++;
            continue;
        }

        let toExe = queue.shift();
        let exeTime = Math.min(timeQuantum, copyProcesses[toExe].remainingBurst);
        copyProcesses[toExe].remainingBurst -= exeTime;
        time += exeTime;

        for (let i = 0; i < size; i++) {
            if (copyProcesses[i].arrival <= time && copyProcesses[i].remainingBurst != 0 && visited[i] === 0) {
                visited[i] = 1;
                queue.push(i);
            }
        }

        if (copyProcesses[toExe].remainingBurst > 0) {
            queue.push(toExe);
        } else {
            completedProcesses++;
            const completionTime=time;
            const turnaroundTime=completionTime-copyProcesses[toExe].arrival;
            const waitingTime=turnaroundTime-copyProcesses[toExe].burst;

            results.push({
                process: `P${processes[toExe].id || toExe + 1}`,
                arrival: processes[toExe].arrival,
                burst: processes[toExe].burst,
                completionTime,
                turnaroundTime,
                waitingTime,
                temp: processes[toExe].id,
            })
        }

    }

    results.sort((a,b)=>a.temp-b.temp);
    return results;
};

