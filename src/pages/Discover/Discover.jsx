import Navigation from "../../component/compound/Navigation/Navigation"
import Sidebar from "../../component/compound/Sidebar/Sidebar"
import Announcement from '../../component/compound/Announcement/Announcement'
import { AlbumCard, ArtistCard, FeaturedTrack } from "../../component/compound/AlbumCard/Cards"
import styles from './Discover.module.scss'

const Discover = () => {
  return (
    <div className={styles.pageWrapper}>
        <Sidebar/>
        <div>
            <Navigation/>
            <div className={styles.contentWrapper}>
                <Announcement/>
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
                <section className={styles.FeaturedTrackContainer}>
                    <FeaturedTrack/>
                    <FeaturedTrack/>
                    <FeaturedTrack/>
                    <FeaturedTrack/>
                    <FeaturedTrack/>
                    <FeaturedTrack/>
                    <FeaturedTrack/>
                    <FeaturedTrack/>
                    <FeaturedTrack/>
                    <FeaturedTrack/>
                    <FeaturedTrack/>
                    <FeaturedTrack/>
                </section>
                <section className={styles.sectionContainer}>
                    <ArtistCard/>
                    <ArtistCard/>
                    <ArtistCard/>
                    <ArtistCard/>
                    <ArtistCard/>
                    <ArtistCard/>
                    <ArtistCard/>
                    <ArtistCard/>
                    <ArtistCard/>
                    <ArtistCard/>
                    <ArtistCard/>
                    <ArtistCard/>
                    <ArtistCard/>
                </section>
            </div>

        </div>
    </div>
  )
}

export default Discover