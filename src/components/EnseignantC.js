import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';


const Enseignant = () => {
  const [enseignants, setEnseignants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9001/enseignant-service/enseignants')
      .then(res => setEnseignants(res.data))
      .catch(err => console.log(err));
  }, []);

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


            {enseignants.map(enseignant => (
              <tr key={enseignant.id}>
                <td>{enseignant.nom}</td>
                <td>{enseignant.prenom}</td>
                <td>{enseignant.cin}</td>
                <td>{enseignant.email}</td>

                
                <Modal>
                  <div className='container'>
                    <div className='row'>
                      <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'>Update Employee</h3>
                        <div className='form-group'>
                          <label> first Name</label>
                          <input placeholder='First Name' name='prenom' className='form-control' value={enseignant.nom}  />

                        </div>
                        <div className='form-group'>
                          <label> Last Name</label>
                          <input placeholder='Last Name' name='nomame' className='form-control' value={enseignant.prenom} />

                        </div>
                        <div className='form-group'>
                          <label> Email Adress</label>
                          <input placeholder='Email Adress' name='email' className='form-control' value={enseignant.email}/>

                        </div>
                        {/*<button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                                        <button className="btn btn-danger" onClick={this.handleCloseModal} >Cancel</button>*/}
                      </div>
                    </div>

                  </div>
                  {/*<UpdateEmployeeComponent employee={employee} />*/}
                </Modal>
                <button /*onClick={() => this.deleteEmployee(employee.id)}*/ className="btn btn-info">Delete</button>

              </tr>
            ))}

          </tbody>
        </table>


      </div>

    </div >)}


  export default Enseignant;
