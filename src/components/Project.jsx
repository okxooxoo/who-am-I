import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

function Project() {
    const vinpong = useRef(null);
    const saekam = useRef(null);

    const handleProjectEnter = (ref) => {
        ref.current.style.transform = 'scale(1.1)';
    };

    const handleProjectLeave = (ref) => {
        ref.current.style.transform = 'scale(1)';
    };

    const handleProjectClick = (str) => {
        if (str === 'vinpong')
            window.location.href = `${process.env.PUBLIC_URL}#VinPongSection`;
        if (str === 'saekam')
            alert('준비 중입니다!');
    };

    return (
        <ProjectLayout>
            <VinPong
                ref={vinpong}
                onMouseEnter={() => handleProjectEnter(vinpong)}
                onMouseLeave={() => handleProjectLeave(vinpong)}
                onClick={() => handleProjectClick('vinpong')}
            />
            <Saekam
                ref={saekam}
                onMouseEnter={() => handleProjectEnter(saekam)}
                onMouseLeave={() => handleProjectLeave(saekam)}
                onClick={() => handleProjectClick('saekam')}
            />
        </ProjectLayout>
    );
}

const ProjectLayout = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const VinPong = styled.div`
    width: 300px;
    height: 300px;
    background-image: url(${process.env.PUBLIC_URL}/vinpong.png);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px;
    border: 1px solid #90B391;
    margin: 20px;
    transition: transform 0.5s ease;
`;

const Saekam = styled.div`
    width: 300px;
    height: 300px;
    background-image: url(${process.env.PUBLIC_URL}/saekam.png);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px;
    border: 1px solid #2096F3;
    margin: 20px;
    transition: transform 0.5s ease;
`;

export default Project;