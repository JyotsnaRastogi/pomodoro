import React, { useState } from 'react';
import TaskCard from "./CreateTaskForm";
import CreateTaskForm from "./TaskForm";

function TaskWindow() {
  const [tasks, setTasks] = useState([]);

  const removeTask = (e) => {
    const deletedTaskId = e.target.closest('.task-card').dataset.id;
    const finalTasks = [...tasks];
    finalTasks.splice(deletedTaskId, 1);
    setTasks(finalTasks);
  };

  const addNewTask = (task) => {
    setTasks([...tasks, task]);
  };

  const tasksRendered = tasks.map((task, i) => (<TaskCard name={task.name} duration={task.duration} taskId={i} onCrossClick={removeTask} />));

  return (
    <div className="task-window">
      <h1 className="mb-1">Welcome to pomodora</h1>
      <h2 className="mb-2">Let's start with today's tasks</h2>
      <ul className="task-list">
        {tasksRendered}
      </ul>
      <div className="create-task-section mt-4">
        <div className="actions flex grow">
            <button className='action-btn mx-auto' onClick={() => document.querySelector('#create-task-form').classList.remove('hidden')}>
              Create Task
            </button>
        </div>
        <CreateTaskForm addNewTask={addNewTask}/>
      </div>
    </div>
  );
}

export default TaskWindow;
