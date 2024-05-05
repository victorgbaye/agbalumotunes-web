import styles from './Library.module.scss'
import { MusicData } from '../../utils/MusicData';
import Button from '../../component/UI/Button/Button';
import comment from '../../assets/comment.svg'
import elipsisHorizontal from '../../assets/elipsisHorizontal.svg'
import Modal from '../../component/compound/Modal/Modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LibraryDataDisplay = () => {
    const columns = ['Song & Album', 'Duration', ''];
    const [buyTtrackModal, setBuyTrackModal] = useState(false)

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
                            <Button label='Buy track' style={{border:'1px solid #053334', background:'none'}} onClick={()=>setBuyTrackModal(true)}></Button>
                            <img src={comment} style={{cursor:'pointer'}}/>
                            <img src={elipsisHorizontal} style={{cursor:'pointer'}}/>
                        </div>
                    </div>
                )
            })
        }
    </div>
    {
    buyTtrackModal &&
    <Modal title='Buy Track' prompt='Select a payment Method to add this to your library and enjoy timeless music' closeModal={()=>setBuyTrackModal(false)} buttonLabel='Pay 3.99' confirmColor='#EF6B16'>
        <Link to="/account">
            <Button label='Add new card' style={{ background:'#000003', color:'#EF6B16', width:'100%'}} onClick={()=>setBuyTrackModal(true)}></Button>
        </Link>
    </Modal>
    }
</div>
  )
}

export default LibraryDataDisplay