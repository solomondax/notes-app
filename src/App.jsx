
import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [tasks, setTasks] = useState([]);

  // Handle input change
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDetailsChange = (e) => setDetails(e.target.value);

  // Add task
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !details.trim()) {
      alert("Please fill all fields");
      return;
    }

    const newTask = {
      id: Date.now(), // unique id
      title,
      details,
    };

    setTasks((prev) => {
      return [...prev, newTask];
    });

    setTitle("");
    setDetails("");
  };

  // Delete task
  const handleDelete = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };
   
  return (
    <div className="min-h-screen bg-black flex flex-col lg:flex-row">
      {/* FORM SECTION */}
      <form onSubmit={handleSubmit} className="w-full lg:w-1/2 p-5 sm:p-10">
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-3xl sm:text-4xl pb-5">
            Add Notes
          </h1>

          <input
            value={title}
            cursor-
            pointer
            onChange={handleTitleChange}
            placeholder="Write Heading Here..."
            className="w-full border-2 border-white mb-6 p-3 text-white rounded-md"
          />
          {/* oppoo // */}
          <textarea
            value={details}
            onChange={handleDetailsChange}
            placeholder="Write Details here"
            className="w-full border-2 border-white text-white p-3 h-32 sm:h-40 rounded-md"
          />

          <button className="bg-white mt-6 py-3 rounded-md text-lg active:scale-95">
            Add Notes
          </button>
        </div>
      </form>

      {/* DIVIDER (only desktop) */}
      <div className="hidden lg:block w-0.5 bg-gray-400"></div>

      {/* NOTES SECTION */}
      <div className="w-full lg:w-1/2 p-5">
        <h1 className="text-white font-bold text-3xl sm:text-4xl pb-5">
          Recent Notes
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
          {tasks.map((task) => (
            <div 
              key={task.id}
              className="  bg-white rounded-xl p-4 flex flex-col justify-between shadow-md h-60 w-40 overflow-auto no-scrolbar"
            >
              <div>
                <h1 className="font-bold text-xl mb-2">{task.title}</h1>
                <p className="text-gray-600 text-sm">{task.details}</p>
              </div>

              <button
                onClick={() => handleDelete(task.id)}
                className="bg-red-700 text-white mt-4 py-2 rounded-md active:scale-95"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

  
