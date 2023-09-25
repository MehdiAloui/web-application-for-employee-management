import React, { Component } from 'react';
import EmployeeService from '../servises/EnseignantService';
import { withRouter } from './withRouter';
class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            emailId: '',
            gender: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeGenderIdHandler = this.changeGenderIdHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this)
    }
    changeFirstNameHandler(event) {
        this.setState({ firstName: event.target.value })

    }
    changeLastNameHandler(event) {
        this.setState({ lastName: event.target.value })

    }
    changeEmailIdHandler(event) {
        this.setState({ emailId: event.target.value })

    }
    changeGenderIdHandler(event) {
        this.setState({ gender: event.target.value })
    }

    saveEmployee = (e) => {
        e.preventDefault();

        let employee = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, gender: this.state.gender };
        console.log('employee=>' + JSON.stringify(employee));
        EmployeeService.createEmployees(employee).then(res => {
            this.props.navigate('/employees');
        });
    }
    cancel() {
        this.props.navigate('/employees');
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Employee</h3>
                            <div className='form-group'>
                                <label> first Name</label>
                                <input placeholder='First Name' name='firstName' className='form-control' value={this.state.firstName} onChange={this.changeFirstNameHandler} />

                            </div>
                            <div className='form-group'>
                                <label> Last Name</label>
                                <input placeholder='Last Name' name='lastName' className='form-control' value={this.state.lastName} onChange={this.changeLastNameHandler} />

                            </div>
                            <div className='form-group'>
                                <label> Email Adress</label>
                                <input placeholder='Email Adress' name='emailId' className='form-control' value={this.state.emailId} onChange={this.changeEmailIdHandler} />

                            </div>
                            <div>
                                <label>Gender</label>
                            </div>
                            <div>
                                <input className="form-check-input" type="radio" value="Male" name="gender"   onChange={this.changeGenderIdHandler}/> Male
                                <input className="form-check-input" type="radio" value="Female" name="gender"  onChange={this.changeGenderIdHandler}/> Female
                            </div>
                        

                        <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} >Cancel</button>

                    </div>

                </div>

            </div>
            </div >
        );
    }
}

export default withRouter(CreateEmployeeComponent);