import styles from './Playlist.module.scss'
import Button from '../../component/UI/Button/Button'
import plus from '../../assets/plus.svg'
import search from '../../assets/search.svg'
import Navigation from '../../component/compound/Navigation/Navigation'
import { Input } from '../../component/UI/input/Input'
import Sidebar from '../../component/compound/Sidebar/Sidebar'
import Modal from '../../component/compound/Modal/Modal'
import { useState } from 'react'
import MusicPlayer from '../../component/compound/MusicPlayer/MusicPlayer'
import axios from 'axios';
import PlaylistDisplay from './PlaylistDisplay'

const Playlist = () => {
    const [isModal, setIsModal] = useState(false)
    const [playlistName, setPlaylistName] = useState('');

    const createPlaylist = async () => {
        // Replace URL and data structure according to your API requirements
        const apiUrl = 'https://agbalumotunes-server.onrender.com/api/v1/playlist';
        try {
            const response = await axios.post(apiUrl, {
                title: playlistName,  // Adjust data structure as per your backend requirements
            });
            console.log('Playlist created:', response.data);
            setIsModal(false); // Close modal on success
            setPlaylistName('')
        } catch (error) {
            console.error('Error creating playlist:', error);
        }
    };

  return (
    <div>
        <div className={styles.pageWrapper}>
            <Sidebar/>
            <div style={{overflowY: 'auto', maxHeight: '100vh',}}>
                <Navigation/>
                <div className={styles.contentWrapper}>
                    <section className={styles.PlaylistNav}>
                        <div className={styles.PlaylistCTA}>
                            <Button
                            label={<p style={{display:'flex', gap:'8px'}}><img src={plus}/>Create playlist</p>}
                            style={{background:'#EF6B16', border:'1px solid #EF6B16'}}
                            onClick={()=>setIsModal(true)}
                            />
                            {
                                isModal &&
                                <Modal title="Create playlist" confirmColor='#EF6B16' buttonLabel='Save' closeModal={()=>setIsModal(false)} onConfirm={createPlaylist}>
                                    <Input placeholder='Type playlist name here e.g Gym'
                                            value={playlistName}
                                            onChange={(e) => setPlaylistName(e.target.value)}
                                    />
                                </Modal>
                            }
                        </div>
                        <div style={{color:'white',  width:'40px'}} className={styles.search}>
                            <img src={search}/>
                            <div style={{ flex:1,}}>
                                <Input
                                placeholder='Search by song, artist or genre'
                                style={{background:'transparent', border:'none', flex:1, color:'white', width:'450px'}}
                                />
                            </div>
                        </div>
                    </section>
                    <section className={styles.PlaylistCardContainer}>
                        <PlaylistDisplay/>
                    </section>
                </div>
            </div>
        </div>
        <MusicPlayer/>
    </div>
  )
}

export default Playlist