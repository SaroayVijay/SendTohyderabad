// import React, { useState, useEffect } from 'react';
// import './todo.css';

// function TaskManager() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState({ title: '', description: '', dueDate: '' });
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showCompleted, setShowCompleted] = useState(true);

//   useEffect(() => {
//     // Fetch tasks from API or localStorage
//     // For simplicity, I'll just use some dummy data
//     const dummyTasks = [
//       { id: 1, title: 'Task 1', description: 'Description for Task 1', dueDate: '2024-03-10', completed: false },
//       { id: 2, title: 'Task 2', description: 'Description for Task 2', dueDate: '2024-03-15', completed: true },
//       // More tasks...
//     ];
//     setTasks(dummyTasks);
//   }, []);

//   const addTask = () => {
//     if (newTask.title.trim() !== '') {
//       setTasks([...tasks, { ...newTask, id: tasks.length + 1, completed: false }]);
//       setNewTask({ title: '', description: '', dueDate: '' });
//     }
//   };

//   const toggleComplete = (taskId) => {
//     setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
//   };

//   const filteredTasks = tasks.filter(task =>
//     task.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//     (showCompleted ? true : !task.completed)
//   );

//   return (
//     <div className="container">
//       <h1 className="heading">Task Manager</h1>
//       <div className="search-container">
//         <input className="search-input" type="text" placeholder="Search tasks..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
//         <label className="show-completed-label">
//           <input className="show-completed-checkbox" type="checkbox" checked={showCompleted} onChange={() => setShowCompleted(!showCompleted)} />
//           Show Completed
//         </label>
//       </div>
//       <ul className="task-list">
//         {filteredTasks.map(task => (
//           <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`} onClick={() => toggleComplete(task.id)}>
//             <strong className="task-title">{task.title}</strong>
//             <p className="task-description">{task.description}</p>
//             <p className="task-due-date">Due Date: {task.dueDate}</p>
//           </li>
//         ))}
//       </ul>
//       <div className="add-task-container">
//         <h2 className="add-task-heading">Add New Task</h2>
//         <input className="input-field" type="text" placeholder="Title" value={newTask.title} onChange={e => setNewTask({ ...newTask, title: e.target.value })} />
//         <input className="input-field" type="text" placeholder="Description" value={newTask.description} onChange={e => setNewTask({ ...newTask, description: e.target.value })} />
//         <input className="input-field" type="date" placeholder="Due Date" value={newTask.dueDate} onChange={e => setNewTask({ ...newTask, dueDate: e.target.value })} />
//         <button className="add-task-button" onClick={addTask}>Add Task</button>
//       </div>
//     </div>
//   );
// }

// export default TaskManager;
import React, { useState, useEffect } from 'react';
import './todo.css';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', dueDate: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    // Fetch tasks from API or localStorage
    // For simplicity, I'll just use some dummy data
    const dummyTasks = [
      { id: 1, title: 'Task 1', description: 'Description for Task 1', dueDate: '2024-03-10', completed: false },
      { id: 2, title: 'Task 2', description: 'Description for Task 2', dueDate: '2024-03-15', completed: true },
      // More tasks...
    ];
    setTasks(dummyTasks);
  }, []);

  const addTask = () => {
    if (newTask.title.trim() !== '') {
      setTasks([...tasks, { ...newTask, id: tasks.length + 1, completed: false }]);
      setNewTask({ title: '', description: '', dueDate: '' });
    }
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (showCompleted ? true : !task.completed)
  );

  return (
    <div className="container">
      <h1 className="heading">Task Manager</h1>
      <div className="search-container">
        <input className="search-input" type="text" placeholder="Search tasks..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        <label className="show-completed-label">
          <input className="show-completed-checkbox" type="checkbox" checked={showCompleted} onChange={() => setShowCompleted(!showCompleted)} />
          Show Completed
        </label>
      </div>
      <ul className="task-list">
        {filteredTasks.map(task => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`} onClick={() => toggleComplete(task.id)}>
            <strong className="task-title">{task.title}</strong>
            <p className="task-description">{task.description}</p>
            <p className="task-due-date">Due Date: {task.dueDate}</p>
            <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className="add-task-container">
        <h2 className="add-task-heading">Add New Task</h2>
        <input className="input-field" type="text" placeholder="Title" value={newTask.title} onChange={e => setNewTask({ ...newTask, title: e.target.value })} />
        <input className="input-field" type="text" placeholder="Description" value={newTask.description} onChange={e => setNewTask({ ...newTask, description: e.target.value })} />
        <input className="input-field" type="date" placeholder="Due Date" value={newTask.dueDate} onChange={e => setNewTask({ ...newTask, dueDate: e.target.value })} />
        <button className="add-task-button" onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
}

export default TaskManager;
