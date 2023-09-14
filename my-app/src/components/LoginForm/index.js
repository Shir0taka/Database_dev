import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './styles.module.css'

const initialValues = {
  email: '',
  password: '',
};

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
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

const onSubmit = (values) => {
  console.log(values);
};

const FormikInput = ({ label, name, ...rest }) => (
  <div className={styles.formGroup}>
    <label htmlFor={name}>{label}</label>
    <Field type="text" name={name} id={name} {...rest} className={styles.formControl}/>
    <ErrorMessage name={name} component="div" className={styles.errorMessage} />
  </div>
);

const LoginForm = () => (
  <div>
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.formDiv}>
            <FormikInput label="Email" name="email" type="email" />
            <FormikInput label="Password" name="password" type="password" />

            <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
              {isSubmitting ? 'Logging in...' : 'Log in'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
  );

export default LoginForm;