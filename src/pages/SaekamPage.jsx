import React, { useEffect, useRef } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import styled from 'styled-components';

function SaekamPage() {

    return (
        <SaekamLayout>
            <SaekamMockUps />
            <SaekamCover>
                <SaekamTitle>
                    색감
                </SaekamTitle>
                <SaekamText>
                    자신의 감정을 올바르게 바라볼 수 있도록 돕는
                </SaekamText>
                <SaekamText>
                    OpenAI 기반 심리 상담 모바일 앱
                </SaekamText>
                <SaekamText>
                    (기여도: 50%)
                </SaekamText>
            </SaekamCover>
        </SaekamLayout>
    );
}

const SaekamLayout = styled.div`
    display: flex;
    height: 100%;
    min-width: 950px;
    justify-content: space-evenly;
    align-items: center;
`;

const SaekamMockUps = styled.div`
    background-image: url(${process.env.PUBLIC_URL}/saekam_mockups.png);
    background-size: cover;
    width: 416px;
    height: 524px;
`;

const SaekamCover = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url(${process.env.PUBLIC_URL}/cloud_vertical.png);
    background-size: 100%;
    background-repeat: no-repeat;
    width: 500px;
    height: 500px;
`;

const SaekamTitle = styled.div`
    font-size: 32px;
    padding: 10px 0px 10px 0px;
`;

const SaekamText = styled.div`
    /* font-size: 32px; */
    padding: 10px 0px 10px 0px;
`;

export default SaekamPage;