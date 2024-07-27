import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';
function App() {
  return (
    <div className='App'>
      <Router>
        <nav className='navbar'>
           <Link to='/'>Home page</Link>
          <Link to='/createpost'>Create A Post</Link>
          
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createpost' exact element={<CreatePost />} />
          <Route path='/post/:id' exact element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
