import { Link } from 'react-router-dom'
import Button from '../../../component/UI/Button/Button'
import { Input } from '../../../component/UI/input/Input'
import styles from './Login.module.scss'
const Login = () => {
  return (
    <div className={styles.AuthWrapper}>
        <div className={styles.AuthFlexContainer}>
            <section className={styles.AuthPageHeader}>
                <h5>Log in</h5>
            </section>
            <Input
            placeholder='Email'
            type='email'
            />
            <Input
            placeholder='Password'
            type='password'
            />
            <div className={styles.LoginCTA}>
                <Button
                label='Log In'
                style={{width:'100%', background:'#EF6B16', color:'#FFF'}}
                />
                <Button
                label='Forgot password'
                style={{width:'100%', background:'rgba(255, 255, 255, 0.00)', color:'#CCC'}}
                />
                 <hr></hr>
            </div>
            <section className={styles.AuthFooter}>
            <h6>Dont have an account? <Link to='/signup'><span>Sign Up</span></Link></h6>
            <p>Terms of service</p>
            </section>
        </div>

    </div>
  )
}

export default Login