import React from 'react';
import lax from 'lax.js';
import './hero.scss';
import bg from '../../assets/img/background-wordcloud.png'; // with import
class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.bg_img = React.createRef();
    this.text_wrapper = React.createRef();

  }
  componentDidMount() {
    document.addEventListener('scroll', function (x) {
      lax.update(window.scrollY)
    }, false)

    lax.update(window.scrollY)
    lax.addElement(this.text_wrapper.current)
    lax.addElement(this.bg_img.current)
  }

  componentWillUnmount() {
    lax.removeElement(this.text_wrapper.current)
    lax.removeElement(this.bg_img.current)
  }
  mouserMoveParllax = (e) => {
    const x = e.clientX / 60;
    const y = - e.clientY / 60;
    this.bg_img.current.style.top = `${y}px`;
    this.bg_img.current.style.right = `${x}px`;

  }

  render() {

    return (
      <div className="hero__container" onMouseMove={this.mouserMoveParllax} >

        <div className="background__container">
          <img className="background__img" ref={this.bg_img} src={bg} alt="word cloud" ></img>

          <div className="text__wrapper" ref={this.text_wrapper} data-lax-opacity="0 1, 100 1, 200 0, 300 0" data-lax-translate-y="0 0, 400 -400">

            <div className="hero__name" id="name" >
              <span className="hero__name__letters" >L</span>
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
            <div className="hero__description" ref={this.text_wrapper2}>

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
              {/* <Link
                to="contact-section"
                offset={-70}
                duration={300}
              >
                <button id="hero__buttons__contact">Contact</button>
              </Link> */}
              {/* <Link
                to="projects-section"
                offset={-70}
                duration={300}
              >
                <button id="hero__buttons__projects" >Projects</button>

              </Link> */}
            </div>
          </div>
        </div>

      </div >
    )
  }
}

export default Hero;
