import { createStore } from "redux";
import rootReducer, { initialState } from "./rootReducer";

const store = createStore(rootReducer, initialState);

export default store;
