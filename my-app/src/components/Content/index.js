import ProductList from "../ProductList";
import CategoryList from '../CategoryList';
import {Component} from "react";
import { Wrapper } from "./styles";

const categories = [
    { id: 1, name: "Tableware" },
    { id: 2, name: "Clothes" },
    { id: 3, name: "Cosmetics" }
]

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryAmount: 0,
            currentCategory: 0
        }
    }

    getCategory = (key) => {
        this.setState({
            currentCategory: key
        });
    }

    addItem = (amount) => {
        this.setState({
            categoryAmount: amount
        })
    }

    render() {
        return (
            <Wrapper>
                <CategoryList getCategory={this.getCategory} categories={categories}/>
                <div>Goods amount: {this.state.categoryAmount}</div>
                <ProductList addItem={this.addItem} products={this.props.goods} category={this.state.currentCategory}/>
            </Wrapper>
        );
    }

}

export default Content;