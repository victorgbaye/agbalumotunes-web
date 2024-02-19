// import React from 'react'
import Button from '../../UI/Button/Button'
import styles from './Modal.module.scss'
import PropTypes from 'prop-types';
import x from '../../../assets/x.svg'
const Modal = ({prompt, title, closeModal, confirmColor, buttonLabel, onConfirm, children}) => {
  return (
    <div className={styles.ModalOverlay}>
    <div className={`${styles.Modal}`}>
        <header className={styles.ModalHeader}>
            <h6>{title}</h6>
            <img src={x} alt="X Icon"  onClick={closeModal}/>
        </header>
        <div className={styles.ModalBody}>
          <p>{prompt}</p>
          
        </div>
        <div className={styles.ModalBody}>
        {children}
        </div>
        {

        <div className={styles.ModalFooter}>
          <Button 
          onClick={onConfirm}
          label={buttonLabel}
          style={{padding:'12px 20px', width:'auto', background: confirmColor, border:'none', outline:'none', color:`#FFF`}}
          />
          <Button
          label='Cancel'
          style={{padding:'12px 20px', width:'auto', background: '#0F142B', border:'none', outline:'none', color:``}}
          onClick={closeModal}
          />
        </div>
        }
    </div>
</div>
)
}
Modal.propTypes = {
deleteColor: PropTypes.string,
closeModal: PropTypes.func.isRequired,
title: PropTypes.string.isRequired,
prompt: PropTypes.string.isRequired,
confirmColor: PropTypes.string.isRequired,
buttonLabel: PropTypes.string.isRequired,
onConfirm: PropTypes.func,
children: PropTypes.node,


}

export default Modal