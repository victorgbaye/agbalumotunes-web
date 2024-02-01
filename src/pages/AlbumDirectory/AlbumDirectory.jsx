import Navigation from "../../component/compound/Navigation/Navigation"
import Sidebar from "../../component/compound/Sidebar/Sidebar"
import { AlbumCard } from "../../component/compound/AlbumCard/Cards"
import styles from './AlbumDirectory.module.scss'
import AlbumDataDisplay from "./AlbumDataDisplay"
import Button from "../../component/UI/Button/Button"
import share from '../../assets/share.svg'
import shuffle from '../../assets/shuffle.svg'
import play from '../../assets/play.svg'


const AlbumDirectory = () => {
    // const columns = ['Song & Album', 'Duration', 'Price', ''];

  return (
    <div className={styles.pageWrapper}>
        <Sidebar/>
        <div>
            <Navigation/>
            <div className={styles.contentWrapper}>
            <section className={styles.PlaylistNav}>
                <div className={styles.PlaylistCTA}>
                    <Button
                    label={<p style={{display:'flex', gap:'8px'}}><img src={play}/>Play</p>}
                    style={{background:'#EF6B16', border:'1px solid #EF6B16'}}
                    />
                    <Button
                    label={<p style={{display:'flex', gap:'8px'}}><img src={shuffle}/>Shuffle</p>}
                    style={{background:'none', border:'none'}}
                    />
                    <Button
                    label={<p style={{display:'flex', gap:'8px'}}><img src={share}/>Share</p>}
                    style={{background:'none', border:'none'}}
                    />
                </div>
            </section>
               <div className={styles.sectionWrapper}>
                <AlbumDataDisplay/>

               </div>
                <div className={styles.sectionWrapper}>
                    {/* <DataDisplay columns={columns} data={MusicData}/> */}
                    <p>Related Albums</p>
                    <section className={styles.sectionContainer}>
                        <AlbumCard/>
                        <AlbumCard/>
                        <AlbumCard/>
                        <AlbumCard/>
                        <AlbumCard/>
                        <AlbumCard/>
                        <AlbumCard/>
                        <AlbumCard/>
                        <AlbumCard/>
                    </section>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AlbumDirectory