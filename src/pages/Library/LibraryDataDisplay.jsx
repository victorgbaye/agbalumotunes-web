import styles from './Library.module.scss'
import { MusicData } from '../../utils/MusicData';

const LibraryDataDisplay = () => {
    const columns = ['Song & Album', 'Duration', ''];
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
                        <div></div>
                    </div>
                )
            })
        }
    </div>
</div>
  )
}

export default LibraryDataDisplay