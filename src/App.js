import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Login from "./routes/Login";
import Contact from "./routes/Contact";
import Aboutus from "./routes/Aboutus";
import News from "./routes/News";
import NewsDetail from "./routes/NewsDetail";

function App() {
  return (
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contactus" element={<Contact />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<NewsDetail />} />
          </Routes>

  );
}

export default App;
