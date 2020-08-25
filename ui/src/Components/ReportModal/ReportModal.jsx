import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import ReportBody from './ReportBody';

const ReportModal = props => {
    const [showReport, setShowReport] = useState(false);

    const handleClose = () => {
        setShowReport(false);
    };
    const handleShow = () => {
        setShowReport(true);
    };

    return (
    <>
        <button class="select_row_item" onClick={handleShow}> Get aggregated report</button> 
        <Modal show={showReport} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Report for dealer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ReportBody
                    instrument={props.instrument}
                    dealer={props.dealer}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>       
            </Modal.Footer>
        </Modal>  
        </>
      );
}
export default ReportModal;