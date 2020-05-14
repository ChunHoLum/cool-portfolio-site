import React from 'react';
import './hero.scss';
import bg from '../../assets/img/background-wordcloud.png'; // with import
import { Link } from "react-scroll";

class Hero extends React.Component {
  constructor() {
    super();
    this.bg_img = React.createRef();

  }
  mouserMoveParllax = (e) => {
    // const bg_img = document.querySelector('background__img');
    const x = - e.clientX / 30;
    const y = - e.clientY / 30;
    // console.log({ x, y })
    this.bg_img.current.style.left = `${x}px`;
    this.bg_img.current.style.top = `${y}px`;
  }

  render() {

    return (
      <div className="hero__container" onMouseMove={this.mouserMoveParllax}>
        <div className="background__container">
          <img className="background__img" ref={this.bg_img} src={bg} alt="word cloud"></img>

          <div className="text__wrapper">

            <div className="hero__name" id="name">
              <span className="hero__name__letters">L</span>
              <span className="hero__name__letters">u</span>
              <span className="hero__name__letters">m</span>
              <span className="hero__name__letters"> </span>
              <span className="hero__name__letters">C</span>
              <span className="hero__name__letters">h</span>
              <span className="hero__name__letters">u</span>
              <span className="hero__name__letters">n</span>
              <span className="hero__name__letters"> </span>
              <span className="hero__name__letters">H</span>
              <span className="hero__name__letters">o</span>
              {/* Lum Chun Ho */}
            </div>
            <div className="hero__description">

              <span className="hero__name__letters">F</span>
              <span className="hero__name__letters">u</span>
              <span className="hero__name__letters">l</span>
              <span className="hero__name__letters">l</span>
              <span className="hero__name__letters"> </span>
              <span className="hero__name__letters">S</span>
              <span className="hero__name__letters">t</span>
              <span className="hero__name__letters">a</span>
              <span className="hero__name__letters">c</span>
              <span className="hero__name__letters">k</span>
              <span className="hero__name__letters"> </span>
              <span className="hero__name__letters">W</span>
              <span className="hero__name__letters">e</span>
              <span className="hero__name__letters">b</span>
              <span className="hero__name__letters"> </span>
              <span className="hero__name__letters">D</span>
              <span className="hero__name__letters">e</span>
              <span className="hero__name__letters">v</span>
              <span className="hero__name__letters">e</span>
              <span className="hero__name__letters">l</span>
              <span className="hero__name__letters">o</span>
              <span className="hero__name__letters">p</span>
              <span className="hero__name__letters">e</span>
              <span className="hero__name__letters">r</span>
              {/* <span className="hero__name__letters">💻</span> */}

              {/* Full Stack Web Developer */}
              <span role="img" aria-label="Labtop Emoji">💻</span>
            </div>
            <div className="hero__buttons">
              <Link
                to="contact-section"
                offset={-70}
                duration={300}
              >
                <button id="hero__buttons__contact">Contact</button>
              </Link>
              <Link
                to="projects-section"
                offset={-70}
                duration={300}
              >
                <button id="hero__buttons__projects" >Projects</button>

              </Link>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Hero;
