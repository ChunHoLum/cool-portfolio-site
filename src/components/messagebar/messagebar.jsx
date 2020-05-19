import React, { useState, useLayoutEffect } from 'react';
import { Tooltip } from 'antd';

import './messagebar.scss';

const Messagebar = () => {
  const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
  const [width] = useWindowSize();

  return (

    <div className="messagebar">
      {width > 880 ?
        <>
          <span><b>Who Am I ?</b></span>
          <span>&emsp;——&emsp; </span>
          <span>A passionate, progressive guy and a enthusiast of Web Development.</span>
          &emsp;<a href="https://noobbucket.s3.us-east-2.amazonaws.com/lumchunho_web_bc.pdf" target="_blank" rel="noopener noreferrer"> Download full resume !</a>
        </>
        :
        <>
          {width > 680 ?
            <Tooltip placement="bottom" title="Click to download full resume !">
              <a href="https://noobbucket.s3.us-east-2.amazonaws.com/lumchunho_web_bc.pdf" target="_blank" rel="noopener noreferrer">

                <span><b>Who Am I ?</b></span>
                <span>&emsp;——&emsp; </span>
                <span>A passionate, progressive guy and a enthusiast of Web Development.</span>
              </a>
            </Tooltip>
            :
            <Tooltip placement="bottom" title="Click to download full resume !">
              <a href="https://noobbucket.s3.us-east-2.amazonaws.com/lumchunho_web_bc.pdf" target="_blank" rel="noopener noreferrer">
                <span role="img" aria-label="hehe"> Hover me ! 😊 </span>

              </a>
            </Tooltip>
          }

        </>
      }

    </div>
  );
}

export default Messagebar;
