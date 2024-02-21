import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Signup.module.scss'
import { Input, SelectInput } from '../../../component/UI/input/Input';
import Button from '../../../component/UI/Button/Button';
import { Link } from 'react-router-dom';

function Step1({ onNext }) {

  return (
    <div className={styles.AuthWrapper}>
      <div className={styles.AuthFlexContainer}>
        <section className={styles.AuthPageHeader}>
          <h5>Sign up</h5>
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
          label='Next'
          style={{width:'100%', background:'#EF6B16', color:'#3E0E44'}}
          onClick={onNext}
          />
          <hr></hr>
        </div>
        <section className={styles.AuthFooter}>
            <h6>Already have an account? <Link to='/login'><span>Login</span></Link></h6>
            <p>Terms of service</p>
            </section>
      </div>
    </div>
  );
}
Step1.propTypes = {
  onNext: PropTypes.func.isRequired,
};
function Step2({ onPrevious, onFinish }) {
  const Genderoptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
  ];
  return (
      <div className={styles.AuthWrapper}>
      <div className={styles.AuthFlexContainer}>
        <section className={styles.AuthPageHeader}>
          <h5>Sign up</h5>
        </section>
        <Input
          placeholder='Username'
          type='email'
        />
        <Input
          placeholder='Email'
          type='email'
        />
        <p>Date of birth</p>
        <div className={styles.dob}>
          <Input placeholder='DD'/>
          <Input placeholder='MM'/>
          <Input placeholder='YYYY'/>
        </div>
       <SelectInput
       label='Gender'
       options={Genderoptions}
       />
        <div className={styles.LoginCTA}>
          <Button
          label='Previous'
          style={{width:'92px', background:'#0F142B', color:'#FFF'}}
          onClick={onPrevious}
          />
           <Button
          label='Finish'
          style={{width:'92px', background:'#EF6B16', color:'#FFF'}}
          onClick={onFinish}
          />
        </div>
          <hr></hr>
        <section className={styles.AuthFooter}>
            <h6>Already have an account? <Link to='/login'><span>Login</span></Link></h6>
            <p>Terms of service</p>
            </section>
      </div>
    </div>
  );
}
Step2.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
};

function Signup() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const finishSignup = () => {
    // Implement your finish signup logic here
    alert('Signup completed!');
  };

  return (
    <div>
      {step === 1 && <Step1 onNext={nextStep} />}
      {step === 2 && <Step2 onPrevious={previousStep} onFinish={finishSignup} />}
    </div>
  );
}

export default Signup;

