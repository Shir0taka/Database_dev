import { Component } from 'react';
import { Input } from './styles';

const currencyNames = {
    uah: 'UAH',
    usd: 'USD'
};

class Price extends Component {
    constructor(props) {
      super(props);
    }

    handleChange = (e) => {
      this.props.onTemperatureChange(e.target.value);
    }

    render() {
      const amount = this.props.amount;
      const currency = this.props.currency;
      return (
        <fieldset>
          <legend>PRICE [{currencyNames[currency]}]:</legend>
          <Input value={amount}
                 onChange={this.handleChange} readOnly/>
        </fieldset>
      );
    }
}

export default Price;