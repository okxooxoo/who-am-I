import React, { useEffect, useRef } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import styled from 'styled-components';

function VinPongPage() {

    return (
        <VinPongLayout>
            <VinPongMockUps />
        </VinPongLayout>
    );
}

const VinPongLayout = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const VinPongMockUps = styled.div`
    background-image: url(${process.env.PUBLIC_URL}/vinpong_mockups.png);
    background-size: cover;
    width: 416px;
    height: 524px;
`;

export default VinPongPage;