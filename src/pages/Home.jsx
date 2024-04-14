import React, { useState } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import styled from 'styled-components';
import CloverFlakes from '../components/CloverFlakes';

function Home() {
    const options = {
        anchors: ['FirstSection', 'SecondSection', 'ThirdSection'],
    };

    return (
        <HomeLayout>
            <SectionsContainer {...options}>
                <Section>
                    <CloverFlakes />
                    <SectionInner>
                        <SectionText>
                            안녕하세요!
                        </SectionText>
                        <SectionText>
                            저는 세상의 변화에 앞장 서서
                        </SectionText>
                        <SectionText>
                            기술의 혁신으로 행복을 전하고 싶은
                        </SectionText>
                        <SectionText>
                            프론트엔드 개발자, 김서로입니다
                        </SectionText>
                    </SectionInner>
                </Section>
                <Section>
                    두번째
                </Section>
                <Section>
                    세번째
                </Section>
            </SectionsContainer>
        </HomeLayout>
    );
}

const HomeLayout = styled.div`

`;

const SectionInner = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(cloud.png);
    background-size: 680px;
    background-position: center;
    background-repeat: no-repeat;
`;

const SectionText = styled.div`
    font-size: 24px;
    padding: 10px;
`;

export default Home;