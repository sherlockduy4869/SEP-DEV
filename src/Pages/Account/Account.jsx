import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./AccountStyle.css";
import user from "../../Assets/Images/user.webp";

import background_account from "../../Assets/Images/background_account.png";

const Account = () => {
  return (
    <>
      <Header background = {background_account} height = "300px" title="ACCOUNT"/>
      <div className="account_area">
        <div className="account_setting_area">
          <h3>ACCOUNT SETTING</h3>
          <div className="account_setting_image">
            <img src={user} alt="" />
          </div>
          <div className="account_setting_input_area">
            <div className="account_setting_input">
              <label>Username</label>
              <input type="text" />
            </div>
            <div className="account_setting_input">
              <label>Password</label>
              <input type="text" />
            </div>
            <div className="account_setting_input">
              <label>Email</label>
              <input type="text" />
            </div>
            <div className="account_setting_button">
              <button className="btn btn-primary">SUBMIT</button>
            </div>
          </div>
        </div>
        <div className="bookmark_area">
          <div className="bookmark_title">
            <h3>BOOKMARK</h3>
          </div>
          <div className="bookmark_block_area">
            <div className="bookmark_block"></div>
            <div className="bookmark_block"></div>
            <div className="bookmark_block"></div>
            <div className="bookmark_block"></div>
            <div className="bookmark_block"></div>
            <div className="bookmark_block"></div>
            <div className="bookmark_block"></div>
            <div className="bookmark_block"></div>
          </div>
        </div>
        <div className="art_request_form">
          <div className="art_request_title">
            <h3>ART COMMISION REQUEST FORM</h3>
          </div>
          <div className="art_request_input_area">
            <div className="art_request_input">
              <label>Username</label>
              <input type="text" />
            </div>
            <div className="art_request_input">
              <label>Email</label>
              <input type="text" />
            </div>
            <div className="art_request_input">
              <label>Contact Number</label>
              <input type="text" />
            </div>
            <div className="art_request_input">
              <label>The Artwork Is For</label>
              <input type="text" />
            </div>
            <div className="art_request_input">
              <label>I require the work is finished by</label>
              <input type="text" />
            </div>
            <div className="art_request_input">
              <label>I will pay</label>
              <input type="text" />
            </div>
            <div className="art_request_input">
              <label>Message</label>
              <input type="text" />
            </div>
            <div className="art_request_button">
              <button className="btn btn-primary">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
