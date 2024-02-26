import styles from './Playlist.module.scss'
import { PlaylistCard } from '../../component/compound/AlbumCard/Cards'
import Button from '../../component/UI/Button/Button'
import plus from '../../assets/plus.svg'
import search from '../../assets/search.svg'
import Navigation from '../../component/compound/Navigation/Navigation'
import { Input } from '../../component/UI/input/Input'
import Sidebar from '../../component/compound/Sidebar/Sidebar'
import Modal from '../../component/compound/Modal/Modal'
import { useState } from 'react'
import MusicPlayer from '../../component/compound/MusicPlayer/MusicPlayer'
const Playlist = () => {
    const [isModal, setIsModal] = useState(false)

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
                                <Modal title="Create playlist" confirmColor='#EF6B16' buttonLabel='Save' closeModal={()=>setIsModal(false)}>
                                    <Input placeholder='Type playlist name here e.g Gym'/>
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
                        <PlaylistCard/>
                    </section>
                </div>
            </div>
        </div>
        <MusicPlayer/>
    </div>
  )
}

export default Playlist