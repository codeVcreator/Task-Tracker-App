import {Link} from 'react-router-dom' //helps in not refreshing page as in a href

const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; 2024</p>
        <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer