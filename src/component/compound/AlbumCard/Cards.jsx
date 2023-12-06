import Button from '../../UI/Button/Button'
import styles from './AlbumCard.module.scss'
import FTPlay from '../../../assets/FTPlay.svg'
import Cash from '../../../assets/Cash.svg'
export const AlbumCard = () => {
  return (
    <main className={styles.AlbumCardWrapper}>
        <section className={styles.AlbumCardImage}>

        </section>
        <section className={styles.AlbumInfo}>
            <h4>
            I Told Them
            </h4>
            <p>
            Burna Boy
            </p>
        </section>
        <section className={styles.AlbumPriceAndBuy}>
            <h6>£42.99</h6>
            <Button
            label='Buy now'
            style={{border:'1px solid #0F142B', background: '#0F142B'}}
            />
        </section>
    </main>
  )
}

export const ArtistCard = () =>{
  return (
    <main className={styles.AlbumCardWrapper}>
        <section className={styles.AlbumCardImage}>

        </section>
        <section className={styles.AlbumInfo}>
            <h4>
            Burna Boy
            </h4>
            <p>
           Artist
            </p>
        </section>
    </main>
  )
}

export const FeaturedTrack = () =>{
  return(
    <main className={styles.FeaturedTrackWrapper}>
      <section className={styles.FeaturedTrackIndex}>
        <p>01</p>
      </section>
      <section className={styles.FeaturedTrackImage}>

      </section>
      <section className={styles.FeaturedTrackDetails}>
        <h2>All my life</h2>
        <p>Burna boy, Lil Durk & J cole</p>
      </section>
      <section className={styles.FeaturedTrackCTA}>
        <img src={Cash}/>
        <img src={FTPlay}/>
      </section>
    </main>
  )
}