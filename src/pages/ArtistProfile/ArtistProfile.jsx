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
import Modal from "../../component/compound/Modal/Modal"
import { useState } from "react"
import { Input } from "../../component/UI/input/Input"
// import DataDisplay from "../../component/compound/DataDisplay/DataDisplay"
// import { MusicData } from "../../utils/MusicData"

const ArtistProfile = () => {
  // const columns = ['Song & Album', 'Duration', 'Price', ''];
  const [tipModal, setTipModal] = useState(false)

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
                     style={{background:'transparent', border: '1px solid #EF6B16'}} onClick={()=>setTipModal(true)}></Button>
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
    {
            tipModal &&
            <Modal title='Tip' prompt='Input amount and Select a payment Method to give a tip to your favorite artist.' closeModal={()=>setTipModal(false)} buttonLabel='Tip' confirmColor='#EF6B16'>
              <main className={styles.tipModalContainer}>
                <Input placeholder='e.g $5.99'></Input>
                <div className={styles.tipCard}>
                  <p>**** **** **** 1627</p>
                </div>
                <hr></hr>
                <Button label="Add new card" style={{width:'100%', color:'#EF6B16', background:'rgba(255, 255, 255, 0.00)'}}/>
              </main>
            </Modal>
        }
    </div>
  )
}

export default ArtistProfile