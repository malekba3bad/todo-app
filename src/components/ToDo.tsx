import { useState } from "react"

const ToDo= () => {
  const [tasks , setTasks] = useState(["Task 1", "Task 2", "Task 3"]);
  
  return (
    <div>
        {tasks.map((task, index) => (
            <p key={index}>{task}</p>
        ))}
    </div>
  );
};

export default ToDo;