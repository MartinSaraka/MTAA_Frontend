import React, { Component } from 'react';


class TrainingListComponent extends Component {
    state = {
        fullname: '',
    }

    stateChange = (f) => {
        const {name, value} = f.target;
        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <div className="text-center">
                <label htmlFor="fullname"> Full Name: </label>
                <input type="text" name="fullname" onChange={this.stateChange} />
                <div className="border border-primary py-3">
                    <h4> Greetings, {this.state.fullname}!</h4>
                </div>
            </div>
        );
    }
}
