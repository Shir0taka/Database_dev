import styles from './styles.module.css'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const NumberForm = () => {
  return (
    <Formik
      initialValues={{
        number: '',
      }}
      validationSchema={Yup.object({
        number: Yup.number()
          .required('Required')
          .typeError('Must be a number')
          .max(100, 'Must be less than or equal to 100')
          .positive('Must be a positive number'),
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
          <div className={styles.formGroup}>
            <label htmlFor="number">Number</label>
            <Field name="number" className={styles.formControl}/>
            <ErrorMessage name="number" />
          </div>

          <button className={styles.submitButton} type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default NumberForm;
