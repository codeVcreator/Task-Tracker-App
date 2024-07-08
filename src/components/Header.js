// Download ES7,React,Redux,GraphQL.React-Native snippets Extension

// import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

// rafce => enter for arrow function
const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()

    return (
    <header className='header'>
        <h1>{title}</h1>

        {/* If we are on main page then show button but if we are on about page then don't show it */}
        {location.pathname==='/' && <Button 
          color={showAdd ? 'Red' : 'Green'}   // showAdd will be True or False
          text={showAdd ? 'Close' : 'Add'}    // condition ? if true : Else
          onClick={onAdd} 
        />}   
        
        {/* <Button color='blue' text='Don`t Press' /> To use it multiple times */}
    </header>
  ) 
}

// // Initial inputs are called Props for Header
// Header.defaultProps = {
//     title: 'Task Tracker'
//   }

// // Inputs kis data-type me chahiye
// Header.propTypes = {
//     title: PropTypes.string.isRequired //don't show error if we have defaultProp
//   }

// CSS in JS
// const headingStyle = {
//     color : 'red',
//     backgroundColor : 'black'
// }

export default Header
 
