import styled from 'styled-components';

const error = '#fa163a';
const border = '#dcdcdc';

export const StyledInput = styled.input`
    display: ${props => (props.hide ? 'none' : 'inline-block')};
    border: 1px solid ${props => (props.error ? error : border)};
    font-size: 1em;
    padding: 20px;
    margin: 10px 0;
    outline: none;
    box-shadow: 0 0 10px 0 ${border};
    border-radius: 10px;

    :focus {
        border-color: ${border} #000;
    }
`;

export const StyledLabel = styled.label`
    display: ${props => (props.hide ? 'none' : 'inline-block')};
    font-size: 1.2em;
    padding: 5px 0 0px 5px;
`;

export const StyledError = styled.span`
    font-size: 0.8em;
    color: ${error};
    padding-left: 10px;
`;

export const StyledHint = styled.span`
    font-size: 0.8em;
    color: #666;
    padding-left: 10px;
`;
