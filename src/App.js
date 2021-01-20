import React, { Component } from 'react';
import Pagination from './components/Pagination.jsx';
import { paginate } from './utils/paginate.js';
import TasksTable from './components/TasksTable';
class App extends Component {
  state = {
    tasks: [],
    pageSize: 5,
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

  render() {
    const { tasks: allTasks, pageSize, currentPage } = this.state;
    const tasks = paginate(allTasks, currentPage, pageSize);

    return (
      <div className="container">
        <TasksTable tasks={tasks} />
        <Pagination
          itemCount={allTasks.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default App;
