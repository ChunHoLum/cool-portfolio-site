import React from 'react';
import './about.scss';

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
        <div className="about__header">
          <div className="about__header__title">Who am I ?</div>
        </div>

        <div className="about__content">
          <p>Hi, I am Lum Chun Ho. A fresh graduate student from The Hong Kong Polytechnic University.</p>
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
            Check out more from my <a href="https://noobbucket.s3.us-east-2.amazonaws.com/cv_lumchunho.pdf" target="_blank" rel="noopener noreferrer">Resume</a>.
          </p>
        </div>

      </div>
    );
  }


}

export default About;
