import React, { Component } from 'react';
import UpdateEmployeeComponent from './UpdateEmployeeComponent';
import { withRouter } from './withRouter';
import Modal from 'react-modal';
import EnseignantService from '../servises/EnseignantService';


class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            enseignant: [],
            showModal: false,
            prenom: '',
            nomame: '',
            email: '',
            cin:''

        }

        /*this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        /////////////////////////////////////////////////////////:
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        /////////////////////////////////
        this.changeprenomHandler = this.changeprenomHandler.bind(this);
        this.changenomameHandler = this.changenomameHandler.bind(this);
        this.changeemailHandler = this.changeemailHandler.bind(this);
*/

    }
    ////////////////////////////////////////:
    handleOpenModal(id) {
        EnseignantService.getenseignantById(id).then((res) => {
            let employee = res.data;
            this.setState({
                prenom: employee.prenom,
                nomame: employee.nomame,
                email: employee.email,
                cin:employee.cin
            });
        });
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
        this.componentDidMount();
    }
    ///////////////////////////////////////:
    componentDidMount() {
        EnseignantService.getenseignant().then((res) => {
            this.setState({ enseignant: res.data });
        });

    }

    /*addEmployee() {
        this.props.navigate('/add-employee')


        //call router

    }
    editEmployee(id) {

        this.props.navigate(`/update-employee/${id}`)



    }
    deleteEmployee(id) {
        enseignantervice.deleteEmployee(id).then(res => {
            this.setState({ enseignant: this.state.enseignant.filter(employee => employee.id !== id) });
        });

    }*/
    //////////////////////
   changeprenomHandler(event) {
        this.setState({ prenom: event.target.value })

    }
    changenomameHandler(event) {
        this.setState({ nom: event.target.value })

    }
    changeemailHandler(event) {
        this.setState({ email: event.target.value })

    }
    /* updateEmployee = (e) => {
        e.preventDefault();

        let employee = { prenom: this.state.prenom, nomame: this.state.nomame, email: this.state.email };
        console.log('employee=>' + JSON.stringify(employee));
         enseignantervice.updateEmployee(employee, this.state.id).then(res=>{
            this.handleCloseModal();
        });

    }*/

    render() {
        return (
            <div>
                <h2 className='text-center'>enseignant List</h2>
                <div className='row'>
                    {/*<button className='btn btn-primary' onClick={this.addEmployee}> Add Employee</button>*/}
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>
                                    enseignant First name
                                </th>
                                <th>
                                    enseignant Last name
                                </th>
                                <th>
                                    enseignant Email ID
                                </th>
                                <th>
                                    Gender
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employee.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td> {employee.prenom}</td>
                                            <td> {employee.nomame}</td>
                                            <td> {employee.email}</td>
                                            <td>{employee.gender}</td>
                                            <td>
                                                
                                                <button onClick={() => this.handleOpenModal(employee.id)} className="btn btn-info">Update</button>
                                                <Modal isOpen={this.state.showModal}>
                                                    <div className='container'>
                                                        <div className='row'>
                                                            <div className='card col-md-6 offset-md-3 offset-md-3'>
                                                                <h3 className='text-center'>Update Employee</h3>
                                                                <div className='form-group'>
                                                                    <label> first Name</label>
                                                                    <input placeholder='First Name' name='prenom' className='form-control' value={this.state.prenom} onChange={this.changeprenomHandler} />

                                                                </div>
                                                                <div className='form-group'>
                                                                    <label> Last Name</label>
                                                                    <input placeholder='Last Name' name='nomame' className='form-control' value={this.state.nomame} onChange={this.changenomameHandler} />

                                                                </div>
                                                                <div className='form-group'>
                                                                    <label> Email Adress</label>
                                                                    <input placeholder='Email Adress' name='email' className='form-control' value={this.state.email} onChange={this.changeemailHandler} />

                                                                </div>
                                                                {/*<button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                                                <button className="btn btn-danger" onClick={this.handleCloseModal} >Cancel</button>*/}
                                                            </div>
                                                        </div>

                                                    </div>
                                                    {/*<UpdateEmployeeComponent employee={employee} />*/}
                                                </Modal>
                                                <button /*onClick={() => this.deleteEmployee(employee.id)}*/ className="btn btn-info">Delete</button>

                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>


                </div>

            </div>
        )
    }
}

export default withRouter(ListEmployeeComponent);