import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navbar from './componants/Navbar';
import Post from './componants/Post';
import Blog from './componants/Blog';
import Interview from './componants/Interview';
import Magazine from './componants/Magazine';
import Hero from './componants/Hero';
import Contact from './componants/Contact';
import BlogPage from './componants/pages/BlogPage';
import MagazinePage from './componants/pages/MagazinePage';
import InterviewPage from './componants/pages/InterviewPage';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Hero/>} />
        <Route path="/post" element={<Post />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/magazine' element={<MagazinePage />} />
        <Route path='/interview' element={<InterviewPage />} />
        <Route path="/blog/:BlogId" element={<Blog />} />
        <Route path="/magazine/:MagazineId" element={<Magazine />} />
        <Route path="/interview/:InterviewId" element={<Interview />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
