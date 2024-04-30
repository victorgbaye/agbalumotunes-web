import { Link, useNavigate } from 'react-router-dom'
import Button from '../../../component/UI/Button/Button'
import { Input } from '../../../component/UI/input/Input'
import styles from './Login.module.scss'
import { useState } from 'react'
import api from '../../../utils/api'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for redirecting to other routes

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setError(''); // Clear previous errors
    console.log(error);

    try {
      // Perform the API call to your login endpoint
      const response = await api.post('/auth/login', { email, password });
      // Assume the server responds with the token and perhaps user info
      console.log('Login successful:', response.data);

      // Save the token to localStorage or another place suitable for your app
      localStorage.setItem('authToken', response.data.token);

      // Redirect to the home page or dashboard, as appropriate
      navigate('/'); // Update this path as necessary
    } catch (err) {
      // Handle errors if the request was made and server responded with a status code
      // that falls out of the range of 2xx
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(err.response.data.message);
      } else if (err.request) {
        // The request was made but no response was received
        setError('No response from server');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('Error setting up login request');
      }
    }
  };
  return (
    <div className={styles.AuthWrapper}>
        <div className={styles.AuthFlexContainer}>
            <section className={styles.AuthPageHeader}>
                <h5>Log in</h5>
            </section>
            <Input
            placeholder='Email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <Input
            placeholder='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.LoginCTA}>
                <Button
                label='Log In'
                style={{width:'100%', background:'#EF6B16', color:'#FFF'}}
                onClick={handleLogin}
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