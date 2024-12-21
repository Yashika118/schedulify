//   // sort() =sorts elements as strings in lexicographical order , not alphabetical order
//   //          lexicographical means (alphabets + numbers + symbols) as strings


export const fcfs = (processes) => {
  let time = 0; // Tracks the current time on the CPU
  let results = []; // Stores the result for each process

  // Sort processes by arrival time
  processes.sort((a, b) => a.arrival - b.arrival);

  // Calculate scheduling parameters for each process
  processes.forEach((process, index) => {
    const startTime = Math.max(time, process.arrival); // Ensure the CPU is free and the process has arrived
    const completionTime = startTime + process.burst; // Time when the process will finish execution
    const turnaroundTime = completionTime - process.arrival; // Total time from arrival to completion
    const waitingTime = turnaroundTime - process.burst; // Time spent waiting in the ready queue

    // Update current time to the completion time of this process
    time = completionTime;

    // Store results for this process
    results.push({
      process: `P${index + 1}`,
      arrival: process.arrival,
      burst: process.burst,
      completionTime,
      turnaroundTime,
      waitingTime,
    });
  });

  return results;
};

