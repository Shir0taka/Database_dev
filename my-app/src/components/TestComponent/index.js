import { useSelector, useDispatch } from "react-redux";
import { increment, setUser } from "../../actions";


const TestComponent = () => {
  const counter = useSelector((state) => state.counter);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();


  const handleClick = () => {
    dispatch(increment());
  };


  const handleLogin = () => {
    dispatch(setUser(
      {
        name: "Kryk",
        email: "vector.secret@gmail.com"
      }
    ));
  };


  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}>Increment</button>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}


export default TestComponent;