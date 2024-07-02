import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasksToDo, setTasksToDo] = useState([]);
  const [tasksDone, setTasksDone] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasksToDo([...tasksToDo, task]);
      setTask("");
    }
  };

  const completeTask = (index) => {
    const completedTask = tasksToDo[index];
    setTasksToDo(tasksToDo.filter((_, i) => i !== index));
    setTasksDone([...tasksDone, completedTask]);
  };

  const deleteTask = (index) => {
    setTasksDone(tasksDone.filter((_, i) => i !== index));
  };

  const revertTask = (index) => {
    const revertedTask = tasksDone[index];
    setTasksDone(tasksDone.filter((_, i) => i !== index));
    setTasksToDo([...tasksToDo, revertedTask]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        <div>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter new task"
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className="task-container">
          <div className="tasks">
            <h2>Tasks To Do</h2>
            <ul>
              {tasksToDo.map((task, index) => (
                <li key={index}>
                  {task}
                  <button onClick={() => completeTask(index)}>Complete</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="tasks">
            <h2>Tasks Done</h2>
            <ul>
              {tasksDone.map((task, index) => (
                <li key={index}>
                  {task}
                  <button onClick={() => revertTask(index)}>Revert</button>
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
