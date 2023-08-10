import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navbar from './componants/Navbar';
import Post from './componants/Post';
import Blog from './componants/Blog';
import Interview from './componants/Interview';
import Magazine from './componants/Magazine';
import Hero from './componants/Hero';
import Contact from './componants/Contact';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Hero/>} />
        <Route path="/post" exact element={<Post />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
