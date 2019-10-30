import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';

import s from './Dialogs.module.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {updateNewMessageCreator, sendMessageCreator} from "../../redux/state";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messagesElements = props.state.messages.map(m => <DialogMessage id={m.id} message={m.message}/>);

    let newMessageElement = React.createRef();

    let onNewMessageChange = (e) => {
        console.log(e.target);
        console.log(e.target.value);
        let message = e.target.value;

        props.dispatch(updateNewMessageCreator(message));
    };

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    };

    return (
        <Container>
            <Row>
                <Col><h1>Dialogs</h1></Col>
            </Row>
            <Row>
                <Col md={3}>
                    <Nav defaultActiveKey="/dialogs" className="flex-column">

                        {dialogsElements}

                    </Nav>
                </Col>
                <Col>
                    <div className={s.messages}>

                        {messagesElements}

                    </div>

                    <div className={s.form_add_message}>
                        <Form.Group controlId="formMessage">
                            <Form.Control as="textarea" rows="3"
                                          placeholder="Enter text..."
                                          ref={newMessageElement}
                                          onChange={onNewMessageChange}
                                          value={props.state.newMessageText} />
                        </Form.Group>
                        <Button variant="primary" type="" onClick={onSendMessageClick}>
                            Submit
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Dialogs;