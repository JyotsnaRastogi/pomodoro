import React, { useState } from 'react';

function CreateTaskForm(props) {

  const [taskName, setTaskName] = useState('');
  const [taskDuration, setTaskDuration] = useState('');

  const enableDisableSubmit = (e) => {
    const submitBtn = document.querySelector('.task-add');
    if (taskName && taskDuration) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewTask({ name: taskName, duration: taskDuration, status: 'pending' });
    const formEl = document.querySelector('#create-task-form');
    const submitBtn = document.querySelector('.task-add');
    formEl.classList.add('hidden');
    submitBtn.disabled = true;
    setTaskName('');
    setTaskDuration('');
  };

  return (
    <form id="create-task-form" className="mt-4 hidden" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="name">Task name</label>
      <input type="text" id="name" name="name"  placeholder="Enter task name" value={taskName} onChange={(e) => 
        {
        setTaskName(e.target.value);
        enableDisableSubmit();
        }
      }/>
      <label htmlFor="duration">Duration</label>
      <input type="number" id="duration" name="duration" placeholder="Enter duration (minutes)" value={taskDuration} onChange={(e) => 
        {
        setTaskDuration(e.target.value);
        enableDisableSubmit();
        }
      }/>
      <input type="submit" value="Add" className="task-add block py-1 px-3 mx-auto bg-[#d9564f] border-dashed border-2 border-slate-50 disabled:!text-[#f3c3c1] disabled:!border-none" disabled/>
    </form>
  );
}

export default CreateTaskForm;
