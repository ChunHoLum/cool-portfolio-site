import React from 'react';
import { Modal } from 'antd';
import Slider from "react-slick";
import mernstack from "../../../assets/img/project1/mernstack.png"
import img1 from "../../../assets/img/project2/project2_1.png"
import img2 from "../../../assets/img/project2/project2_2.png"
import img3 from "../../../assets/img/project2/project2_3.png"

const LearningPortalModal = ({ visible, modalSize, modalCancel }) => {

  const sliderSettings = {
    adaptiveHeight: true,
    infinite: false,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Modal
      visible={visible}
      onCancel={modalCancel}
      centered
      footer={null}
      closable={false}
      width={modalSize}
      maskStyle={{ zIndex: '1000', backgroundColor: 'rgba(0, 0, 0, 0.55 )' }}
    >
      <div className="slider_container">
        <h2>Spectra Education Portal</h2>
        <Slider {...sliderSettings}>
          <div className="sider">
            <p>
              A role-based learning portal allow students and teachers interact and perform different on-demand tasks.
              The system using <code>MERN</code> stack, which include MongoDB, Express, React and NodeJS.
              Interface used ANT Design UI framework
            </p>
            <ul>
              <li>Admin dashboard provided</li>
              <li>Complex database structure and query</li>
              <li>Role base authetication with identity management access</li>
              <li>Event scheduler</li>
              <li></li>
            </ul>
            <img alt="mernstack" src={mernstack} width="250" height="265"></img>
          </div>
          <div className="sider">
            <p>
              Admin dashboard to manage users
            </p>
            <img className="resize-img" alt="mernstack" src={img1} ></img>
          </div>
          <div className="sider">
            <p>
              Advance searching features
            </p>
            <img className="resize-img" alt="mernstack" src={img2} ></img>
          </div>
          <div className="sider">
            <p>
              Event schedule management
            </p>
            <img className="resize-img" alt="mernstack" src={img3} ></img>
          </div>

        </Slider>
      </div>
    </Modal>
  );
}

export default LearningPortalModal;