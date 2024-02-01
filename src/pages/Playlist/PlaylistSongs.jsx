import styles from './Playlist.module.scss'
import Button from '../../component/UI/Button/Button'
import plus from '../../assets/plus.svg'
import shuffle from '../../assets/shuffle.svg'
import orangePlay from '../../assets/orangePlay.svg'
import search from '../../assets/search.svg'
import Navigation from '../../component/compound/Navigation/Navigation'
import { Input } from '../../component/UI/input/Input'
import Sidebar from '../../component/compound/Sidebar/Sidebar'
import PlaylistDataDisplay from './PlaylistDataDisplay'
const PlaylistSongs = () => {
  return (
    <div>

            <div className={styles.pageWrapper}>
            <Sidebar/>
            <div>
            <Navigation/>
            <div className={styles.contentWrapper}>
                <section className={styles.PlaylistNav}>
                    <div className={styles.PlaylistCTA}>
                        <Button
                        label={<p style={{display:'flex', gap:'8px'}}><img src={plus}/>Add Songs</p>}
                        style={{background:'#EF6B16', border:'1px solid #EF6B16'}}
                        />
                        <Button
                        label={<p style={{display:'flex', gap:'8px'}}><img src={orangePlay}/>Play</p>}
                        style={{background:'none', border:'none'}}
                        />
                        <Button
                        label={<p style={{display:'flex', gap:'8px'}}><img src={shuffle}/>Shuffle</p>}
                        style={{background:'none', border:'none'}}
                        />
                    </div>
                    <div style={{color:'white'}} className={styles.search}>
                        <img src={search}/>
                        <div style={{ flex:1}}>
                            <Input
                            placeholder='Search by song, artist or genre'
                            style={{background:'transparent', border:'none', flex:1, color:'white'}}
                            />
                        </div>
                    </div>
                </section>
                <div className={styles.sectionWrapper}>
                    <PlaylistDataDisplay/>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default PlaylistSongs