import styled from 'styled-components';

export const StyledInput = styled.input`
    display: ${props => (props.hide ? 'none' : 'inline-block')};
    border: 1px solid ${props => (props.error ? props.theme.colors.Error : props.theme.colors.Primary)};
    font-size: 1em;
    width: 100%;
    padding: 20px;
    margin: 10px 0;
    outline: none;
    box-sizing: border-box;
    box-shadow: 0 0 10px 0 ${props => props.theme.colors.Primary};
    border-radius: 10px;

    :focus {
        border-color: ${props => props.theme.colors.Primary} ${props => props.theme.colors.Border};
    }
`;

export const StyledLabel = styled.label`
    display: ${props => (props.hide ? 'none' : 'inline-block')};
    font-size: 1.2em;
    padding: 5px 0 0 5px;
`;

export const StyledError = styled.span`
    font-size: 0.8em;
    color: ${props => props.theme.colors.Error};
    padding-left: 10px;
`;

export const StyledHint = styled.span`
    font-size: 1.1em;
    color: ${props => props.theme.colors.Error};
    padding-left: 10px;
`;
