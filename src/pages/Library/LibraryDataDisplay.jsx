import styles from './Library.module.scss'
import { MusicData } from '../../utils/MusicData';
import Button from '../../component/UI/Button/Button';
import comment from '../../assets/comment.svg'
import elipsisHorizontal from '../../assets/elipsisHorizontal.svg'

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
                        <div className={styles.trackActions}>
                            <Button label='Buy track' style={{border:'1px solid #053334', background:'none'}}></Button>
                            <img src={comment} style={{cursor:'pointer'}}/>
                            <img src={elipsisHorizontal} style={{cursor:'pointer'}}/>
                        </div>
                    </div>
                )
            })
        }
    </div>
</div>
  )
}

export default LibraryDataDisplay