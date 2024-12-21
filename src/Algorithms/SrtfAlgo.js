export const srtf = (processes) => {
    // Create a deep copy of processes to avoid modifying the original array
    let copyProcesses = processes.map(p => ({ ...p, remainingBurst: p.burst }));
    // console.log(copyProcesses);
    let size = processes.length;
    let time = 0;
    let results = [];
    let completedProcesses = 0;

    while (completedProcesses < size) {
        let toExe = null;
        let minbt = Number.MAX_VALUE;

        // Find the process with the shortest remaining burst time
        for (let i = 0; i < size; i++) {
            if (
                copyProcesses[i].arrival <= time &&
                copyProcesses[i].remainingBurst > 0 &&
                copyProcesses[i].remainingBurst < minbt
            ) {
                minbt = copyProcesses[i].remainingBurst;
                toExe = i;
            }
        }
        if (toExe !== null) {
            // Execute the selected process for one unit of time
            copyProcesses[toExe].remainingBurst--;

            // If the process is complete
            if (copyProcesses[toExe].remainingBurst === 0) {
                completedProcesses++;
                const completionTime = time + 1;
                const turnaroundTime = completionTime - copyProcesses[toExe].arrival;
                const waitingTime = turnaroundTime - processes[toExe].burst;

                results.push({
                    process: `P${processes[toExe].id || toExe + 1}`,
                    arrival: processes[toExe].arrival,
                    burst: processes[toExe].burst,
                    completionTime,
                    turnaroundTime,
                    waitingTime,
                    temp: processes[toExe].id,
                });
            }
        }
        // If no process is ready, increment time
        time++;
    }
    results.sort((a, b) => a.temp - b.temp);
    // console.log("SRTF Results:", results);
    return results;
};
