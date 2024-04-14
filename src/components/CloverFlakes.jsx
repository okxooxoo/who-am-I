//import { generateRandomNumber } from '@utils/math';
import React, { useState } from 'react';
import styled from 'styled-components';
import Clover from './Clover';
import Github from './Github';

function CloverFlakes() {
    const CLOVER_COUNT = 50;
    const [cloverFlake, setCloverFlake] = useState([]);

    useState(() => {
        const newCloverFlake = Array.from({ length: CLOVER_COUNT }).map(() => {
            const left = Math.floor(Math.random() * 101);
            const fallDelay = Math.random() * 3;
            const rotateAngle = Math.floor(Math.random() * 361);

            return {
                left,
                fallDelay,
                rotateAngle,
            };
        });
        setCloverFlake(newCloverFlake);
    }, []);

    return (
        <CloverFlakeLayout>
            {cloverFlake.map(({left, fallDelay, rotateAngle}) =>
                <Clover left={left} fallDelay={fallDelay} rotateAngle={rotateAngle} />
            )}
            <Github left={70} fallDelay={3} rotateAngle={0} />
        </CloverFlakeLayout>
    );
}

const CloverFlakeLayout = styled.div`

`;

export default CloverFlakes;