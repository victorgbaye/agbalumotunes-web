import { AlbumCard, ArtistCard, FeaturedTrack } from '../../component/compound/AlbumCard/Cards'
import Announcement from '../../component/compound/Announcement/Announcement'
import Navigation from '../../component/compound/Navigation/Navigation'
import Sidebar from '../../component/compound/Sidebar/Sidebar'
import styles from './Discover.module.scss'

const Discover = () => {
  return (
    <div className={styles.PageWrapper}>
        <Sidebar/>
        <div className={styles.contentWrapper}>
            <Navigation/>
            <Announcement/>
            <section className={styles.SectionWrapper}>
                <h4>Featured Albums</h4>
                <div className={styles.FeaturedAlbumsWrapper}>
                    <AlbumCard/>
                    <AlbumCard/>
                    <AlbumCard/>
                    <AlbumCard/>
                    {/* <AlbumCard/> */}
                    {/* <AlbumCard/>
                    <AlbumCard/> */}
                    
                </div>
            </section>
            <section className={styles.SectionWrapper}>
                <h4>Weekly top 15</h4>
                <div className={styles.WeeklyTopWrapper}>
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
                    <FeaturedTrack/>
                    <FeaturedTrack/>
                    <FeaturedTrack/>                
                </div>
            </section>
            <section className={styles.SectionWrapper}>
            <h4>Featured Artist</h4>
                <div className={styles.FeaturedArtistWrapper}>
                    <ArtistCard/>
                    <ArtistCard/>
                    <ArtistCard/>
                    <ArtistCard/>
                    <ArtistCard/>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Discover