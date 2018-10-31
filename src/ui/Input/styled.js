import styled from 'styled-components';

import lightScheme from '../Colors';

export const StyledInput = styled.input`
    display: ${props => (props.hide ? 'none' : 'inline-block')};
    border: 1px solid ${props => (props.error ? lightScheme.red : lightScheme.lightGray)};
    font-size: 1em;
    padding: 20px;
    margin: 10px 0;
    outline: none;
    box-shadow: 0 0 10px 0 ${lightScheme.lightGray};
    border-radius: 10px;

    :focus {
        border-color: ${lightScheme.lightGray} ${lightScheme.black};
    }
`;

export const StyledLabel = styled.label`
    display: ${props => (props.hide ? 'none' : 'inline-block')};
    font-size: 1.2em;
    padding: 5px 0 0px 5px;
`;

export const StyledError = styled.span`
    font-size: 0.8em;
    color: ${lightScheme.red};
    padding-left: 10px;
`;

export const StyledHint = styled.span`
    font-size: 1.1em;
    color: ${lightScheme.red};
    padding-left: 10px;
`;
