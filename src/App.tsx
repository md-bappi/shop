import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navigation/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
