import React, { Component } from 'react';
import Pagination from './components/Pagination.jsx';
import { paginate } from './utils/paginate.js';
import TasksTable from './components/TasksTable';
import ListGroup from './components/ListGroup.jsx';

class App extends Component {
  state = {
    tasks: [],
    taskGroups: ['All Tasks', 'Incomplete', 'Completed'],
    selectedGroup: 'All Tasks',
    pageSize: 8,
    currentPage: 1,
  };

  componentDidMount() {
    const url = 'https://5ed0108416017c00165e327c.mockapi.io/api/v1/repairs';

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          tasks: result,
        });
      });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGroupSelect = (group) => {
    this.setState({ selectedGroup: group, currentPage: 1 });
  };

  render() {
    const {
      tasks: allTasks,
      pageSize,
      currentPage,
      taskGroups,
      selectedGroup,
    } = this.state;

    const filteredTasks =
      selectedGroup !== 'All Tasks'
        ? allTasks.filter((task) => {
            return selectedGroup === 'Completed'
              ? task.completed
              : !task.completed;
          })
        : allTasks;

    const sortedTasks = filteredTasks.sort((a, b) => {
      return a.task.localeCompare(b.task); // sort ascending
      // return b.task.localeCompare(a.task); // sort descending
    });

    const tasks = paginate(sortedTasks, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            groups={taskGroups}
            selectedGroup={selectedGroup}
            onGroupSelect={this.handleGroupSelect}
          />
        </div>
        <div className="col">
          <TasksTable tasks={tasks} />
          <Pagination
            itemCount={filteredTasks.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
