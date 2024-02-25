import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import styles from './styles.module.css'
import * as Yup from 'yup';
import { useState } from 'react';

const apiUrl = 'http://127.0.0.1:8000/api/login-customer';

const LoginForm = () => {
  const [customer, setCustomer] = useState([]); // Add this state variable

  const handleLogForm = (values, { resetForm }) => {
    const newCustomer = {
      name: values.name,
      email: values.email,
      password: values.password,
    }
    setCustomer([...customer, newCustomer]);
    resetForm();
  }

  const authCustomer = () => {
    const data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    }

    axios.post(apiUrl, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const initialValues = {
    name: '',
    email: '',
    password: ''
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    } else if (values.name.length < 3) {
      errors.name = 'Name must be at least 3 characters long';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    return errors;
  };

  const FormikInput = ({ label, name, ...rest }) => (
    <div className={styles.formGroup}>
      <label htmlFor={name}>{label}</label>
      <Field type="text" name={name} id={name} {...rest} className={styles.formControl}/>
      <ErrorMessage name={name} component="div" className={styles.errorMessage} />
    </div>
  );

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleLogForm}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.formDiv}>
              <FormikInput label="Name" name="name" type="text" />
              <FormikInput label="Email" name="email" type="email" />
              <FormikInput label="Password" name="password" type="password" />

              <button type="submit" disabled={isSubmitting} className={styles.submitButton}
              onClick={authCustomer}>
                {isSubmitting ? 'Logging in...' : 'Log in'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default LoginForm;