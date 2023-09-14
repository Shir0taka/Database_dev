import { Component } from "react";
import ProductItem from "../ProductItem";
import { Wrapper } from  './styles';

let instancesCount = 0
class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0
        }
    }

    addItem = () => {
        instancesCount += 1
        this.props.addItem(instancesCount);
    }

    removeItem = () => {
        instancesCount -= 1
        this.props.addItem(instancesCount);
    }

    handleAmountChange = (change) => {
        if (change === 0) {
            this.setState({
                amount: 0
            })
        } else {
            this.setState({
                amount: this.state.amount + change
            })
        }
    }

    vanishAmount = () => {
        this.setState({
            amount: 0
        })
    }

    render() {
        this.categoryProducts = this.props.category === 0
            ? this.props.products
            : this.props.products.filter(product => product.categoryId === this.props.category)
        return (
            <>
            <div>You want to order {this.state.amount} items.</div>
            <Wrapper>
                {this.categoryProducts.map(product =>
                    <ProductItem
                        removeItem={this.removeItem}
                        addItem={this.addItem}
                        handleAmountChange={this.handleAmountChange}
                        vanishAmount={this.vanishAmount}
                        product={product}
                        key={product.id}/>
                )}
            </Wrapper>
            </>

        )
    }
}

export default ProductList;