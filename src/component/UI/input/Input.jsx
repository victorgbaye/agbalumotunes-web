import PropTypes from 'prop-types';
import styles from './Input.module.scss'
import { useState } from 'react';
export const Input = ({ type, placeholder, value, onChange, style, name }) => {

  return (
    <div className={styles.Input}>
        {/* <label>{label}</label> */}
        <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.DefaultInputStyles}
        style={style}
        name={name}
    />
    </div>
  )
}
Input.propTypes = {
    // label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    style: PropTypes.object, 
  };


  export const SelectInput = ({ label, options, onChange }) => {
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleSelectChange = (event) => {
      const value = event.target.value;
      setSelectedOption(value);
      onChange(value);
    };
  
    return (
      <div className={styles.SelectInputContainer}>
        {label && <label>{label}</label>}
        <select className={styles.selectInput} value={selectedOption} onChange={handleSelectChange}>
          <option value="" disabled>Select an option</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    );
  };
  
  SelectInput.propTypes = {
    label: PropTypes.string, // Label prop
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      })
    ).isRequired,
    onChange: PropTypes.func.isRequired
  };
  