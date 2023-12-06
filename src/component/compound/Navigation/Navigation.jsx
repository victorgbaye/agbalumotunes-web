import Button from '../../UI/Button/Button'
import styles from './Navigation.module.scss'

const Navigation = () => {
  return (
    <div className={styles.NavigationWrapper}>
        <section  className={styles.NavigationPageTitle}>
            <h4>Discover</h4>
        </section>
        <section></section>
        <section className={styles.NavigationCTA}>
            <Button
            label='Sign Up'
            style={{
                color:'#FFF', 
                background:'#0F142B', 
                border:'1px solid #0F142B'
                }}
            />
            <Button
            label='Log In'
            style={{
                color:'#FFF', 
                background:'#EF6B16', 
                border:'1px solid #EF6B16'
                }}
            />
        </section>
    </div>
  )
}

export default Navigation