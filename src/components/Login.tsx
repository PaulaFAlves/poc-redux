import { useDispatch } from "react-redux";
import { login, logout } from "../features/user.js";

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() =>
          dispatch(login({ name: "Paula", age: 42, email: "paula@email.com" }))
        }
      >
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default Login;
