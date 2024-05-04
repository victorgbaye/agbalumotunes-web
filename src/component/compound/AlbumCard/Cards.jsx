import Button from '../../UI/Button/Button'
import styles from './AlbumCard.module.scss'
import FTPlay from '../../../assets/FTPlay.svg'
import Cash from '../../../assets/Cash.svg'
import ellipsis2 from '../../../assets/elipsis2.svg'
import PropTypes from 'prop-types';

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

export const PlaylistCard = ({title, songCount}) =>{
  return (
    <main className={styles.AlbumCardWrapper}>
        <section className={styles.AlbumCardImage}>

        </section>
        <section className={styles.PlaylistInfo}>
          <div className={styles.AlbumInfo}>
              <h4>{title}</h4>
              <p>{songCount} Songs</p>
          </div>
          <img src={ellipsis2}/>
        </section>
    </main>
  )
}
PlaylistCard.propTypes = {
  title: PropTypes.string.isRequired,   // Indicates that `title` is a required string
  songCount: PropTypes.number.isRequired // Indicates that `songCount` is a required number
};