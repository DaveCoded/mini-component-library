import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
    const displayedValue = getDisplayedValue(value, children);
    const size = 24;

    return (
        <Wrapper>
            <HiddenSelect value={value} onChange={onChange}>
                {children}
            </HiddenSelect>
            <CustomSelect>
                <IconWrapper style={{ '--size': `${size}px` }}>
                    <Icon id="chevron-down" strokeWidth={1} size={size} />
                </IconWrapper>
                {displayedValue}
            </CustomSelect>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    width: max-content;
`;

const HiddenSelect = styled.select`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    /* Allow the select to span the full height in Safari */
    -webkit-appearance: none;
`;

const CustomSelect = styled.div`
    color: ${COLORS.gray700};
    background-color: ${COLORS.transparentGray15};
    font-size: 1rem;
    padding: 12px 16px;
    padding-right: 52px;
    border-radius: 8px;

    ${HiddenSelect}:focus + & {
        outline: 1px dotted #212121;
        outline: 5px auto -webkit-focus-ring-color;
    }

    ${HiddenSelect}:hover + & {
        color: ${COLORS.black};
    }
`;

const IconWrapper = styled.div`
    width: var(--size);
    height: var(--size);
    pointer-events: none;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 10px;
    margin: auto;
`;

export default Select;
