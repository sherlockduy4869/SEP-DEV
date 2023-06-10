import "./HeaderStyle.css";
import logo from '../../Assets/Images/logo.png';
import user from '../../Assets/Images/user.webp';

const Header = () => {
  return (
    <div className="header_area">
      <div className="header_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header_menu">
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>WORK</li>
          <li>REQUEST</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="header_icon_user">
        <img src={user} alt="user_icon" />
      </div>
      <div className="page_name">
        <h1>ABOUT US</h1>
      </div>
    </div>
  );
};

export default Header;
