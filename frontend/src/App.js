import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/auth/Login";
function App() {
  return (
    <div className="app">
      <Login/>
    </div>
  );
}

export default App;
