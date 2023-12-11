import { Link } from "react-router-dom"
import "../styles/Header.css"

const Header = () => {
  return (
    <div className="nav">
      <Link to="/" className="nav-item">
        HOME
      </Link>
      <Link to="/about" className="nav-item">
        ABOUT
      </Link>
      <Link to="/contact" className="nav-item">
        CONTACT
      </Link>
      <Link to="/sign-in" className="nav-item">
        SIGN IN
      </Link>
    </div>
  )
}

export default Header

