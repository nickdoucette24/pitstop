import { Link } from "react-router-dom";
import Logo from "../../assets/logos/pitstop_logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img className="header-logo__main" src={Logo} />
      </div>
      <div className="header-wrapper">
        <div className="header-race">
          <h4 className="header-race__title">Las Vegas</h4>
          <h5 className="header-race__location">Nevada, USA</h5>
          <h5 className="header-race__date">Nov 29, 2024</h5>
        </div>
        <div className="header-buttons">
          <Link className="header-buttons__login">Log In</Link>
          <Link className="header-buttons__signup">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
