import { Link } from "react-router-dom"
import Avatar from "@mui/material/Avatar"
import "../styles/Header.css"

type HeaderProps = {
  loggedIn: boolean
}

const Header = ({ loggedIn }: HeaderProps) => {
  return (
    <div className="nav">
      {/* <Link to="/" className="nav-item">
        HOME
      </Link>
      <Link to="/about" className="nav-item">
        ABOUT
      </Link>
      <Link to="/contact" className="nav-item">
        CONTACT
      </Link> */}
      {loggedIn && (
        <Link to="/dashboard" className="nav-item">
          <Avatar></Avatar>
        </Link>
      )}
    </div>
  )
}

export default Header

