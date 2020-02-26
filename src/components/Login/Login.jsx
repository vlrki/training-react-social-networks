import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {

    const ReduxFormControl = ({ input, meta, type, placeholder, min, max }) => {
        // debugger;
        return (
            <Form.Control
                type={type}
                name={input.name}
                placeholder={placeholder}
                min={min}
                max={max}
                value={input.value}
                onChange={input.onChange} />
        )
    }

    const ReduxFormCheckbox = ({ input, meta, type, label }) => {
        // debugger;
        return (
            <Form.Check
                type={type}
                name={input.name}
                label={label}
                value={input.value}
                checked={input.checked}
                onChange={input.onChange} />
        )
    }

    return <Form onSubmit={props.handleSubmit}>
        <Form.Group controlId="formBasicLogin">
            <Form.Label>Login</Form.Label>
            <Field component={"input"} name={"email"} type={"email"} placeholder="Login" className="form-control" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Field component={ReduxFormControl} name={"password"} type={"password"} placeholder={"Password"} />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
            <Field component={ReduxFormCheckbox} name={"rememberMe"} type={"checkbox"} label={"Remember me"} />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = () => {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <Container>
        <Row>
            <Col>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit} />
            </Col>
        </Row>
    </Container>;
};

export default Login;