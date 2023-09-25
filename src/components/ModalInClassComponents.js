import Modal from 'react-modal';

import React, { Component } from 'react';
import ListEmployeeComponent from './ListEmployeeComponent';
import PieChat from './PieChat';
import CreateEmployeeComponent from './CreateEmployeeComponent';

class ModalInClassComponents extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            showAddModal:false
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenAddModal = this.handleOpenAddModal.bind(this);
        this.handleCloseAddModal = this.handleCloseAddModal.bind(this);
    }
    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }
    handleOpenAddModal() {
        this.setState({ showAddModal: true });
    }

    handleCloseAddModal() {
        this.setState({ showAddModal: false });
    }
    render() {
        return (
            <div>
                <PieChat />
                <button onClick={this.handleOpenModal}>Show</button>
                <Modal
                    isOpen={this.state.showModal}
                >
                    <ListEmployeeComponent />
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                </Modal>
                <button onClick={this.handleOpenAddModal}>Add</button>
                <Modal
                    isOpen={this.state.showAddModal}
                >
                    <CreateEmployeeComponent />
                    <button onClick={this.handleCloseAddModal}>Close Modal</button>
                </Modal>

            </div>
        );
    }
}

export default ModalInClassComponents;