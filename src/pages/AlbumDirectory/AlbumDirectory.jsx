import Navigation from "../../component/compound/Navigation/Navigation"
import Sidebar from "../../component/compound/Sidebar/Sidebar"
import Announcement from '../../component/compound/Announcement/Announcement'
import { AlbumCard } from "../../component/compound/AlbumCard/Cards"
import styles from './AlbumDirectory.module.scss'

const AlbumDirectory = () => {
  return (
    <div className={styles.pageWrapper}>
        <Sidebar/>
        <div>
            <Navigation/>
            <div className={styles.contentWrapper}>
                <Announcement/>
                <div className={styles.sectionWrapper}>
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