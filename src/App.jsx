import './App.css'
import Login from './pages/Auth/Login/Login';
import Discover from './pages/Discover/Discover'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Playlist from './pages/Playlist/Playlist'
import Signup from './pages/Auth/Signup/Signup';
import ArtistProfile from './pages/ArtistProfile/ArtistProfile';
import AlbumDirectory from './pages/AlbumDirectory/AlbumDirectory';
import PlaylistSongs from './pages/Playlist/PlaylistSongs';
import Library from './pages/Library/Library';
import Account from './pages/Account/Account';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/discover" element={<Discover/>}/>
          <Route path="/" element={<Discover/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/playlist" element={ <Playlist/>}/>
          <Route path="/burnaboy" element={ <ArtistProfile/>}/>
          <Route path="/album" element={ <AlbumDirectory/>}/>
          <Route path="/playlistsongs" element={ <PlaylistSongs/>}/>
          <Route path="/library" element={ <Library/>}/>
          <Route path="/account" element={ <Account/>}/>



        </Routes>
      </Router>
     
    </>
  )
}

export default App
