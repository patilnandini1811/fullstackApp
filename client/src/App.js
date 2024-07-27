import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <div className='App'>
      <Router>
        <nav>
          <Link to='/createpost'>Create A Post</Link>
          <br/>
          <Link to='/'>Home page</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createpost' element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
