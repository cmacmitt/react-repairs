import React from 'react';

const TasksTable = (props) => {
  const { tasks } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Task Name</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => {
          const taskClasses = task.completed
            ? 'btn btn-secondary btn-sm'
            : 'btn btn-warning btn-sm';
          return (
            <tr key={task.id}>
              <td>{task.task}</td>
              <td>
                <button className={taskClasses}>
                  {task.completed ? 'completed' : 'incomplete'}
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TasksTable;
