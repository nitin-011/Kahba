import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './page/homepage/Homepage.jsx';
import Carrier from './page/carrierpage/Carrier.jsx';
import GetinTouchPage from './page/getintouchpage/GetinTouchPage.jsx';
import OurWorkpage from './page/owrworkpage/OurWorkpage.jsx';
import AboutUsPage from './page/aboutuspage/aboutuspage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/work" element={<Carrier />} />
        <Route path="/careers" element={<Carrier />} />
        <Route path="/contact" element={<GetinTouchPage />} />
        <Route path="/ourwork" element={<OurWorkpage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
