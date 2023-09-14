import { A } from './styles';

function LoginButton(props) {
    return (
      <div onClick={props.onClick}>
        <A href="#">Login</A>
      </div>
    );
}

export default LoginButton;