import { useEffect, useState, useContext } from "react";
import ProductItem from "../ProductItem";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Wrapper } from  './styles';
import styles from './styles.module.css'
import './styles'

import { goodsContext } from "../../contexts/GoodsContext";
let instancesCount = 0

const ProductList = (props) => {
    const goods = useContext(goodsContext);
    let [categoryProducts, setCategoryProducts] = useState([]);

    const [amount, setAmount] = useState(0);
    const [divs, setDivs] = useState([]);

    const handleAddDiv = () => {
        const newDiv = <div key={divs.length} className={styles.newDiv}>New Item</div>;
        setDivs([...divs, newDiv]);
    };

    const addItem = () => {
        instancesCount += 1;
        props.addItem (instancesCount);
    }

    const removeItem = () => {
        instancesCount -= 1;
        props.addItem (instancesCount);
    }

    const handleAmountChange = (change) => {
        if (change === 0) {
            setAmount(0);
        } else {
            setAmount(amount + change);
        }
    }

    const vanishAmount = () => {
        setAmount(0);
    }

    useEffect(() => {
        if (props.category === 0) {
            setCategoryProducts(goods);
        } else {
            setCategoryProducts(goods.filter(product => product.categoryId === props.category));
        }
    }, [props.category, goods]);

    return (
        <>
            <button onClick={handleAddDiv}>Add item</button>
            <div className={styles.container}>
                <TransitionGroup>
                {divs.map((div) => (
                    <CSSTransition key={div.key} timeout={300} classNames="fade">
                    {div}
                    </CSSTransition>
                ))}
                </TransitionGroup>
            </div>
            <div>You want to order {amount} items.</div>
            <div className={styles.wrapper}>
                {categoryProducts.map(product =>
                    <ProductItem
                        removeItem={removeItem}
                        addItem={addItem}
                        handleAmountChange={handleAmountChange}
                        vanishAmount={vanishAmount}
                        product={product}
                        key={product.id}/>
                )}
            </div>
        </>
    )
}

 export default ProductList;