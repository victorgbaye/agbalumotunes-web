import Navigation from "../../component/compound/Navigation/Navigation"
import Sidebar from "../../component/compound/Sidebar/Sidebar"
import { AlbumCard } from "../../component/compound/AlbumCard/Cards"
import styles from './ArtistProfile.module.scss'
import burna from '../../assets/burna.svg'
import Button from "../../component/UI/Button/Button"
const ArtistProfile = () => {
  return (
    <div>
      <div className={styles.pageWrapper}>
        <Sidebar/>
        <div> 
            <Navigation/>
            <div className={styles.contentWrapper}>
                <section className={styles.ArtistHeader}>
                  <div >
                    <img src={burna}/>
                  </div>
                  <div className={styles.ArtistDetails}>
                    <h5>Burna Boy</h5>
                    <p>Artist</p>
                    <span></span>
                  </div>
                  <div>
                    <Button label="Tip me" style={{background:'transparent', border: '1px solid #EF6B16'}}></Button>
                  </div>
                </section>
                <div className={styles.sectionWrapper}>
                    <p>{`Artist's Discography`}</p>
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
    </div>
  )
}

export default ArtistProfile