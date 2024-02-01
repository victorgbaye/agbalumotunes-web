import Navigation from "../../component/compound/Navigation/Navigation"
import Sidebar from "../../component/compound/Sidebar/Sidebar"
import { AlbumCard } from "../../component/compound/AlbumCard/Cards"
import styles from './ArtistProfile.module.scss'
import burna from '../../assets/burna.svg'
import tip from '../../assets/tip.svg'
import listens from '../../assets/listens.svg'
import comments from '../../assets/comments.svg'
import Button from "../../component/UI/Button/Button"
import ArtistProfileDataDisplay from "./ArtistProfileDataDisplay"
// import DataDisplay from "../../component/compound/DataDisplay/DataDisplay"
// import { MusicData } from "../../utils/MusicData"

const ArtistProfile = () => {
  // const columns = ['Song & Album', 'Duration', 'Price', ''];
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
                    <div className={styles.ArtistListensAndComments}>
                      <span>
                        <img src={listens}/>
                        <p>2.9 Bill Listeners</p>
                      </span>
                      <span>
                        <img src={comments}/>
                        <p>1 Bill Comments</p>
                      </span>
                    </div>
                  </div>
                  <div>
                    <Button label={<span style={{display:'flex', alignItems:'center', gap:'10px'}}><img src={tip}/><p>Tip me</p></span>}
                     style={{background:'transparent', border: '1px solid #EF6B16'}}></Button>
                  </div>
                </section>
                <div className={styles.sectionWrapper}>
                  <p>Top Tracks</p>
                {/* <DataDisplay columns={columns} data={MusicData}/> */}
                <ArtistProfileDataDisplay/>
                </div>
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