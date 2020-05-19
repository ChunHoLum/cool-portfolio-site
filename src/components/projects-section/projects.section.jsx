import React from 'react';
import lax from 'lax.js';
import ProjectCard from './projectCard.component';
import CapstoneProjectModal from './modals/capstoneProjectModal';
import LearningPortalModal from './modals/learningPortalModal';
import { Timeline, Button } from 'antd';

import './projects.scss';
class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
      tooltipPlacement: "left",
      capstoneProjectModalVisible: false,
      learningPortalModalVisible: false,
      modalSize: "55vw"
    };
    this.project_header = React.createRef()
    this.project_card = React.createRef()
    this.projectList = React.createRef()
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions); document.addEventListener('scroll', function (x) {
      lax.update(window.scrollY)
    }, false)

    lax.update(window.scrollY)
    lax.addElement(this.project_header.current)
    lax.addElement(this.project_card.current)

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    lax.removeElement(this.project_header.current)
    lax.removeElement(this.project_card.current)
  }
  updateWindowDimensions = () => {
    if (window.innerWidth < 1600) {
      this.setState({ modalSize: "70vw" });
    } else {
      this.setState({ modalSize: "55vw" });
    }
    if (window.innerWidth < 680) {
      this.setState({ tooltipPlacement: "top" });
    } else {
      this.setState({ tooltipPlacement: "left" });
    }
  }
  onClickProject = (id) => {
    switch (id) {
      case 1:
        this.setState({ capstoneProjectModalVisible: true });
        break;
      case 2:
        this.setState({ learningPortalModalVisible: true });
        break;
      default:
        console.log('no match project id found')
        break;
    }
  }
  modalCancel = () => {
    this.setState({
      capstoneProjectModalVisible: false,
      learningPortalModalVisible: false
    })
  }
  render() {
    const { tooltipPlacement, capstoneProjectModalVisible, learningPortalModalVisible, modalSize } = this.state;

    return (
      <div className="projects__container">
        <div className="projects__header" ref={this.project_header} data-lax-blur="0 5, 400 5,790 5,1000 0">
          <div className="projects__header__title">What did I make ?</div>
          <div className="projects__header__description">
            not much yet...
            <span role="img" aria-label="Thinking Emoji" >🤔</span>
            Gimme some time
          </div>
        </div>
        <div className="projects__content" ref={this.project_card} data-lax-blur="0 5, 400 5,790 5,1000 0">
          <div className="project__list" ref={this.projectList}>
            <Timeline>
              <ProjectCard
                title='This portfoilo site !😎'
                description='A rapid build responsive portfoilo site using react'
                source={<a href="https://github.com/ChunHoLum/cool-portfolio-site" target="_blank" rel="noopener noreferrer"> GitHub Available</a>}
                tags={[
                  { name: 'React.js', color: '#5ED4FD' },
                  { name: 'Javascript', color: '#F7A614' },
                  { name: 'HTML5', color: '#ED5F26' },
                  { name: 'CSS3', color: '#249FDE' },
                  { name: 'ANT Design', color: '#0170FE' },
                ]}
                date='2020-05 to Current'
                tooltipPlacement={tooltipPlacement}
                tooltipTitle='🛠 Constantly Updating'
              />
              <ProjectCard
                title='nodejs-backend-boilerplate'
                description='A custom node.js boilerplate with register & login, featured on JWT authentication, role base access control, winston logging, mongoDB and simple use 🙂'
                source={<a href="https://github.com/ChunHoLum/nodejs-backend-boilerplate" target="_blank" rel="noopener noreferrer"> GitHub Available</a>}
                tags={[
                  { name: 'Javascript', color: '#F7A614' },
                  { name: 'Node.js', color: '#73AA62' },
                  { name: 'Express.js', color: '#c3c3c3', fontColor: 'black' },
                ]}
                date='2020-05 to Current'
                tooltipPlacement={tooltipPlacement}
                tooltipTitle='🛠 Constantly Updating'
              />
              <ProjectCard
                title='Spectra Education Portal'
                description='A role-based learning portal allow students and teachers interact and perform different on-demand tasks'
                source={<Button type="link" onClick={() => this.onClickProject(2)} style={{ padding: '0' }}>Details</Button>}
                tags={[
                  { name: 'React.js', color: '#5ED4F4' },
                  { name: 'Javascript', color: '#F7A614' },
                  { name: 'Node.js', color: '#73AA62' },
                  { name: 'Express.js', color: '#c3c3c3', fontColor: 'black' },
                ]}
                date='2020-02 to Current'
                tooltipPlacement={tooltipPlacement}
                tooltipTitle='🛠 Constantly Updating'
              />
              <ProjectCard
                title='Capstone Project🎉- Digital Identity Management Framework'
                description='A digital identity management framework using blockchain technology'
                source={<Button type="link" onClick={() => this.onClickProject(1)} style={{ padding: '0' }}>Details</Button>}
                tags={[
                  { name: 'Ethereum', color: '#7682C5' },
                  { name: 'Web3.js', color: '#EF6830' },
                  { name: 'Solidity', color: '#1B1B1B' },
                  { name: 'React.js', color: '#5ED4F4' },
                  { name: 'Javascript', color: '#F7A614' },
                  { name: 'Node.js', color: '#73AA62' },
                  { name: 'Express.js', color: '#c3c3c3', fontColor: 'black' },
                ]}
                date='2019-08 to 2020-05'
                tooltipPlacement={tooltipPlacement}
                tooltipTitle='👍 Done'
                tooltipColor='green'
              />
              <Timeline.Item color='green'> 4.54 billion years ago - Hello World <span role="img" aria-label="earth" >🌍</span></Timeline.Item>
            </Timeline>
          </div>
        </div>
        <CapstoneProjectModal visible={capstoneProjectModalVisible} modalSize={modalSize} modalCancel={this.modalCancel} />
        <LearningPortalModal visible={learningPortalModalVisible} modalSize={modalSize} modalCancel={this.modalCancel} />
      </div>
    );
  }


}

export default Projects;
