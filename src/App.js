import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useFormik} from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      alert("Login Successful");
    },
    validate: values => {
      let errors = {};
      if (!values.password) errors.password = 'Required'; 
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      return errors; 
    }
  });
  return (
    <Container className="pb-5">
      <Form className="mt-5" onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control onChange={formik.handleChange} value={formik.values.email} id="email" name="email" type="email" placeholder="Enter email" />
          {formik.errors.email ? <Form.Text className="text-primary">{formik.errors.email}</Form.Text> : null }
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="pass">Password:</Form.Label>
          <Form.Control onChange={formik.handleChange} value={formik.values.password} id="pass" name="password" type="password" placeholder="Enter password" />
          {formik.errors.password ? <Form.Text className="text-primary">{formik.errors.password}</Form.Text> : null }
        </Form.Group>
        <Button id="submitBtn" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default App;
