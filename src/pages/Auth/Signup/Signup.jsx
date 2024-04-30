import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './Signup.module.scss';
import { Input, SelectInput } from '../../../component/UI/input/Input';
import Button from '../../../component/UI/Button/Button';

const API_URL = 'https://agbalumotunes-server.onrender.com/api/v1/auth/register'; // API endpoint

function Step1({ onNext, onUserInfoChange }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNext = () => {
    if (!email || !password) {
      alert("Both email and password are required.");
      return;
    }
    onUserInfoChange({ email, password });
    onNext();
  };

  return (
    <div className={styles.AuthWrapper}>
      <div className={styles.AuthFlexContainer}>
        <section className={styles.AuthPageHeader}>
          <h5>Sign up</h5>
        </section>
        <Input placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className={styles.LoginCTA}>
          <Button label='Next' style={{ width: '100%', background: '#EF6B16', color: '#FFF' }} onClick={handleNext} />
          <hr />
        </div>
        <section className={styles.AuthFooter}>
          <h6>Already have an account? <Link to='/login'>Login</Link></h6>
          <p>Terms of service</p>
        </section>
      </div>
    </div>
  );
}

Step1.propTypes = {
  onNext: PropTypes.func.isRequired,
  onUserInfoChange: PropTypes.func.isRequired,
};

function Step2({ onPrevious, onFinish, onUserInfoChange }) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [dateofbirth, setDateOfBirth] = useState({ day: '', month: '', year: '' });
  const [gender, setGender] = useState('');

  const handleDateOfBirthChange = (part, value) => {
    const newDateOfBirth = { ...dateofbirth, [part]: value };
    setDateOfBirth(newDateOfBirth);
    if (newDateOfBirth.day && newDateOfBirth.month && newDateOfBirth.year) {
      onUserInfoChange({ dateofbirth: `${newDateOfBirth.year}-${newDateOfBirth.month.padStart(2, '0')}-${newDateOfBirth.day.padStart(2, '0')}` });
    }
  };

  // const finishRegistration = () => {
  //   onUserInfoChange({
  //     firstname,
  //     lastname,
  //     username,
  //     gender
  //   });
  //   onFinish();
  // };

  const handleGenderChange = (newGender) => {
    setGender(newGender);
    onUserInfoChange({ gender: newGender }); // Now correctly updating the parent's state
  };

  return (
    <div className={styles.AuthWrapper}>
      <div className={styles.AuthFlexContainer}>
        <section className={styles.AuthPageHeader}>
          <h5>Sign up</h5>
        </section>
        <Input placeholder='First name' type='text' value={firstname}
        onChange={(e) => {
            setFirstname(e.target.value);
            onUserInfoChange({ firstname: e.target.value });
          }} />
        <Input placeholder='Last name' type='text' value={lastname} onChange={(e) => {
            setLastname(e.target.value);
            onUserInfoChange({ lastname: e.target.value });
          }} />
        <Input placeholder='Username' type='text' value={username} 
        onChange={(e) => {
          setUsername(e.target.value);
          onUserInfoChange({ username: e.target.value });
        }}
        />
        <p>Date of Birth</p>
        <div className={styles.dob}>
          <Input placeholder='DD' value={dateofbirth.day} onChange={(e) => handleDateOfBirthChange('day', e.target.value)} />
          <Input placeholder='MM' value={dateofbirth.month} onChange={(e) => handleDateOfBirthChange('month', e.target.value)} />
          <Input placeholder='YYYY' value={dateofbirth.year} onChange={(e) => handleDateOfBirthChange('year', e.target.value)} />
        </div>
        <SelectInput label='Gender' options={[{ value: 'male', label: 'male' }, { value: 'female', label: 'female' }]} value={gender} onChange={(newGender) => handleGenderChange(newGender)} />
        <div className={styles.LoginCTA}>
          <Button label='Previous' style={{ width: '92px', background: '#0F142B', color: '#FFF' }} onClick={onPrevious} />
          <Button label='Finish' style={{ width: '92px', background: '#EF6B16', color: '#FFF' }} onClick={onFinish} />
        </div>
        <hr />
        <section className={styles.AuthFooter}>
          <h6>Already have an account? <Link to='/login'>Login</Link></h6>
          <p>Terms of service</p>
        </section>
      </div>
    </div>
  );
}

Step2.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
  onUserInfoChange: PropTypes.func.isRequired,
};

function Signup() {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    username: '',
    dateofbirth: '',
    gender: '',
  });

  const handleUserInfoChange = (newInfo) => {
    setUserInfo(prevInfo => ({ ...prevInfo, ...newInfo }));
  };
  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const navigate = useNavigate();


  const finishSignup = async () => {
    try {
      const response = await axios.post(API_URL, userInfo);
      console.log('Signup Success:', response.data);
      navigate('/'); // Redirect to the homepage or dashboard after successful signup
    } catch (error) {
      console.error('Signup Failed:', error);
      alert('Error during signup: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div>
      {step === 1 && <Step1 onNext={nextStep} onUserInfoChange={handleUserInfoChange} />}
      {step === 2 && <Step2 onPrevious={previousStep} onFinish={finishSignup} onUserInfoChange={handleUserInfoChange} />}
    </div>
  );
}

export default Signup;
