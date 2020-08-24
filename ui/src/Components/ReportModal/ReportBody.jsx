import React, {useState} from 'react';
import {Form} from 'react-bootstrap';

const ReportBody = props => {
    let dealers = [
        {name: "Anna", surname: "Agapova"},
        {name: "Ivan", surname: "Ivanov"}
    ];

    let rows = dealers.map((dealer, i) => (
            <option value={i}>{dealer.name} {dealer.surname}</option>
    ));

    return (
        <div>
            Choose dealer:
            <Form.Control
                as="select"
                className="mr-sm-2"
                onChange={e => props.handleSelectDealer(e.target.value)}
                value={props.dealer}
            >
                {rows}
            </Form.Control>
        </div>
    );
}
export default ReportBody;