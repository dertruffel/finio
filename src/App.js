import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Login from "./routes/Login";
import Contact from "./routes/Contact";
import Aboutus from "./routes/Aboutus";
import News from "./routes/News";
import NewsDetail from "./routes/NewsDetail";
import CalculatorGrossNet from "./routes/CalculatorGrossNet";
import CalculatorVat from "./routes/CalculatorVat";

function App() {
  return (
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contactus" element={<Contact />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<NewsDetail />} />
                <Route path={"/calculators/1"} element={<CalculatorGrossNet />} />
                <Route path={"/calculators/2"} element={<CalculatorVat />} />
          </Routes>

  );
}

export default App;
