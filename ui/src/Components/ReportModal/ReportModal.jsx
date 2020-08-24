import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import ChooseDealerBody from './ChooseDealerBody';
import ReportBody from './ReportBody';

const ReportModal = props => {
    const [showReport, setShowReport] = useState(false);
    const [showChooseDealer, setShowChooseDealer] = useState(true);
    const [dealer, setDealer] = useState(0);

    const handleSelectDealer = selectedDealer => setDealer(selectedDealer);

    const handleClose = () => {
        setShowReport(false);
        setShowChooseDealer(true);
    };
    const handleShow = () => {
        setShowReport(true);
        setShowChooseDealer(true);
    };
    const handleNext = () => {
        setShowChooseDealer(false);
    };


    const chooseDealerBody = (<ChooseDealerBody 
            handleSelectDealer={handleSelectDealer}
            dealer={dealer}
        />);
    const reportBody = (
        <ReportBody
            dealer={dealer}
        />
    );
    const nextButton = (
        <Button variant="primary" onClick={handleNext}>
            Next
        </Button> 
    );

    return (
    <>
        <Button variant="primary" onClick={handleShow}>
            Show report
        </Button>
        <Modal show={showReport} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Report for dealer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {showChooseDealer ? chooseDealerBody : reportBody}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>   
                {showChooseDealer ? nextButton : null}       
            </Modal.Footer>
        </Modal>  
        </>
      );
}
export default ReportModal;