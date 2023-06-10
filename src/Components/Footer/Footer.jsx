import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import './FooterStyle.css';

const Footer = () => {
  return (
    <div className='footer_area'>
      <div className="footer_contact_infor">
        <h2>CONTACT ME</h2>
      </div>
      <div className="footer_icon">
        <BsFacebook size={50} color='3A589C'/>
        <BsInstagram size={50} color='FE0A4A'/>
        <BsTwitter size={50} color='1DB7EB'/>
      </div>
    </div>
  );
};

export default Footer;
