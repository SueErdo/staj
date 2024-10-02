import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './Pages/Main';
import Aboutus from './Pages/Aboutus';
import Blogs from './Pages/Blogs';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Main />}/>
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </BrowserRouter>

    // <div>
    //   <Navbar />
    //   <Main />
    // </div>
  );
}

export default App;
