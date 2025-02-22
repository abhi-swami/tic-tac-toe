import "./App.css";
// import Todo from "./TodosUsingmutate";
import Todo from "./tic-tac-toe";
import { useLogin } from "./hooks/useAuth";



function App() {
  const {isLogin,login}= useLogin();
  console.log(isLogin)
  
  return (
    <>
      <Todo />

      <button onClick={login}>Login</button>

    </>
  );
}

export default App;
