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

    return (
        <ProjectLayout>
            <VinPong
                ref={vinpong}
                onMouseEnter={() => handleProjectEnter(vinpong)}
                onMouseLeave={() => handleProjectLeave(vinpong)}
            />
            <Saekam
                ref={saekam}
                onMouseEnter={() => handleProjectEnter(saekam)}
                onMouseLeave={() => handleProjectLeave(saekam)}
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
    background-image: url(vinpong.png);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px;
    border: 1.5px solid #90B391;
    margin: 20px;
    transition: transform 0.5s ease;
`;

const Saekam = styled.div`
    width: 300px;
    height: 300px;
    background-image: url(saekam.png);
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px;
    border: 1.5px solid #2096F3;
    margin: 20px;
    transition: transform 0.5s ease;
`;

export default Project;