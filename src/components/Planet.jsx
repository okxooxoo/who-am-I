import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

function Planet() {
    const [keyword, setKeyword] = useState('');
    const github = useRef(null);
    const velog = useRef(null);
    const blog = useRef(null);

    const handlePlanetEnter = (keyword) => {
        setKeyword(keyword);
    };

    const handlePlanetLeave = () => {
        setKeyword('');
    };

    const handlePlanetClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <PlanetLayout>
            <CenterPlanet />
            <Orbit>
                <CenterText>
                    {keyword}
                </CenterText>
                <FirstPlanet
                    ref={github}
                    onMouseEnter={() => handlePlanetEnter('성장')}
                    onMouseLeave={handlePlanetLeave}
                    onClick={() => handlePlanetClick('https://github.com/okxooxoo')}
                />
                <SecondPlanet
                    ref={velog}
                    onMouseEnter={() => handlePlanetEnter('기록')}
                    onMouseLeave={handlePlanetLeave}
                    onClick={() => handlePlanetClick('https://velog.io/@okxooxoo')}
                />
                <ThirdPlanet
                    ref={blog}
                    onMouseEnter={() => handlePlanetEnter('성찰')}
                    onMouseLeave={handlePlanetLeave}
                    onClick={() => handlePlanetClick('https://blog.naver.com/okxooxoo')}
                />
            </Orbit>
        </PlanetLayout>
    );
}

// 공전
const revolve = keyframes`
    0% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(0deg);
    }
`;
// 자전
const rotate = keyframes`
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
    animation: ${revolve} 20s linear infinite;
`;

const CenterPlanet = styled.div`
    position: fixed;
    width: 280px;
    height: 280px;
    background-color: white;
    border-radius: 200px;
    border: 1px solid black;
`;

const FirstPlanet = styled.div`
    position: absolute;
    top: -180px;
    width: 120px;
    height: 120px;
    background-image: url(github.png);
    background-size: 70%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
    border-radius: 200px;
    border: 1px solid black;
    animation: ${rotate} 20s linear infinite;
`;

const SecondPlanet = styled.div`
    position: absolute;
    left: 280px;
    top: 300px;
    width: 120px;
    height: 120px;
    background-image: url(velog.png);
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
    border-radius: 200px;
    border: 1px solid black;
    animation: ${rotate} 20s linear infinite;
`;

const ThirdPlanet = styled.div`
    position: absolute;
    left: -180px;
    top: 140px;
    width: 120px;
    height: 120px;
    background-image: url(blog.png);
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
    border-radius: 200px;
    border: 1px solid black;
    animation: ${rotate} 20s linear infinite;
`;

const CenterText = styled.div`
    font-size: 36px;
    animation: ${rotate} 20s linear infinite;
`;

export default Planet;