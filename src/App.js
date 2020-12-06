import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import SortButtons from "./components/SortButtons"
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import './App.css';


class App extends Component {
  state = {
    loading: true,
    employees: [{}],
    search: ""
  }

  async componentDidMount() {
    const url = "https://randomuser.me/api/?results=100";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ employees: data.results, loading: false });
  }

  handleSearch = (e) => {
    this.setState({ search: e.target.value })
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <SearchForm></SearchForm>
          <SortButtons></SortButtons>
          <Container>
            {this.state.loading || !this.state.employees ? (
              <div>loading...</div>
            ) : (
                <Row>
                  {this.state.employees.map(employee => (
                    <Col size="md-3">
                      <img src={employee.picture.large} alt="employee headshot" />
                      <div>
                        {employee.name.first} {" "}
                        {employee.name.last}
                      </div>
                    </Col>
                  ))}
                </Row>
              )}
          </Container>
        </div>
      </Router>
    )
  }
}

export default App;
