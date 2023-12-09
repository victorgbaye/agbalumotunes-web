import { Link } from 'react-router-dom'
import Button from '../../UI/Button/Button'
import styles from './Navigation.module.scss'
import search from '../../../assets/search.svg'
import { Input } from '../../UI/input/Input'
const Navigation = () => {
  return (
    <div className={styles.NavigationWrapper}>
        <section  className={styles.NavigationPageTitle}>
            <h4>Discover</h4>
        </section>
        <section>
        <div style={{color:'white'}} className={styles.search}>
                <img src={search}/>
                <div style={{ flex:1}}>
                    <Input
                    placeholder='Search by song, artist or genre'
                    style={{background:'transparent', border:'none', flex:1, color:'white', letterSpacing:'0.8px'}}
                    />
                </div>
            </div>
        </section>
        <section className={styles.NavigationCTA}>
            <Link to='/signup'>
                <Button
                label='Sign Up'
                style={{
                    color:'#FFF', 
                    background:'#0F142B', 
                    border:'1px solid #0F142B'
                    }}
                />
            </Link>
            <Link to='/login'>
                <Button
                label='Log In'
                style={{
                    color:'#FFF', 
                    background:'#EF6B16', 
                    border:'1px solid #EF6B16'
                    }}
                />
            </Link>
        </section>
    </div>
  )
}

export default Navigation