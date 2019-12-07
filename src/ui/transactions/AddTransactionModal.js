import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class AddTransactionModal extends Component {

  render() {
    return (
        <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Add Transaction
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container">
                  to add form fields for transaction
              </div>
            </Modal.Body>
            <Modal.Footer>
                <Button varient="danger" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        );
    }
}
