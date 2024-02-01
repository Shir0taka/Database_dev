import ProductList from "../ProductList";
import CategoryList from '../CategoryList';
import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { categoriesContext } from "../../contexts/CategoriesContext";
import Debug from "../Debug";

import { CSSTransition } from "react-transition-group";

import { Wrapper } from "./styles";

import store from '../../store.js';
import styles from './styles.module.css'
import './styles.css';

const Content = (props) => {
    const { categoryId } = useParams();
    const categories = useContext(categoriesContext);
    const [categoryAmount, setCategoryAmount] = useState(0);
    const [currentCategory, setCurrentCategory] = useState(0);
    const location = useLocation();
    const apiUrl = "http://localhost:3001/api";
    const [data, setData] = useState([]);

    let [history, setHistory] = useState([]);

    useEffect(() => {
      setHistory([...history, location.pathname]);
    }, [location]);

    useEffect(() => {
        if (categoryId != null && categories.filter(e => e.id == categoryId).length > 0)
            setCurrentCategory(+categoryId);

        console.log(store.getState());

        store.dispatch({ type: 'INCREMENT' });
        console.log(store.getState());

        store.dispatch({ type: 'INCREMENT' });
        console.log(store.getState());

        store.dispatch({ type: 'DECREMENT' });
        console.log(store.getState());
    }, []);

    useEffect(() => {
        const fetchDataFromDatabase = async () => {
          try {
            // Выполняем запрос к API
            const response = await fetch(`${apiUrl}/data`);
            const apiData = await response.json();

            const processedData = apiData.map(item => ({
                id: item.id,
                name: item.name.toUpperCase(),
                // Другие манипуляции...
            }));

            // Обновляем состояние компонента с полученными данными
            setData(apiData);
          } catch (error) {
            console.error("Ошибка при получении данных из базы данных:", error);
          }
        };
      
        fetchDataFromDatabase();
      }, []);

    const addItem = (amount) => {
        setCategoryAmount(amount);
    }

    const getCategory = (key) => {
        setCurrentCategory(key);
    }

    const [showDialog, setShowDialog] = useState(false);

    const toggleDialog = () => {
        setShowDialog(!showDialog);
    };

    return (
        <div className={styles.wrapper}>
            <button className={styles.toggleButton} onClick={toggleDialog}>Toggle Dialog</button>
            <CSSTransition
                in={showDialog}
                timeout={800}
                classNames="dialog"
                unmountOnExit
            >
                <div className={styles.dialogEnter}>
                <div >
                <h1>Shy Dialog</h1>
                <p>You opened a shy dialog box. Please close, he's shy</p>
                <button onClick={toggleDialog}>Close Dialog</button>
                </div>
                </div>
            </CSSTransition>

            <Debug history={history}/>
            <CategoryList getCategory={getCategory}/>
            <div>Goods amount: {categoryAmount}</div>
            <ProductList addItem={addItem} category={currentCategory}/>
        </div>
    );
}

export default Content;