import React, { Component } from 'react';

class FetchEmployeeData extends Component {
    state = {
        loading: true,
        employees: [{}]
    }

    async componentDidMount() {
        console.log("mounting");
        const url = "https://randomuser.me/api/";
        const response = await fetch(url);
        const data = await response.json();
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
                            <div>{this.state.employees[0].name.first}</div>
                            <div>{this.state.employees[0].name.last}</div>
                            <img src={this.state.employees[0].picture.large} alt="employee headshot" />
                        </div>
                    )}
            </div>
        );
    }
}

export default FetchEmployeeData;