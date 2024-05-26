import React from 'react';
import styled, { keyframes } from 'styled-components';

function Clover({left, fallDelay, rotateAngle}) {
    return (
        <CloverLayout left={left} fallDelay={fallDelay} rotateAngle={rotateAngle}>
            <CloverImg />
        </CloverLayout>
    );
}

const fall = keyframes`
  from {
    top: calc(0vh - 100px);
  }
  to {
    top: calc(100vh - 60px);
  }
`;

const CloverLayout = styled.div`
    position: fixed;
    z-index: 100;
    top: calc(0vh - 100px);
    left: ${(props) => props.left}%;
    animation: ${fall} 2s ease-in forwards;
    animation-delay: ${(props) => props.fallDelay}s;
    transform: rotate(${(props) => props.rotateAngle}deg);
`;

const CloverImg = styled.div`
    background-image: url(clover.png);
    background-size: cover;
    width: 50px;
    height: 50px;
`;

export default Clover;