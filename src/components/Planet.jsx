import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

function Planet() {
    const [keyword, setKeyword] = useState('');
    const github = useRef(null);
    const velog = useRef(null);
    const blog = useRef(null);

    const handlePlanetEnter = (keyword, ref) => {
        setKeyword(keyword);
        ref.current.style.transform = 'scale(1.1)';
    };

    const handlePlanetLeave = (ref) => {
        setKeyword('');
        ref.current.style.transform = 'scale(1)';
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
    width: 280px;
    height: 280px;
    background-color: white;
    border-radius: 200px;
    border: 1px solid black;
`;

const BasePlanet = styled.div`
    position: absolute;
    width: 120px;
    height: 120px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
    border-radius: 200px;
    border: 1px solid black;
    /* transition: transform 0.5s ease; */
    animation: ${rotation} 20s linear infinite;
`;

const FirstPlanet = styled(BasePlanet)`
    left: calc(90px + 280px * cos(120deg));
    top: calc(90px + 280px * sin(120deg));
    background-image: url(github.png);
    background-size: 70%;
`;

const SecondPlanet = styled(BasePlanet)`
    left: calc(90px + 280px * cos(240deg));
    top: calc(90px + 280px * sin(240deg));
    background-image: url(velog.png);
    background-size: 50%;
`;

const ThirdPlanet = styled(BasePlanet)`
    left: calc(90px + 280px * cos(360deg));
    top: calc(90px + 280px * sin(360deg));
    background-image: url(blog.png);
    background-size: 60%;
`;

const CenterText = styled.div`
    font-size: 36px;
    animation: ${rotation} 20s linear infinite;
`;

export default Planet;