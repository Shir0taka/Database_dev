import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addProduct,
  removeProduct,
  updateProductStatus,
  filterProducts,
} from '../../rootReducer.js';
import styles from './styles.module.css'

function ReduxComponent() {
    const productsList = useSelector((state) => {
        switch (state.filter) {
          case 'all':
            return state.productsList;
          case 'pdf':
            return state.productsList.filter((product) => product.status === 'pdf');
          case 'object':
            return state.productsList.filter((product) => product.status === 'object');
          default:
            return state.productsList;
        }
      });
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => { }, [dispatch, productsList, filter]);

  const handleFilterChange = (event) => {
    const filter = event.target.value;
    dispatch(filterProducts(filter));
  };

  const updateSelectedTaskStatus = (productId) => {
    const product = productsList.find((obj) => obj.id === productId);
    dispatch(
      updateProductStatus(
        productId,
        product.status === 'pdf' ? 'object' : 'pdf'
      )
    );
  };

  const handleAddTask = () => {
    const lastProduct = productsList[productsList.length - 1];
    const newId = lastProduct ? lastProduct.id + 1 : 1;
    dispatch(addProduct({ id: newId, title: 'New product', status: 'object' }));
  };

  const handleRemoveTask = (productId) => {
    const product = productsList.find((obj) => obj.id === productId);
    dispatch(removeProduct(product.id));
  };


  return (
    <div className={styles.wrapper}>
      <div>
        <button className={styles.button} onClick={handleAddTask}>Add product</button>
      </div>
      <div>
        <h2>Products:</h2>
        {productsList.map((product) => (
          <>
            <div key={product.id}>{product.title} - [{product.status}]</div>
            <div className={styles.buttons}>
              <button className={styles.button} onClick={() => updateSelectedTaskStatus(product.id)}>Change status</button>
              <button className={styles.button} onClick={() => handleRemoveTask(product.id)}>Delete product</button>
            </div>
          </>
        ))}
      </div>
      <div>
        <h2>Filtering:</h2>
        <div>
          <label>
            <input type="radio" name="filter" value="all" checked={filter === 'all'} onChange={handleFilterChange} />
            All
          </label>
          <label>
            <input type="radio" name="filter" value="object" checked={filter === 'object'} onChange={handleFilterChange} />
            Object
          </label>
          <label>
            <input type="radio" name="filter" value="pdf" checked={filter === 'pdf'} onChange={handleFilterChange} />
            PDF
          </label>
        </div>
      </div>
    </div>
  );
}

export default ReduxComponent;