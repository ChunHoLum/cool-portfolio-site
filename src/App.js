import React, { lazy, Suspense } from 'react';
import lax from 'lax.js';

import './App.css';
// import Navbar from './components/navbar/navbar';
// import Messagebar from './components/messagebar/messagebar';
// import Hero from './components/hero-section/hero.section';
// import Skills from './components/skills-section/skills.section';
// import Projects from './components/projects-section/projects.section';
// import About from './components/about-section/about.section';
// import Contact from './components/contact-section/contact.section';
// import Footer from './components/footer/footer';
// import SettingButton from './components/setting-button/setting-button';

const Navbar = lazy(() => import('./components/navbar/navbar'));
const Messagebar = lazy(() => import('./components/messagebar/messagebar'));
const Hero = lazy(() => import('./components/hero-section/hero.section'));
const Skills = lazy(() => import('./components/skills-section/skills.section'));
const Projects = lazy(() => import('./components/projects-section/projects.section'));
const About = lazy(() => import('./components/about-section/about.section'));
// const Contact = lazy(() => import('./components/contact-section/contact.section'));
const Footer = lazy(() => import('./components/footer/footer'));
const SettingButton = lazy(() => import('./components/setting-button/setting-button'));

const renderLoader = () => <p></p>;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      themePreference: 'light'
    }
    this.appRef = React.createRef();
    lax.setup();
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ visible: true, }) }, 500)
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // dark mode
      console.log("dark mode detected😗")
      this.appRef.current.classList.replace('light', 'dark');
      this.setState({ themePreference: 'dark' })
    }
    window.addEventListener('scroll', this.hide);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.hide);
  }
  hide = () => { this.setState({ visible: false, }); };

  render() {
    return (
      <div ref={this.appRef} className="App light" onScroll={this.onScroll}>

        <Suspense fallback={renderLoader()}>
          <Navbar />
        </Suspense>
        <Suspense fallback={renderLoader()}>
          <Messagebar />
        </Suspense>
        <section className="hero-section" id="hero-section">
          <Suspense fallback={renderLoader()}>
            <Hero />
          </Suspense>
        </section>
        <section className="skills-section" id="skills-section">
          <Suspense fallback={renderLoader()}>
            <Skills />
          </Suspense>
        </section>
        <section className="projects-section" id="projects-section" >
          <Suspense fallback={renderLoader()}>
            <Projects />
          </Suspense>
        </section>
        <section className="about-section" id="about-section">
          <Suspense fallback={renderLoader()}>
            <About />
          </Suspense>
        </section>
        <Suspense fallback={renderLoader()}>
          <Footer />
        </Suspense>
        <Suspense fallback={renderLoader()}>
          <SettingButton visible={this.state.visible} hide={this.hide} appRef={this.appRef} themePreference={this.state.themePreference} />
        </Suspense>

      </div>
    );
  }

}

export default App;
