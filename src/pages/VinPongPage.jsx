import React, { useEffect, useRef } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import styled from 'styled-components';

function VinPongPage() {

    return (
        <VinPongLayout>
            <VinPongMockUps />
            <VinPongCover>
                <VinPongTitle>
                    빈티지핑퐁
                </VinPongTitle>
                <VinPongText>
                    의류 중고 거래 모바일 앱 
                </VinPongText>
                <VinPongText>
                    (기여도: 100%)
                </VinPongText>
            </VinPongCover>
        </VinPongLayout>
    );
}

const VinPongLayout = styled.div`
    display: flex;
    height: 100%;
    min-width: 950px;
    justify-content: space-evenly;
    align-items: center;
`;

const VinPongMockUps = styled.div`
    background-image: url(${process.env.PUBLIC_URL}/vinpong_mockups.png);
    background-size: cover;
    width: 416px;
    height: 524px;
`;

const VinPongCover = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url(${process.env.PUBLIC_URL}/cloud_vertical.png);
    background-size: 100%;
    background-repeat: no-repeat;
    width: 500px;
    height: 500px;
`;

const VinPongTitle = styled.div`
    font-size: 32px;
    padding: 10px 0px 10px 0px;
`;

const VinPongText = styled.div`
    /* font-size: 32px; */
    padding: 10px 0px 10px 0px;
`;

export default VinPongPage;