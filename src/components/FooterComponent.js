import React, { Component } from 'react';
import EmployeeService from '../servises/EnseignantService';

class FooterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
   
       
    render() {
        return (
            <div>
                <footer className='footer'>
                    <span className='text-muted'>@copyright</span>

                </footer>
            </div>
        );
    }
}

export default FooterComponent;