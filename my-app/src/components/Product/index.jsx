import { Wrapper, Title } from "./styles";
import styles from './styles.module.css'

import { useParams } from "react-router-dom";

import FeedbackForm from "../FeedbackForm";
import Price from "../Price";
import { useContext, useState } from "react";

import { Formik, Form, Field, ErrorMessage } from 'formik';

import { goodsContext } from "../../contexts/GoodsContext";
import axios from "axios";

const apiUrl = 'http://127.0.0.1:8000/api/comment';

const сonvertfromJpyToUah = (jpy) => {
    const course = 0.25;
    const result = jpy * course;
    const rounded = Math.round(result * 100) / 100;
    return rounded.toString();
}

const Product = (props) => {
    let { productId } = useParams();
    const food = useContext(goodsContext);
    const [comments, setComments] = useState([]);

    let product = food.find(p => p.id === +productId);

    const jpy = product.price;
    const uah = сonvertfromJpyToUah(jpy);

    const handleCommentSubmit = (values, {resetForm}) => {
        const newComment = {
            author: values.author,
            text: values.comment
        }
        setComments([...comments, newComment]);
        resetForm();
    }

    const sendComment = () => {
        const data = {
            title: document.getElementById('author').value,
            description: document.getElementById('comment').value,
            status: '1',
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
            rate: document.getElementById('rate').value
        }

        axios.post(apiUrl, data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return(
        <div className={styles.wrapper}>
                <div>
                    <div className={styles.title}>{product.name}</div>
                    <div>Here's the difference in currency</div>
                </div>
                <div>
                    <Price currency="uah" amount={uah}/>
                    <Price currency="jpy" amount={jpy}/>
                </div>
            <div>
                <h2>Comments</h2>
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <div key={index}>
                            <p><strong>{comment.author}:</strong> {comment.text}</p>
                        </div>
                    ))
                ) : (
                    <p>Leave your comment, please</p>
                )}
                <Formik
                    initialValues={{ author: '', comment: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.author) {
                            errors.author = 'Required';
                        }
                        if (!values.comment) {
                            errors.comment = 'Required';
                        }
                        return errors;
                    }}
                    onSubmit={handleCommentSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className={styles.commentForm}>
                            <div className={styles.formGroup}>
                                <label htmlFor="author">Author:</label>
                                <Field className={styles.formControl} type="text" name="author" id="author" placeholder="Your name"/>
                                <ErrorMessage className={styles.errorMessage} name="author" component="div" />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="comment">Comment:</label>
                                <Field className={styles.formControl} as="textarea" name="comment" id="comment" placeholder="Your text"/>
                                <ErrorMessage className={styles.errorMessage} name="comment" component="div" />
                            </div>
                            <div>
                                <label htmlFor="rate">Rate:</label>
                                <Field className={styles.formControlNum} type="number" name="rate" id="rate" placeholder="Rate of 5"/>
                                <ErrorMessage className={styles.errorMessage} name="rate" component="div" />
                            </div>
                            <br/>
                            <button type="submit" disabled={isSubmitting} className={styles.submitButton}
                            onClick={sendComment}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Product;