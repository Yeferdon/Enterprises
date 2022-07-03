import {Route, Routes} from "react-router-dom";
import Enterprises from "./pages/Enterprises";
import Manager from "./pages/Manager";
import PageNotFound from "./pages/PageNotFound";
import {WelcomPage} from "./pages/WelcomPage";
import "./style/index.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomPage />} />
      <Route path="/enterprises" element={<Enterprises />} />
      <Route path="/manager" element={<Manager />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
