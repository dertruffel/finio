import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Login from "./routes/Login";
import Contact from "./routes/Contact";
import Aboutus from "./routes/Aboutus";

function App() {
  return (
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contactus" element={<Contact />} />
                <Route path="/aboutus" element={<Aboutus />} />
          </Routes>

  );
}

export default App;
