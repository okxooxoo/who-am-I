import React from 'react';
import styled from 'styled-components';

function Cloud() {
    return (
        <CloudLayout>
            <CloudText>
                저는 세상의 변화에 앞장 서서
            </CloudText>
            <CloudText>
                기술의 혁신으로 행복을 전하고 싶은
            </CloudText>
            <CloudText>
                프론트엔드 개발자, 김서로입니다
            </CloudText>
        </CloudLayout>
    );
}

const CloudLayout = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${process.env.PUBLIC_URL}/cloud.png);
    background-size: 680px;
    background-position: center;
    background-repeat: no-repeat;
`;

const CloudText = styled.div`
    font-size: 24px;
    padding: 10px;
`;

export default Cloud;