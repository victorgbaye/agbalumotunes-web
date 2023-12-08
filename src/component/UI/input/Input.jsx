import PropTypes from 'prop-types';
import styles from './Input.module.scss'
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

