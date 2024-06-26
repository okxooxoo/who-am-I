import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

function Planet() {
    const [keyword, setKeyword] = useState('');
    const orbit = useRef(null);
    const github = useRef(null);
    const velog = useRef(null);
    const blog = useRef(null);
    const centerText = useRef(null);

    const handlePlanetEnter = (keyword, ref) => {
        setKeyword(keyword);
        ref.current.style.transform = 'scale(1.1)';
        github.current.style.animationPlayState = 'paused';
        velog.current.style.animationPlayState = 'paused';
        blog.current.style.animationPlayState = 'paused';
        orbit.current.style.animationPlayState = 'paused';
        centerText.current.style.animationPlayState = 'paused';
    };

    const handlePlanetLeave = (ref) => {
        setKeyword('');
        ref.current.style.transform = 'scale(1)';
        github.current.style.animationPlayState = 'running';
        velog.current.style.animationPlayState = 'running';
        blog.current.style.animationPlayState = 'running';
        orbit.current.style.animationPlayState = 'running';
        centerText.current.style.animationPlayState = 'running';
    };

    const handlePlanetClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <PlanetLayout>
            <CenterPlanet />
            <Orbit ref={orbit}>
                <CenterText ref={centerText}>
                    {keyword}
                </CenterText>
                <FirstPlanet
                    ref={github}
                    onMouseEnter={() => handlePlanetEnter('지속적인 성장', github)}
                    onMouseLeave={() => handlePlanetLeave(github)}
                    onClick={() => handlePlanetClick('https://github.com/okxooxoo')}
                />
                <SecondPlanet
                    ref={velog}
                    onMouseEnter={() => handlePlanetEnter('기록하는 습관', velog)}
                    onMouseLeave={() => handlePlanetLeave(velog)}
                    onClick={() => handlePlanetClick('https://velog.io/@okxooxoo')}
                />
                <ThirdPlanet
                    ref={blog}
                    onMouseEnter={() => handlePlanetEnter('회고와 성찰', blog)}
                    onMouseLeave={() => handlePlanetLeave(blog)}
                    onClick={() => handlePlanetClick('https://blog.naver.com/okxooxoo')}
                />
            </Orbit>
        </PlanetLayout>
    );
}

// 공전
const revolving = keyframes`
    0% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(0deg);
    }
`;
// 자전
const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const PlanetLayout = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    overflow-y: hidden;
`;

const Orbit = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    animation: ${revolving} 20s linear infinite;
`;

const CenterPlanet = styled.div`
    position: fixed;
    width: 240px;
    height: 240px;
    background-color: white;
    border-radius: 200px;
    border: 1px solid black;
`;

const BasePlanet = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
    border-radius: 200px;
    border: 1px solid black;
    /* transition: transform 0.5s ease; */
    animation: ${rotation} 20s linear infinite;
`;

const FirstPlanet = styled(BasePlanet)`
    left: calc(100px + 260px * cos(120deg));
    top: calc(100px + 260px * sin(120deg));
    background-image: url(${process.env.PUBLIC_URL}/github.png);
    background-size: 70%;
`;

const SecondPlanet = styled(BasePlanet)`
    left: calc(100px + 260px * cos(240deg));
    top: calc(100px + 260px * sin(240deg));
    background-image: url(${process.env.PUBLIC_URL}/velog.png);
    background-size: 50%;
`;

const ThirdPlanet = styled(BasePlanet)`
    left: calc(100px + 260px * cos(360deg));
    top: calc(100px + 260px * sin(360deg));
    background-image: url(${process.env.PUBLIC_URL}/blog.png);
    background-size: 60%;
`;

const CenterText = styled.div`
    font-size: 34px;
    animation: ${rotation} 20s linear infinite;
`;

export default Planet;