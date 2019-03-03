import React from 'react';
import Modal from 'react-modal';

const ConfirmationModal = (props) => (
    <Modal
    isOpen={props.modalisOpen}
    onRequestClose={props.closeModal}
    contentLabel="Remove Expense"
    closeTimeoutMS={200}
    className="modal"
    >
    <h3 className="modal__title">Are You Sure You Sure You Want to Delete This Project? </h3>
    <button className="button" onClick={props.onRemove}>Remove Project</button>
    <button className="button button--secondary" onClick={props.closeModal}>Nevermind</button>
    </Modal>
);

export default ConfirmationModal;
