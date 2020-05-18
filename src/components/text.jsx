import React from 'react';
import lax from 'lax.js';
class Text extends React.Component {
  constructor(props) {
    super(props)
    lax.setup()

    document.addEventListener('scroll', function (x) {
      lax.update(window.scrollY)
    }, false)

    lax.update(window.scrollY)
  }

  componentDidMount() {
    this.el = ReactDOM.findDOMNode(this)
    lax.addElement(this.el)
  }

  componentWillUnmount() {
    lax.removeElement(this.el)
  }

  render() {
    return (
      <div
        className='bubble'
        data-lax-preset="leftToRight fadeInOut"
        style={{ fontSize: '100px' }}
      >
        asdasd
      </div>
    );
  }


}

export default Text;
