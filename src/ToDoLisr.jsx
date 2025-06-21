import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Learn Today"]);
  const [newTasks, setNewTasks] = useState();
  let [doneTask, setDoneTask] = useState(false);

  function handleInput(event) {
    setNewTasks(event.target.value);
  }
  function handleAddTask() {
    if (newTasks.trim() !== "") {
      setTasks((t) => [...t, newTasks]);
      setNewTasks("");
    }
  }
  function handleDeleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  const completeTask = {
    textDecoration: "line-through",
    color: " hsl(10, 90%, 50%)",
  };
  const unCompleteTask = { textDecoration: "none" };

  function handleDoneTask() {
    setDoneTask(!doneTask);
  }
  let completeTaskStyle = doneTask ? completeTask : unCompleteTask;
  console.log(completeTaskStyle);

  return (
    <div className="todo-list">
      <h1>ToDo List</h1>
      <input
        type="text"
        value={newTasks}
        placeholder="Enter a Task..."
        onChange={handleInput}
      />
      <button className="add-btn" onClick={handleAddTask}>
        Add
      </button>

      <ol>
        {tasks.map((element, index) => (
          <li key={index}>
            <span className="tasks-text" style={completeTaskStyle}>
              {element}
            </span>
            <button
              className="delete-list-btn"
              onClick={() => handleDeleteTask(index)}
            >
              ✖
            </button>
            <button
              className="complete-task-btn"
              onClick={() => handleDoneTask(index)}
            >
              ✔
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
