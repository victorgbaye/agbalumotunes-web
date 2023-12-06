import styles from './Playlist.module.scss'
import { PlaylistCard } from '../../component/compound/AlbumCard/Cards'
import Button from '../../component/UI/Button/Button'
import plus from '../../assets/plus.svg'
import shuffle from '../../assets/shuffle.svg'
import orangePlay from '../../assets/orangePlay.svg'
import Navigation from '../../component/compound/Navigation/Navigation'
const Playlist = () => {
  return (
    <div>
        <Navigation/>
        <section>
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
        </section>
        <PlaylistCard/>
    </div>
  )
}

export default Playlist