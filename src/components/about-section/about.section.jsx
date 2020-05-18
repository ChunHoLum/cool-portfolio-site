import React from 'react';
import './about.scss';
import { Space } from 'antd';
class About extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
      <div className="about__container">
        <div className="about__wrapper">
          <div className="about__header">
            <div className="about__header__title">Who am I ?</div>
          </div>

          <div className="about__content">
            My name is Lum Chun Ho, a Hong Kong based full stack web developer, graduate of Information Security.
          <div className="about__content__list">
              <div className="about__content__list_left">
                <p>Things I love when I code...</p>
                <ul>
                  <li>Performance</li>
                  <li>Readable Code</li>
                  <li>User Experience</li>
                  <li>Any Cool Stuffs</li>
                </ul>
              </div>

            </div>
            <p>
              Check out more from my <a href="https://noobbucket.s3.us-east-2.amazonaws.com/lumchunho.pdf" target="_blank" rel="noopener noreferrer">Resume</a>.
            </p>
            <p> Or </p>
          </div>
        </div>

        <div className="contact__wrapper">
          <div className="contact__header">
            <div className="contact__header__title">Contact Me</div>
          </div>

          <div className="contact__content">
            <Space>
              <span className="contact__methods__item"><a href="mailto:chunholum@outlook.com">Email</a></span>
            |
            <span className="contact__methods__item"><a href="https://t.me/Gfdkiw" target="_blank" rel="noopener noreferrer">Telegram</a></span>
            |
            <span className="contact__methods__item"><a href="https://github.com/ChunHoLum" target="_blank" rel="noopener noreferrer">GitHub</a></span>

            </Space>

          </div>




        </div>
      </div>
    );
  }


}

export default About;
