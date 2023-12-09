import './App.css'
import Login from './pages/Auth/Login/Login';
import Discover from './pages/Discover/Discover'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Playlist from './pages/Playlist/Playlist'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Discover/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/playlist" element={ <Playlist/>}/>
        </Routes>
      </Router>
     
    </>
  )
}

export default App
