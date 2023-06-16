import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import background_about from '../../Assets/Images/background_about.png'

import "./AboutStyle.css";
const AboutUs = () => {
  return (
    <>
      <Header background = {background_about} height = "500px" title = "ABOUT US"/>
      <div className="about_area">
        <div className="name_input_area">
          <div className="input_name">
            <label>Email</label>
            <input type="text" />
          </div>
          <div className="input_name">
            <label>First Name</label>
            <input type="text" />
          </div>
          <div className="input_name">
            <label>Last Name</label>
            <input type="text" />
          </div>
        </div>
        <div className="subject_input_area">
          <div className="input_subject">
            <label>Subject</label>
            <input type="text" />
          </div>
        </div>
        <div className="message_input_area">
          <div className="message_input">
            <label>Subject</label>
            <textarea cols="30" rows="10"></textarea>
          </div>
        </div>
        <div className="message_input_area">
          <div className="message_input">
            <button className="btn btn-primary">SUBMIT</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
