import React from 'react';
import { Timeline, Card, Tag, Tooltip } from 'antd';
import './projects.scss';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
      tooltipPlacement: "left",
    };
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    if (window.innerWidth < 680) {
      this.setState({ tooltipPlacement: "top" });
    } else {
      this.setState({ tooltipPlacement: "left" });
    }
  }
  render() {
    const { tooltipPlacement } = this.state;
    return (
      <div className="projects__container">
        <div className="projects__header">
          <div className="projects__header__title">What did I make ?</div>
          <div className="projects__header__description">
            not much yet...
            <span role="img" aria-label="Thinking Emoji" >🤔</span>
            Gimme some time
          </div>
        </div>
        <div className="projects__content">
          <br></br>
          <Timeline >
            <Tooltip title="🛠 Constantly Updating" placement={tooltipPlacement}>
              <Timeline.Item>
                2020-05 to Current
              <Card size="small" title="This portfoilo site !😎" hoverable>
                  <p>
                    A rapid build responsive portfoilo site using react
                </p>
                  <p>
                    <a href="https://github.com/ChunHoLum/cool-portfolio-site" target="_blank" rel="noopener noreferrer"> GitHub Available</a>
                  </p>
                  <Tag color="#5ED4F4">React.js</Tag>
                  <Tag color="#F7A614">Javascript</Tag>
                  <Tag color="#ED5F26">HTML5</Tag>
                  <Tag color="#249FDE">CSS3</Tag>
                  <Tag color="#0170FE">ANT Design</Tag>
                </Card>
              </Timeline.Item>
            </Tooltip>

            <Tooltip title="🛠 Constantly Updating" placement={tooltipPlacement}>

              <Timeline.Item >
                2020-05 to Current
              <Card size="small" title="nodejs-backend-boilerplate" hoverable >
                  <p>
                    A custom node.js boilerplate with register & login, featured on JWT authentication, role base access control, winston logging, mongoDB and simple use <span role="img" aria-label="Smile Emoji">🙂</span>
                  </p>
                  <p>
                    <a href="https://github.com/ChunHoLum/nodejs-backend-boilerplate" target="_blank" rel="noopener noreferrer"> GitHub Available</a>
                  </p>
                  <Tag color="#F7A614">Javascript</Tag>
                  <Tag color="#73AA62">Node.js</Tag>
                  <Tag color="#c3c3c3" style={{ color: 'black' }}>Express.js</Tag>
                </Card>
              </Timeline.Item>
            </Tooltip>

            <Tooltip title="🛠 Constantly Updating" placement={tooltipPlacement}>
              <Timeline.Item>
                2020-02 to Current
              <Card size="small" title="Spectra Education Portal" hoverable>
                  <p>
                    A role-based learning portal allow students and teachers interact and perform different on-demand tasks
                  </p>
                  <p>
                    <a>Details coming soon</a>
                  </p>
                  <Tag color="#5ED4F4">React.js</Tag>
                  <Tag color="#F7A614">Javascript</Tag>
                  <Tag color="#73AA62">Node.js</Tag>
                  <Tag color="#c3c3c3" style={{ color: 'black' }}>Express.js</Tag>
                </Card>
              </Timeline.Item>
            </Tooltip>

            <Tooltip title="👍 Done" placement={tooltipPlacement}>
              <Timeline.Item color="green">
                2019-08 to 2020-05
              <Card size="small" title="Capston Project🎉- Digital Identity Management Framework" hoverable >
                  <p>
                    A digital identity management framework using blockchain technology.
                  </p>
                  <p>
                    <a>Video Demostration Coming Soon</a>
                  </p>
                  <div className="tags__container">
                    <Tag color="#7682C5">Ethereum</Tag>
                    <Tag color="#EF6830">Web3.js</Tag>
                    <Tag color="#1B1B1B">Solidity</Tag>
                    <Tag color="#5ED4F4">React.js</Tag>
                    <Tag color="#F7A614">Javascript</Tag>
                    <Tag color="#73AA62">Node.js</Tag>
                    <Tag color="#c3c3c3" style={{ color: 'black' }}>Express.js</Tag>
                  </div>
                </Card>
              </Timeline.Item>
            </Tooltip>
          </Timeline>
        </div>
      </div>
    );
  }


}

export default Projects;
