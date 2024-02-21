// import React from 'react'
import styles from './MusicPlayer.module.scss'
import imgprv from '../../../assets/imgprv.svg'
import comment from '../../../assets/comment.svg'
import volume from '../../../assets/volume.svg'
import shuffleW from '../../../assets/shuffleW.svg'
import prev from '../../../assets/prev.svg'
import play from '../../../assets/play.svg'
import next from '../../../assets/next.svg'
import repeatW from '../../../assets/repeatW.svg'
// import SeekBar from './SeekBar'
// import { useRef } from 'react'


const MusicPlayer = () => {
    // const audioPlayer = useRef(null);

  return (
    <div className={styles.MusicPlayerContainer}>
        <section className={styles.SongDetails}>
            <img src={imgprv}/>
            <div>
                <h6>All my life</h6>
                <p>Lil Durk ft Burna Boy & Jcole</p>
            </div>
        </section>
        <section className={styles.playerContainer}>
            <div className={styles.playerActions}>
                <img src={shuffleW}/>
                <div className={styles.playFlex}>
                    <img src={prev}/>
                    <img src={play}/>
                    <img src={next}/>
                </div>
                <img src={repeatW}/>
            </div>
            <div>
            {/* <audio ref={audioPlayer} src="your-audio-file.mp3"></audio> */}
            {/* <SeekBar audioPlayer={audioPlayer.current} /> */}

            </div>
        </section>
        <section className={styles.commentAndVolume}>
            <img src={comment}/>
            <img src={volume}/>
        </section>
    </div>
  )
}

export default MusicPlayer