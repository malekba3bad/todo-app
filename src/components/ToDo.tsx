// import { useState } from 'react';
// import { FaEdit } from 'react-icons/fa';
// import { MdDelete } from 'react-icons/md';

// const ToDo = () => {
//   const [tasks, setTasks] = useState<string[]>([]);
//   const [input, setInput] = useState('');
//   const [isOpen, setIsOpen] = useState(false);

//   const handleAddTask = () => {
//     if (input === '' || !input) return;
//     setTasks((oldTasks: string[]) => [...oldTasks, input]);
//     setInput('');
//   };

//   return (
//     <div className="bg-white py-3 h-screen">
//       {' '}
//       <h1 className="text-4xl text-gray-900 font-bold">To Do List</h1>
//       <div className="flex justify-center items-center flex-col">
//         <div className="px-8 py-4 flex justify-between w-[80%] mt-5 items-center">
//           <p className="text-xl text-black font-semibold">Add Task </p>
//           <div className="flex items-center gap-4">
//             <input
//               autoFocus
//               onKeyDown={e => {
//                 if (e.key === 'Enter') handleAddTask();
//               }}
//               value={input}
//               onChange={e => {
//                 setInput(e.target.value);
//               }}
//               type="text"
//               className="border-2 text-black border-gray-300 rounded-lg px-4 py-2 w-[300px] focus:outline-none focus:border-blue-500"
//               placeholder="Enter task name"
//             />
//             <button
//               onClick={() => {
//                 if (input === '' || !input) return;
//                 handleAddTask();
//               }}
//               className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold duration-150 cursor-pointer"
//             >
//               Add
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="max-w-2xl mx-auto mt-5 flex flex-col items-center justify-center gap-4">
//         {tasks.length > 0 ? (
//           tasks.reverse().map((task, i) => (
//             <div className='flex flex-col gap-4 items-start w-full'> 
// {""}
//             <div
//               key={i}
//               className="flex justify-between items-center group w-full border border-indigo-700 hover:bg-indigo-600 hover:text-white cursor-pointer  py-5 px-10 bg-gray-100  text-black font-extrabold rounded-xl duration-150"
//             >
//               <p>{task}</p>
              
              
//             <div>
//               <div className="flex items-center gap-4">
//                 <p className="text-gray-500 text-sm font-semibold">{i + 1}</p>
//                 <MdDelete
//                   className="text-2xl text-red-500 group-hover:text-red duration-200"
//                   onClick={() =>
//                     setTasks(oldTasks =>
//                       oldTasks.filter((_, index) => index !== i)
//                     )
//                   }
//                 />
//                 <FaEdit onClick={() => {
//                 setIsOpen(true);
//                 setInput(task);
//                 }

//                 }
//                  className="text-xl text-green-500 group-hover:text-red duration-200" />
//                  {isOpen && (<input
//               autoFocus
//               onKeyDown={(e) => e.key === 'Enter' && handleAddTask}
//               value={input}
//               onChange={e => {
//                 setInput(e.target.value);
//               }}
//               type="text"
//               className="w-full border-2 text-black border-gray-300 rounded-lg px-4 py-2 w-[300px] focus:outline-none focus:border-blue-500"
//               placeholder="Enter task name"
//             />)}
//               </div>
//             </div>
//             </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-2xl text-center capitalize text-indigo-700 font-bold">
//             You have no added tasks! ☹️ <br /> Add a task to get started ....{' '}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ToDo;
import { useState } from "react";

import Select from "./Select";
import Item from "./Item";

const ToDo = () => {
  const [tasks, setTasks] = useState<{ task: string; completed: boolean; duration: number }[]>([]);
  const [input, setInput] = useState({ task: "", duration: 1, completed: false }); 
  const [orderBy, setOrderBy] = useState<"task" | "duration" | "completed">("task");
  const [editInput, setEditInput] = useState({ task: "", duration: 1, completed: false }); 
  const [isOpen, setIsOpen] = useState(-1);
    
  const handleAddTask = () => {
    setTasks((oldTasks) => [...oldTasks, { task: input.task, completed: false, duration: input.duration }]);
    if (input.task === "" || !input) return;
    setInput({ task: "", duration: 1, completed: false });
  };
  const handleEditTask = (i: number) => {
    setTasks((oldTasks) =>
      oldTasks.map((oldTask, index) =>
        index === i ? { ...oldTask, task: editInput.task, duration: editInput.duration } : oldTask
  )
);
console.log(tasks);
    setIsOpen(-1);
  };
  const sortedTasks = [...tasks].sort((a, b) => {
    if (orderBy === "duration") return a.duration - b.duration;
    return a.task.localeCompare(b.task);
  });
  
  console.log(sortedTasks);
  return (
    <div className="bg-white py-3   h-full">
      {" "}
       <h1 className="text-4xl text-gray-900 font-bold">To Do List</h1>
      <p className="text-xl text-gray-900 ">Add your tasks below</p>
      <p className="text-xl text-gray-900 ">Sort your tasks by duration or task name</p>
      <p className="text-xl text-gray-900 ">Click on the task to edit or delete</p>
      <div className=" flex justify-center items-center flex-col  ">
        <div className=" px-8 py-4 flex justify-between w-[80%] mt-5 items-center">
          <p className="text-xl text-black font-semibold">Add Task </p>
          <div className="  flex items-center gap-4">
            <Select
              handleChange={setInput}
              input={input}
              options={[
                { value: 1, label: "1 hour" },
                { value: 2, label: "2 hours" },
                { value: 3, label: "3 hours" },
                { value: 4, label: "4 hours" },
                { value: 5, label: "5 hours" },
                { value: 6, label: "6 hours" },
                { value: 7, label: "7 hours" },
                { value: 8, label: "8 hours" },
              ]}
            />
            <input
              onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
              value={input.task}
              onChange={(e) => setInput({ task: e.target.value, duration: input.duration, completed: false })}
              type="text"
              className=" py-3 px-6 rounded-full border border-indigo-600 focus:outline-none bg-transparent text-black font-semibold"
            />
            <button
              onClick={handleAddTask}
              className=" py-2 px-6 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full duration-150 "
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div className=" max-w-2xl mx-auto mt-5 flex flex-col items-center gap-4 justify-center">
        {tasks.length > 0 ? (
          sortedTasks.map((task, i) => (
            <Item
              editInput={editInput}
              handleEditTask={handleEditTask}
              setIsOpen={setIsOpen}
              setTasks={setTasks}
              setEditInput={setEditInput}
              isOpen={isOpen}
              i={i}
              key={i}
              task={task}
            />
          ))
        ) : (
          <p className="text-2xl text-center capitalize text-indigo-700 font-bold">
            You have no added tasks! ☹️ <br /> Add a task to get started ....{' '}
          </p>
        )}
      </div>{" "}
      <div className=" mt-5 flex items-center justify-center gap-4 ">
        <h4 className=" text-black font-semibold">Sort By</h4>
        <Select
          customChange={(value) => setOrderBy(value as "task" | "duration" | "completed")}
          input={orderBy}
          options={[
            { value: "task", label: "task" },
            { value: "duration", label: "duration" },
            { value: "completed", label: "completed" },
          ]}
        />
      </div>
    </div>
  );
};

export default ToDo;