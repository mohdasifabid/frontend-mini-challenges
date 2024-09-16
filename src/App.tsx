import "./App.css";
import { Counter } from "./Components/Counter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
