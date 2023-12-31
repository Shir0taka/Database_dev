import { Component } from 'react';
import { Form, Button, Textarea } from './styles';

class FeedbackForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
    }

    handleChange = (e) => {
      this.setState({value: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.value);
        alert(`Saving your "${this.state.value}" message was succesfull\nThank you for your feedback!`);
        this.setState({value: ''})
    }

    render() {
      return (
        <Form onSubmit={this.handleSubmit}>
          <Textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Enter your feedback!"
            required/>
          <Button type="submit" value="Send" />
        </Form>
      );
    }
}

export default FeedbackForm;