import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./HomePageStyle.css";

import background_home from "../../Assets/Images/background_home.png";

import art_1 from "../../Assets/Images/art_1.png";
import art_2 from "../../Assets/Images/art_2.jpeg";
import art_3 from "../../Assets/Images/art_3.png";
import art_4 from "../../Assets/Images/art_4.jpeg";
import art_5 from "../../Assets/Images/art_5.jpeg";
import art_6 from "../../Assets/Images/art_6.jpeg";
import art_7 from "../../Assets/Images/art_7.jpeg";
import art_8 from "../../Assets/Images/art_8.jpeg";
import art_9 from "../../Assets/Images/art_9.jpeg";

const Homepage = () => {
  return (
    <>
      <Header background = {background_home} height = "500px" title="SIMPLE ART BEAUTIFUL ART"/>
      <div className="homepage_area">
        <div className="title_area">
          <h2>RECENT PROJECT</h2>
        </div>
        <div className="art_gallery_area">
          <div className="art_row">
            <img src={art_1} alt="" />
            <img src={art_2} alt="" />
            <img src={art_3} alt="" />
          </div>
          <div className="art_row">
            <img src={art_4} alt="" />
            <img src={art_5} alt="" />
            <img src={art_6} alt="" />
          </div>
          <div className="art_row">
            <img src={art_7} alt="" />
            <img src={art_8} alt="" />
            <img src={art_9} alt="" />
          </div>
          <div className="art_row">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="bussiness_area">
        <div className="bussiness_left">
          <h2>COOPERATING</h2>
          <h2>BUSINESS</h2>
        </div>
        <div className="bussiness_right">
          <div className="bussiness_right_row">
            <div className="bussiness_button">
              <span>BUSSINESS 1</span>
            </div>
            <div className="bussiness_button">
              <span>BUSSINESS 3</span>
            </div>
          </div>
          <div className="bussiness_right_row">
            <div className="bussiness_button">
              <span>BUSSINESS 2</span>
            </div>
            <div className="bussiness_button">
              <span>BUSSINESS 4</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
