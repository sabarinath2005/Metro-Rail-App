import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import FAQPage from './components/FAQPage';


function App() {
  return (
  
<BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/about" element={<AboutPage/>}/>
  <Route path="/service" element={<ServicesPage/>}/>
  <Route path="/contact" element={<ContactPage/>}/>
  <Route path="/faq" element={<FAQPage/>}/>
</Routes>
</BrowserRouter>

  );
}

export default App;
