import React from 'react';
import styled, { keyframes } from 'styled-components';

function Github({left, fallDelay, rotateAngle}) {
    const handleGithubClick = () => {
        window.open('https://github.com/okxooxoo', '_blank');
    };

    return (
        <CloverLayout onClick={handleGithubClick} left={left} fallDelay={fallDelay} rotateAngle={rotateAngle}>
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
    animation: ${fall} 1.5s ease-in forwards;
    animation-delay: ${(props) => props.fallDelay}s;
    transform: rotate(${(props) => props.rotateAngle}deg);
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.2);
    }
`;

const CloverImg = styled.div`
    background-image: url(github.png);
    background-size: cover;
    width: 50px;
    height: 50px;
`;

export default Github;