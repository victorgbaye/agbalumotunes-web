// import React from 'react'

import Navigation from "../../component/compound/Navigation/Navigation"
import Sidebar from "../../component/compound/Sidebar/Sidebar"
// import { AlbumCard } from "../../component/compound/AlbumCard/Cards"
import styles from './Comment.module.scss'
import burna from '../../assets/burna.svg'
import tip from '../../assets/tip.svg'
import listens from '../../assets/listens.svg'
import Avatar from '../../assets/Avatar.svg'
import comments from '../../assets/comments.svg'
import Button from "../../component/UI/Button/Button"
import Modal from "../../component/compound/Modal/Modal"
import { useState } from "react"
import { Input } from "../../component/UI/input/Input"
import BackButton from "../../component/compound/BackButton/BackButton"

const Comment = () => {
    const [buyTrackModal, setBuyTrackModal] = useState(false)
  return (
    <div>
      <div className={styles.pageWrapper}>
        <Sidebar/>
        <div> 
            <Navigation/>
            <div className={styles.contentWrapper}>
                <BackButton/>
                <section className={styles.ArtistHeader}>
                  <div >
                    <img src={burna}/>
                  </div>
                  <div className={styles.ArtistDetails}>
                    <h5>I Told Them</h5>
                    <p>Burna Boy</p>
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
                    <Button label={<span style={{display:'flex', alignItems:'center', gap:'10px'}}><img src={tip}/><p>Buy Track</p></span>}
                     style={{background:'transparent', border: '1px solid #EF6B16'}} onClick={()=>setBuyTrackModal(true)}></Button>
                  </div>
                </section>
                <div className={styles.commentContainer}>
                    <div style={{width:'600px'}}>
                        <Input placeholder='Share your thoughts' style={{border:'1px solid #131A43', background:'#050717', '::placeholder': { color: 'rgba(204, 204, 204, 0.57)' }, marginBottom:'20px' }}/>
                        <div className={styles.commentComponent}>
                            <img src={Avatar} style={{width:'44px'}}/>
                            <h6>John Doe</h6>
                            <p>“I told them I’m a genius” is succinct and grand as an opening salvo,
                                and Burna Boy is nothing if not grand. This is the lyric that introduces I Told Them…,
                                the Nigerian superstar’s fifth album,
                                and a callback to a comment he made in June, when he perform</p>
                                <span>3 days ago</span>
                        </div>
                        <div className={styles.commentComponent}>
                            <img src={Avatar} style={{width:'44px'}}/>
                            <h6>John Doe</h6>
                            <p>“I told them I’m a genius” is succinct and grand as an opening salvo,
                                and Burna Boy is nothing if not grand. This is the lyric that introduces I Told Them…,
                                the Nigerian superstar’s fifth album,
                                and a callback to a comment he made in June, when he perform</p>
                                <span>3 days ago</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    {
            buyTrackModal &&
            <Modal title='Tip' prompt='Input amount and Select a payment Method to give a tip to your favorite artist.' closeModal={()=>setBuyTrackModal(false)} buttonLabel='Tip' confirmColor='#EF6B16'>
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

export default Comment