import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const styles = {
    small: {
        height: 24,
        borderWeight: 1,
        fontSize: 14,
        iconSize: 16
    },
    large: {
        height: 36,
        borderWeight: 2,
        fontSize: 18,
        iconSize: 24
    }
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
    const style = styles[size];

    return (
        <Wrapper>
            <IconWrapper style={{ '--size': style.iconSize + 'px' }}>
                <Icon id={icon} size={style.iconSize} />
            </IconWrapper>
            <TextInput
                {...delegated}
                style={{
                    '--font-size': style.fontSize / 16 + 'rem',
                    '--border-weight': style.borderWeight + 'px',
                    '--width': width + 'px',
                    '--height': style.height / 16 + 'rem'
                }}
            />
            <VisuallyHidden>{label}</VisuallyHidden>
        </Wrapper>
    );
};

const Wrapper = styled.label`
    display: block;
    position: relative;
    color: ${COLORS.gray700};

    &:hover {
        color: ${COLORS.black};
    }
`;

const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: var(--size);
`;

const TextInput = styled.input`
    width: var(--width);
    height: var(--height);
    font-size: var(--font-size);
    border: none;
    border-bottom: var(--border-thickness) solid ${COLORS.black};
    padding-left: var(--height);
    color: inherit;
    font-weight: 700;
    outline-offset: 2px;

    &::placeholder {
        font-weight: 400;
        color: inherit;
    }
`;

export default IconInput;
