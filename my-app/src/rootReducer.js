export const initialState = {
    counter: 0,
    user: null,
    productsList: [
        { id: 1, title: 'Clean Code book', status: 'object' },
        { id: 2, title: 'Notebook', status: 'object' },
        { id: 3, title: 'PDF python Cheatsheet', status: 'pdf' },
      ],
    filter: 'all',
};

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_PRODUCT_STATUS = 'UPDATE_PRODUCT_STATUS';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';

export function addProduct(product) {
    return { type: ADD_PRODUCT, product };
}

export function removeProduct(productId) {
    return { type: REMOVE_PRODUCT, productId };
}

export function updateProductStatus(productId, status) {
    return { type: UPDATE_PRODUCT_STATUS, productId, status };
}

export function filterProducts(filter) {
    return { type: FILTER_PRODUCTS, filter };
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, counter: state.counter + 1 };
      case "DECREMENT":
          return { ...state, counter: state.counter - 1 };
      case "SET_USER":
        return { ...state, user: action.payload };
      case ADD_PRODUCT:
        return {
          ...state,
          productsList: [...state.productsList, action.product],
        };
      case REMOVE_PRODUCT:
        return {
          ...state,
          productsList: state.productsList.filter((product) => product.id !== action.productId),
        };
      case UPDATE_PRODUCT_STATUS:
        return {
          ...state,
          productsList: state.productsList.map((product) =>
            product.id === action.productId ? { ...product, status: action.status } : product
          ),
        };
      case FILTER_PRODUCTS:
        return {
          ...state,
          filter: action.filter,
        };
      default:
        return state;
    }
};

export default rootReducer;
