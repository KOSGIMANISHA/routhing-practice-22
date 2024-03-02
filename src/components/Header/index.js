// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="logo-title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="wave-image"
        alt="wave"
      />
      <h1 className="wave-head">Wave</h1>
    </div>
    <ul className="nav-menu-list">
      <li>
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="route-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="route-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
