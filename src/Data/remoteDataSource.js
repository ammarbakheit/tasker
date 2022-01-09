


export const   fetchAllTasks =  async () =>  {
  const data = JSON.parse(localStorage.getItem("tasks"));
  console.log(localStorage.getItem("tasks"));

  if(data) {
    return data;
  } else {
    return [];
  }
 


     
}


export function addNewTasktoServer(task) {
  if(localStorage.getItem("tasks")) {
    const tasks =  JSON.parse(localStorage.getItem("tasks"));
    tasks.push({
      id: Math.floor(Math.random() * 1000),
      ...task
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    return tasks;
  } else {
    const tasks = [];
    tasks.push({
      id: Math.floor(Math.random() * 1000),
      ...task
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    return tasks;

  }
  

  
}


export function checkSingleTask(id) {
  if(localStorage.getItem("tasks")) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.map(task => {
      if(task.id == id) {
        task.status === "0" ? task.status = "1" : task.status = "0";
      }
     });
     localStorage.setItem("tasks", JSON.stringify(tasks));
     return tasks;
  } else {
    return [];
  }
}



export function deleteSingleTask(id) {
  if(localStorage.getItem("tasks")) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.map(task => {
      if(task.id == id) {
        
        tasks.splice( tasks.indexOf(task), 1 )
      }
     });
     localStorage.setItem("tasks", JSON.stringify(tasks));
     return tasks;
  } else {
    return [];
  }
}