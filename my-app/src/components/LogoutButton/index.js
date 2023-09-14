import { A } from './styles';

function LogoutButton(props) {
    return (
      <div onClick={props.onClick}>
        <A href="#">Logout</A>
      </div>
    );
}

export default LogoutButton;