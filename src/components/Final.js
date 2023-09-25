import React, { Component } from 'react';
import PieChat from './PieChat';
import Modal from 'react-modal';
import EmployeeService from '../servises/EnseignantService';
import { withRouter } from './withRouter';
import ListEmployeeComponent from './ListEmployeeComponent';
import PieChart, {
    Legend,
    Export,
    Series,
    Label,
    Font,
    Connector,
} from 'devextreme-react/pie-chart';

class Final extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showAddModal: false,
            firstName: '',
            lastName: '',
            emailId: '',
            gender: '',
            count: [],
            counttest:[]
        };
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeGenderIdHandler = this.changeGenderIdHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this)
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenAddModal = this.handleOpenAddModal.bind(this);
        this.handleCloseAddModal = this.handleCloseAddModal.bind(this);
    }
  
   /*componentDidMount() {
        EmployeeService.getNbrePerGender().then((res) => {
            this.setState({ count: res.data });
        });
        
    }*/
    componentDidMount(){
        this.updateStats();
    }
    updateStats=async()=>{
        const res=await EmployeeService.getNbrePerGender();
        this.setState({count:res.data});
    }
    
    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
        this.componentDidMount();


    }
    handleOpenAddModal() {
        this.setState({ showAddModal: true });
    }

    handleCloseAddModal() {
        //this.componentDidMount();
        this.setState({ showAddModal: false ,firstName: '',
        lastName: '',
        emailId: '',
        gender: '',});
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
   
    async saveEmployee(/* = (e) =>*/) {
        //e.preventDefault();
       
        let employee = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, gender: this.state.gender };
        console.log('employee=>' + JSON.stringify(employee));
       // EmployeeService.createEmployees(employee); 
           /* EmployeeService.getNbrePerGender().then((res) => {
            this.setState({ counttest: res.data });
        });
        console.log(this.state.count);
        console.log(this.state.counttest);
        this.handleCloseAddModal();*/
        await EmployeeService.createEmployees(employee);
        await this.updateStats();
        this.handleCloseAddModal();
       
       

    }

    render() {
        return (
            <div>
                <PieChart id="pie"
                    palette="Bright"
                    dataSource={this.state.count}
                    title="Gender "
                >
                    <Legend
                        orientation="horizontal"
                        itemTextPosition="right"
                        horizontalAlignment="center"
                        verticalAlignment="bottom"
                        columnCount={4} />
                    <Export enabled={true} />
                    <Series argumentField="type" valueField="number">
                        <Label
                            visible={true}
                            position="columns"
                            customizeText={customizeText}>
                            <Font size={16} />
                            <Connector visible={true} width={0.5} />
                        </Label>
                    </Series>
                </PieChart>
                <button onClick={this.handleOpenModal} className='btn btn-info'>Show</button>
                <Modal
                    isOpen={this.state.showModal}
                >
                    <ListEmployeeComponent />
                    <button onClick={this.handleCloseModal} className='btn btn-info'>Close </button>
                </Modal>
                <button onClick={this.handleOpenAddModal} className='btn btn-info'>Add</button>
                <Modal
                    isOpen={this.state.showAddModal}
                >
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
                                    <input className="form-check-input" type="radio" value="Male" name="gender" onChange={this.changeGenderIdHandler} /> Male
                                    <input className="form-check-input" type="radio" value="Female" name="gender" onChange={this.changeGenderIdHandler} /> Female
                                </div>


                                <button className="btn btn-success" onClick={this.saveEmployee} >Save</button>
                                <button className="btn btn-danger" onClick={this.handleCloseAddModal} >Cancel</button>

                            </div>

                        </div>

                    </div>
                </Modal>

            </div>
        );
    }


}
function customizeText(arg) {
    return `${arg.valueText} (${arg.percentText})`;
}

export default Final;