import React, { useEffect, useRef } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import styled from 'styled-components';

function VinPongPage() {
    const options = {
        anchors: ['FirstSection', 'SecondSection', 'ThirdSection'],
    };

    return (
        <VinPongLayout>
            <SectionsContainer {...options}>
                <Section>
                    빈퐁 소개 페이징
                </Section>
                <Section>
                    빈퐁 소개 페이징
                </Section>
                <Section>
                    빈퐁 소개 페이징
                </Section>
            </SectionsContainer>
        </VinPongLayout>
    );
}

const VinPongLayout = styled.div`
    
`;

export default VinPongPage;