import { Outlet } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <h1>Hello?</h1>
      <Main />
      <Outlet />
    </div>
  );
}

export default App;
