import React, { Component } from 'react';

let allEmployees = []

class FetchEmployeeData extends Component {
    state = {
        loading: true,
        employees: [{}]
    }

    async componentDidMount() {
        console.log("mounting");
        const url = "https://randomuser.me/api/?results=100";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        console.log(data);
        this.setState({ employees: data.results, loading: false });
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.employees ? (
                    <div>loading...</div>
                ) : (
                        <div>
                            {this.state.employees.map(employee => (
                                <div>
                                    <img src={employee.picture.large} alt="employee headshot" />
                                    <div>
                                        {employee.name.first} {" "}
                                        {employee.name.last}
                                    </div>
                                </div>

                            ))}
                        </div>
                    )}
            </div>
        );
    }
}

export default FetchEmployeeData;