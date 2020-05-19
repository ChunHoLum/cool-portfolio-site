import React from 'react';
import { Modal } from 'antd';
import Slider from "react-slick";

import mernstack from '../../../assets/img/project1/mernstack.png';
import img1 from '../../../assets/img/project1/project1_1.PNG';
import img2 from '../../../assets/img/project1/project1_2.PNG';
import img3 from '../../../assets/img/project1/project1_3.PNG';
import img4 from '../../../assets/img/project1/project1_4.PNG';
import img5 from '../../../assets/img/project1/project1_5.gif';

const CapstoneProjectModal = ({ visible, modalSize, modalCancel }) => {

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
        <h2>Capstone Project<span role="img" aria-label="woooho">🎉</span>- Digital Identity Management Framework</h2>
        <Slider {...sliderSettings}>
          <div className="sider">
            <p>
              A digital identity management framework using blockchain technology to solve current digital identity issues.
              The system using <code>MERN</code> stack, which include MongoDB, Express, React + Redux and NodeJS
            </p>
            <ul>
              <li>Blockchain as a services - allow user identity data upload their blockchain securely</li>
              <li>Protected API for third-party access - easy manage and trace record</li>
            </ul>
            <img alt="mernstack" src={mernstack} width="250" height="265"></img>
          </div>
          <div className="sider">
            <p>
              Allow third-party access with user authorization - demo restuarnat application accessing user identity
            </p>
            <img alt="third-party-access" src={img5}></img>
          </div>
          <div className="sider">
            <p>
              Allow user registration / login
            </p>
            <img alt="registration" src={img2} style={{ display: 'inline-block' }}></img>
            <img alt="login" src={img3} style={{ display: 'inline-block' }}></img>
          </div>
          <div className="sider">
            <p>
              Allow user trace the identity data record in blockchain
            </p>
            <img alt="record" src={img4} width="870" height="325" ></img>
          </div>
          <div className="sider">
            <p>
              The system interface are build with ReactJS and Materialize CSS
            </p>
            <img className="resize-img" alt="dashboard" src={img1} ></img>
          </div>

        </Slider>
      </div>
    </Modal>
  );
}

export default CapstoneProjectModal;