import ProductList from "../ProductList";
import CategoryList from '../CategoryList';
import { Component } from "react";
import { Wrapper } from "./styles";

const categories = [
    { id: 1, name: "Main meal" },
    { id: 2, name: "Sweets" },
    { id: 3, name: "Exotic food" }
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
                <div>Current range: {this.state.categoryAmount}</div>
                <ProductList addItem={this.addItem} products={this.props.food} category={this.state.currentCategory}/>
            </Wrapper>
        );
    }

}

export default Content;