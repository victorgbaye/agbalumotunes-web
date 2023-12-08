import styles from './Playlist.module.scss'
import { PlaylistCard } from '../../component/compound/AlbumCard/Cards'
import Button from '../../component/UI/Button/Button'
import plus from '../../assets/plus.svg'
import shuffle from '../../assets/shuffle.svg'
import orangePlay from '../../assets/orangePlay.svg'
import search from '../../assets/search.svg'
import Navigation from '../../component/compound/Navigation/Navigation'
import { Input } from '../../component/UI/input/Input'
const Playlist = () => {
  return (
    <div style={{paddingTop:'80px'}}>
        <Navigation/>
        <section className={styles.PlaylistNav}>
            <div className={styles.PlaylistCTA}>
                <Button
                label={<p style={{display:'flex', gap:'8px'}}><img src={plus}/>Create playlist</p>}
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
        <section className={styles.PlaylistCardContainer}>
            <PlaylistCard/>
        </section>
    </div>
  )
}

export default Playlist