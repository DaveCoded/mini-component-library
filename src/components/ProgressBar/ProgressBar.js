import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const styles = {
    small: {
        height: 8,
        padding: 0,
        borderRadius: 4
    },
    medium: {
        height: 12,
        padding: 0,
        borderRadius: 4
    },
    large: {
        height: 16,
        padding: 4,
        borderRadius: 8
    }
};

const ProgressBar = ({ value, size }) => {
    const style = styles[size];

    return (
        <Wrapper
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
                '--border-radius': `${style.borderRadius}px`,
                '--padding': `${style.padding}px`
            }}>
            <HideCorners>
                <Progress
                    style={{
                        '--width': `${value}%`,
                        '--height': `${style.height}px`
                    }}
                />
            </HideCorners>
            <VisuallyHidden>{value}%</VisuallyHidden>
        </Wrapper>
    );
};

export default ProgressBar;

const Wrapper = styled.div`
    width: 370px;
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    padding: var(--padding);
    border-radius: var(--border-radius);
`;

const HideCorners = styled.div`
    overflow: hidden;
    border-radius: 4px;
`;

const Progress = styled.div`
    width: var(--width);
    height: var(--height);
    border-radius: 4px 0 0 4px;
    background-color: ${COLORS.primary};
`;
