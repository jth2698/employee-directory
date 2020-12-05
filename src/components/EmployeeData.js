import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class EmployeeData extends Component {
    state = {
        loading: true,
        employees: [{}]
    }

    async componentDidMount() {
        const url = "https://randomuser.me/api/?results=100";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ employees: data.results, loading: false });
    }

    render() {
        return (
            <Container>
                <div>
                    {this.state.loading || !this.state.employees ? (
                        <div>loading...</div>
                    ) : (
                            <Row>
                                {this.state.employees.map(employee => (
                                    <Col>
                                        <img src={employee.picture.large} alt="employee headshot" />
                                        <div>
                                            {employee.name.first} {" "}
                                            {employee.name.last}
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        )}
                </div>
            </Container>
        );
    }
}

export default EmployeeData;