import { Link } from 'react-router-dom'
import Button from '../../UI/Button/Button'
import styles from './Navigation.module.scss'
import search from '../../../assets/search.svg'
import user from '../../../assets/user.svg'

import { Input } from '../../UI/input/Input'
import { useSelector } from 'react-redux';
const Navigation = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    let pathname = window.location.pathname;
    pathname = pathname.startsWith('/') ? pathname.slice(1) : pathname;
    if (pathname) {
        pathname = pathname.charAt(0).toUpperCase() + pathname.slice(1);
      }

  return (
    <div className={styles.NavigationWrapper}>
        <section  className={styles.NavigationPageTitle}>
            <h4>{window.location.pathname == '/' ? 'Music' : pathname}</h4>
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
            {
                isLoggedIn ?
                <Link to="/account">
                    <img src={user} style={{cursor:'pointer'}}/>
                </Link>
                :
                <div className={styles.NavigationCTA}>

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
                </div>
            }
        </section>
    </div>
  )
}

export default Navigation