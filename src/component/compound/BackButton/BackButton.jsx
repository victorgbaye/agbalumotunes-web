// import React from 'react'
import Back from '../../../assets/Back.svg'
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1);
    };
  return (
    <div onClick={goBack} style={{display:'flex', alignItems: 'center', gap: '8px', cursor:'pointer'}}>
        <img src={Back}/>
        <p>Back</p>
    </div>
  )
}

export default BackButton