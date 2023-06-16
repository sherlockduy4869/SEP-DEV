import "./HeaderStyle.css";
import logo from '../../Assets/Images/logo.png';
import user from '../../Assets/Images/user.webp';
import { Link } from 'react-router-dom';

const Header = (props) => {

  return (
    <div style={{backgroundImage: `url(${props.background})`, height: props.height}} className="header_area">
      <div className="header_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header_menu">
        <ul>
          <li><Link to={"/"}>HOME</Link></li>
          <li><Link to={"/about-us"}>ABOUT</Link></li>
          <li><Link to={"/search-page"}>SEARCH</Link></li>
          <li><Link to={"/account"}>ACCOUNT</Link></li>
        </ul>
      </div>
      <div className="header_icon_user">
        <img src={user} alt="user_icon" />
      </div>
      <div className="page_name">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default Header;
