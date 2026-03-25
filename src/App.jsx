// import React from "react";
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [title, setTitle] = useState("");
//   const [details, setDetails] = useState("");
//   const [task, setTask] = useState([]);

//   const inputField = (e) => {
//     setTitle(e.target.value);
//   };

//   const detatailsField = (e) => {
//     setDetails(e.target.value);
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const CopyTask = [...task];
//     CopyTask.push({ title, details });
//     setTask(CopyTask);
//     console.log(CopyTask);
//     // console.log(title,details)
//     setTitle("");
//     setDetails("");
//   };
//   const handleDelete = (id) => {
//     const filteredTasks = task.filter((task) => task.id !== id);
//     setTask(filteredTasks);
//   };

//   return (
//     <div className="h-screen bg-black lg:flex  ">
//       <form onSubmit={submitHandler}>
//         <div className=" flex flex-col justify-start items-start pl-20 ">
//           <h1 className="text-white font-bold text-4xl pb-5">Add Notes</h1>
//           <input
//             onChange={inputField}
//             value={title}
//             placeholder="Write Heading Here..."
//             type="text"
//             className="h-15  w-full border-2 border-white mb-10 pl-5 font-bold text-lg text-white "
//           />
//           <textarea
//             onChange={detatailsField}
//             value={details}
//             placeholder="Write Details here"
//             className=" font-bold text-xl pl-5 pt-5  h-50  w-full border-2 border-white -2 pb-10 text-white"
//           ></textarea>
//           <button className="bg-white h-15  w-full   mt-10 text-lg cursor-pointer active:scale-95">
//             Add Notes
//           </button>
//         </div>
//       </form>

//       <div className="h-150 bg-white w-2  border-gray-400 ml-2"></div>

//       <div className="flex flex-col justify-start items-start flex-wrap ">
//         <h1 className="text-white font-bold text-4xl pb-5 pl-5">
//           Recent Notes
//         </h1>
//         <div className="flex gap-5 flex-wrap ml-5 w-200 overflow-auto">
//           {task.map((ele, idx) => {
//             return (
//               <div
//                 key={idx}
//                 className="h-50 w-40 rounded-2xl bg-red-100  flex flex-col justify-between items-start bg-[url('')]"
//               >
//                 <div className="pl-2">
//                   <h1 className="text-black font-bold text-2xl">{ele.title}</h1>

//                   <p className=" font-medium leading-snug text-gray-600">

//                     {ele.details}
//                   </p>
//                 </div>
//                 <button  onClick={()=>{
//                   handleDelete(idx)
//                 }} className="  bg-red-800 rounded-sm active:scale-95 text-white font-bold py- px-6 text-center ml-7 mb-2">
//                   Delete
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [title, setTitle] = useState("");
//   const [details, setDetails] = useState("");
//   const [tasks, setTasks] = useState([]);

//   // Handle input change
//   const handleTitleChange = (e) => setTitle(e.target.value);
//   const handleDetailsChange = (e) => setDetails(e.target.value);

//   // Add task
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!title.trim() || !details.trim()) {
//       alert("Please fill all fields");
//       return;
//     }

//     const newTask = {
//       id: Date.now(), // unique id
//       title,
//       details,
//     };

//     setTasks((prev) => [...prev, newTask]);

//     setTitle("");
//     setDetails("");
//   };

//   // Delete task
//   const handleDelete = (id) => {
//     const filteredTasks = tasks.filter((task) => task.id !== id);
//     setTasks(filteredTasks);
//   };

//   return (
//     <div className="h-screen bg-black lg:flex">
//       <form onSubmit={handleSubmit}>
//         <div className="flex flex-col pl-20">
//           <h1 className="text-white font-bold text-4xl pb-5">
//             Add Notes
//           </h1>

//           <input
//             value={title}
//             onChange={handleTitleChange}
//             placeholder="Write Heading Here..."
//             className="h-15 w-full border-2 border-white mb-10 pl-5 text-white"
//           />

//           <textarea
//             value={details}
//             onChange={handleDetailsChange}
//             placeholder="Write Details here"
//             className="h-50 w-full border-2 border-white text-white pl-5 pt-5"
//           />

//           <button className="bg-white mt-10 h-15 w-full active:scale-95">
//             Add Notes
//           </button>
//         </div>
//       </form>

//       <div className="h-150 bg-white w-2 ml-2"></div>

//       <div className="flex flex-col pl-5">
//         <h1 className="text-white font-bold text-4xl pb-5">
//           Recent Notes
//         </h1>

//         <div className="flex gap-5 flex-wrap w-200 overflow-auto">
//           {tasks.map((task) => (
//             <div
//               key={task.id}
//               className="h-50 w-40 rounded-2xl bg-red-100 flex flex-col justify-between"
//             >
//               <div className="pl-2">
//                 <h1 className="font-bold text-2xl">{task.title}</h1>
//                 <p className="text-gray-600">{task.details}</p>
//               </div>

//               <button
//                 onClick={() => handleDelete(task.id)}
//                 className="bg-red-800 text-white mb-2 ml-7 px-6 active:scale-95"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

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

  
