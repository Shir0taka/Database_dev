import { Component } from 'react';
import { Wrapper, Item, Title } from './styles';
import { Link } from "react-router-dom";

class ProductItem extends Component {
    handleCheckboxChange = (e) => {
        const valueChange = e.target.checked ? 1 : -1;
        this.props.handleAmountChange(valueChange);
    }

    componentDidMount() {
        this.props.addItem();
        this.props.vanishAmount();
    }

    componentWillUnmount() {
        this.props.removeItem();
    }

    render() {
        return (
            <Wrapper>
                <Item>
                    <input type="checkbox" onChange={this.handleCheckboxChange}/>
                    <Title><Link to={`product/${this.props.product.id}`}>{this.props.product.name}</Link></Title>
                    <div>{this.props.product.price}$</div>
                </Item>
            </Wrapper>
        );
    }
}

export default ProductItem;