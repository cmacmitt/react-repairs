import React from 'react';

const TasksTable = (props) => {
  const { tasks } = props;
  return (
    <table className="table">
      <tbody>
        {tasks.map((task) => {
          const taskClasses = task.completed
            ? 'badge badge-secondary'
            : 'badge badge-warning';
          return (
            <tr key={task.id}>
              <td>{task.task}</td>
              <td className={taskClasses}>
                {task.completed ? 'completed' : 'incomplete'}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TasksTable;
