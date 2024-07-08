// rafce + Enter

// import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
  //for styling use double curly brackets {{}}
  return <button onClick={onClick} style = {{backgroundColor:color}} className='btn'> 
    {text} 
  </button>
}

// // Initial inputs are called Props for Button
// Button.defaultProps = {
//   color: 'steelblue',
//   text: 'Button'
// }

// // Inputs kis data-type me chahiye
// Button.propTypes = {
//   color: PropTypes.string,
//   text: PropTypes.string,
//   onClick: PropTypes.func.isRequired  //it is a function and it is required
// }

export default Button
