import { Outlet } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Main />
      <Outlet />
    </div>
  );
}

export default App;
