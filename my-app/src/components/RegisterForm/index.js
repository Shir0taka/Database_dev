import styles from './styles.module.css'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegisterForm = () => {
  return (
    <div>
        <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }}
        validationSchema={Yup.object({
            firstName: Yup.string()
            .min(3, 'Name must be at least 3 characters')
            .required('Required'),
            lastName: Yup.string()
            .max(40, 'Last name must be 40 characters or less')
            .required('Required'),
            email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
            password: Yup.string()
            .min(8, 'Password must me at least 8 characters')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])/,
                'Password must contain at least one uppercase letter and one non-letter symbol'
            )
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            }, 400);
        }}
        >
        {({ isSubmitting }) => (
            <Form className={styles.form}>
                <div className={styles.formDiv}>
                    <div className={styles.formGroup}>
                        <label htmlFor="firstName">First Name</label>
                        <Field className={styles.formControl} type="text" name="firstName" />
                        <ErrorMessage name="firstName" />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="lastName">Last Name</label>
                        <Field className={styles.formControl} type="text" name="lastName" />
                        <ErrorMessage name="lastName" />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email Address</label>
                        <Field className={styles.formControl} type="email" name="email" />
                        <ErrorMessage name="email" />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <Field className={styles.formControl} type="password" name="password" />
                        <ErrorMessage name="password" />
                    </div>

                    <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
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