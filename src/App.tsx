import "./app.css";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/default/layoutdefault";
import Home from "./pages/home/home";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
