import React, { useState } from 'react';

const ToDo = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState('');
  console.log(input);

  const handleAddTask = () => {
    if (input === '' || !input) return;
    setTasks((oldTasks: string[]) => [...oldTasks, input]);
    setInput('');
  };

  return (
    <div className="bg-white py-3 h-screen">
      {' '}
      <h1 className="text-4xl text-gray-900 font-bold">To Do List</h1>
      <div className="flex justify-center items-center flex-col">
        <div className="px-8 py-4 flex justify-between w-[80%] mt-5 items-center">
          <p className="text-xl text-black font-semibold">Add Task </p>
          <div className="flex items-center gap-4">
            <input
              autoFocus
              onKeyDown={e => {
                if (e.key === 'Enter') 
                  handleAddTask();
                
              }}
              value={input}
              onChange={e => {
                setInput(e.target.value);
              }}
              type="text"
              className="border-2 text-black border-gray-300 rounded-lg px-4 py-2 w-[300px] focus:outline-none focus:border-blue-500"
              placeholder="Enter task name"
            />
            <button
              onClick={() => {
                if (input === "" || !input) return;
                handleAddTask();
              }}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold duration-150 cursor-pointer"
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto mt-5 flex flex-col items-center justify-center gap-4">
        {tasks.length > 0 ? (
          tasks.reverse().map((task, i) => (
            <div
              key={i}
              className="w-full border border-indigo-700 hover:bg-indigo-600 hover:text-white cursor-pointer duration-200 py-5 px-10 bg-gray-100  text-black font-extrabold rounded-xl duration-150"
            >
              {task}
            </div>
          ))
        ) : (
          <p className="text-2xl text-center capitalize text-indigo-700 font-bold">
            You have no added tasks! ☹️ <br /> Add a task to get started ....{' '}
          </p>
        )}
      </div>
    </div>
  );
};

export default ToDo;
