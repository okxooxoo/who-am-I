import React, { useEffect, useRef } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import styled from 'styled-components';
import CloverFlakes from '../components/CloverFlakes';
import Cloud from '../components/Cloud';
import Planet from '../components/Planet';
import Project from '../components/Project';
import VinPongPage from './VinPongPage';

function Home() {
    const circle = useRef();

    const options = {
        anchors: [
            'FirstSection',
            'SecondSection',
            'ThirdSection',
            'VinPongSection',
        ],
    };

    useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            circle.current.style.left = mouseX + 'px';
            circle.current.style.top = mouseY + 'px';
        });

        // 화면을 벗어날 때 원 숨기기
        const handleMouseLeave = () => {
            circle.current.style.display = 'none';
        };

        // 화면 안에 들어올 때 원 보이기
        const handleMouseEnter = () => {
            circle.current.style.display = 'block';
        };

        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };

    }, []);

    return (
        <HomeLayout>
            <Circle ref={circle} />
            <SectionsContainer {...options}>
                <Section>
                    <CloverFlakes />
                    <Cloud />
                </Section>
                <Section>
                    <Planet />
                </Section>
                <Section>
                    <Project />
                </Section>
                <Section>
                    <VinPongPage />
                </Section>
            </SectionsContainer>
        </HomeLayout>
    );
}

const Circle = styled.div`
    position: fixed;
    z-index: 101;
    left: -20px;
    top: -20px;
    height: 20px;
    width: 20px;
    border-radius: 20px;
    background-color: black;
`;

const HomeLayout = styled.div`
`;

export default Home;