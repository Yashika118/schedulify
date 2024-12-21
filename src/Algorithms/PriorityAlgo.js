export const priority = (processes) => {
    let results=[];
    let time=0;
    let size=processes.length;
    let completed=new Array(size).fill(0);
    let completetdProcess=0;

    processes.sort((a,b)=>b.priority-a.priority);
    // console.log(processes);
    while(completetdProcess<size){
        let flag=0;
        for(var i=0;i<size;i++){
            if(processes[i].arrival<=time && completed[i]===0){
                completed[i]=1;
                completetdProcess++;
                flag=1;
                const completionTime=time+processes[i].burst;
                const turnaroundTime=completionTime-processes[i].arrival;
                const waitingTime=turnaroundTime-processes[i].burst;
                time=completionTime;

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
        if(flag===0){
            time++;
        }
    }

    results.sort((a,b)=>a.temp-b.temp);
    // console.log(results);
    return results;
  };
  
  