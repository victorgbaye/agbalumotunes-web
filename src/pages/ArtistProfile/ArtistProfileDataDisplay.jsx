import { MusicData } from '../../utils/MusicData';
import styles from './ArtistProfile.module.scss'

const ArtistProfileDataDisplay = () => {
      const columns = ['Song & Album', 'Duration', 'Price', 'Listeners', ''];
  return (
    <div>
        <div className={styles.header}>
        {columns.map((column)=><p key={column}>{column}</p>)}
        </div>
        <div className={styles.main}>
            {
                MusicData.map((data)=>{
                    return(
                        <div key={data.price} className={styles.dataRow}>
                            <div>
                                <p>{data.song}</p>
                                <p>{data.album}</p>
                            </div>
                            <div><p>{data.duration}</p></div>
                            <div><p>{data.price}</p></div>
                            <div><p>{data.duration}</p></div>
                            <div></div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ArtistProfileDataDisplay