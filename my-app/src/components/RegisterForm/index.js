import axios from 'axios';
import styles from './styles.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react'; // Add this import statement

const apiUrl = 'http://127.0.0.1:8000/api/reg-customer';

const RegisterForm = () => {
  const [customer, setCustomer] = useState([]); // Add this state variable
  

  const handleRegForm = (values, { resetForm }) => {
    const newCustomer = {
      name: values.name,
      email: values.email,
      password: values.password,
      address: values.address,
      city: values.city,
      phone: values.phone,
    }
    setCustomer([...customer, newCustomer]);
    resetForm();
  }
  const addCustomer = () => {
    const data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      address: document.getElementById('address').value,
      city: document.getElementById('city').value,
      phone: document.getElementById('phone').value,
    }

    axios.post(apiUrl, data)
      .then((response) => {
       // Set the success message
      console.log(response);
      })
      .catch((error) => {
      console.log(error);
      });
  }

  return (
  <div>
    <Formik
    initialValues={{
      name: '',
      email: '',
      password: '',
      address: '',
      city: '',
      phone: '',
    }}
    validationSchema={Yup.object({
      name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .required('Required'),
      email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
      password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Required'),
      /*.matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z\d])/,
        'Password must contain at least one uppercase letter and one non-letter symbol'
      ),*/
      address: Yup.string()
      .required('Required'),
      city: Yup.string()
      .required('Required'),
      phone: Yup.string()
      .required('Required')
      .matches(
        /^[0-9]{10}$/,
        'Phone number must be 10 digits'
      )
    })}
    onSubmit={handleRegForm}
    >
    {({ isSubmitting }) => (
      <Form className={styles.form}>
        <div className={styles.formDiv}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <Field className={styles.formControl} type="text" name="name" id="name" />
            <ErrorMessage name="name" className={styles.error} component="div" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <Field className={styles.formControl} type="email" name="email" id="email" />
            <ErrorMessage name="email" className={styles.error} component="div" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="address">Address</label>
            <Field className={styles.formControl} type="text" name="address" id="address" />
            <ErrorMessage name="address" className={styles.error} component="div" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="city">City</label>
            <Field className={styles.formControl} type="text" name="city" id="city"/>
            <ErrorMessage name="city" className={styles.error} component="div" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone</label>
            <Field className={styles.formControl} type="number" name="phone" id="phone" />
            <ErrorMessage name="phone" className={styles.error} component="div" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <Field className={styles.formControl} type="password" name="password" id="password" />
            <ErrorMessage name="password" className={styles.error} component="div" />
          </div>

          <button type="submit" disabled={isSubmitting} className={styles.submitButton}
          onClick={addCustomer}>
            Submit
          </button>
          
        </div>
      </Form>
    )}
    </Formik>
  </div>
  );
};

export default RegisterForm;