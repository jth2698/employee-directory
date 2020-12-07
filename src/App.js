import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import SortButtons from "./components/SortButtons"
import CardList from "./components/UserCards/CardList";
import './App.css';

let direction;

class App extends Component {
  state = {
    loading: true,
    users: [],
    search: ""
  }

  async componentDidMount() {
    const url = "https://randomuser.me/api/?results=100&nat=US";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ users: data.results, loading: false });
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ search: e.target.value })
  }

  sortLast = () => {
    if (direction === "ascending" || direction === undefined) {
      const users = this.state.users.sort((a, b) =>
        a.name.last.localeCompare(b.name.last)
      );
      this.setState({ users: users });
      direction = "descending";
    }
    else if (direction === "descending") {
      const users = this.state.users.sort((a, b) =>
        b.name.last.localeCompare(a.name.last)
      );
      this.setState({ users: users });
      direction = "ascending";
    }
  }

  sortFirst = () => {
    if (direction === "ascending" || direction === undefined) {
      const users = this.state.users.sort((a, b) =>
        a.name.first.localeCompare(b.name.first)
      );
      this.setState({ users: users });
      direction = "descending";
    }
    else if (direction === "descending") {
      const users = this.state.users.sort((a, b) =>
        b.name.first.localeCompare(a.name.first)
      );
      this.setState({ users: users });
      direction = "ascending";
    }
  }

  render() {
    const { users, search } = this.state;
    const filteredUsers = users.filter(user => (
      user.name.last.toLowerCase().includes(search.toLowerCase()) ||
      user.name.first.toLowerCase().includes(search.toLowerCase())
    ));
    return (
      <Router>
        <div>
          <Navbar />
          <SearchForm
            handleChange={this.handleChange}
          />
          <SortButtons
            sortLast={this.sortLast}
            sortFirst={this.sortFirst}
          />
          <CardList users={filteredUsers} />
        </div>
      </Router>
    )
  }
}

export default App;
