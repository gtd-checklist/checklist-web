import styled from 'styled-components';

import lightScheme from '../Colors';

export const StyledButton = styled.button`
    font-size: 0.9em;
    padding: 20px 40px;
    border-radius: 10px;
    background-color: ${props => (props.isSubmit ? lightScheme.Surface : lightScheme.OppositeSurface)};
    color: ${props => (props.isSubmit ? lightScheme.OnSurface : lightScheme.OnOppositeSurface)};
    border: ${props => (props.isSubmit ? `1px solid ${lightScheme.Border}` : 'none')};
    transition: all 0.2s ease-in-out;
    outline: none;
    box-shadow: 0 0 10px 0 ${lightScheme.Primary};
    text-decoration: ${props => (props.isSubmit ? 'none' : 'underline')};

    @media (max-width: 960px) {
        :last-child{
            margin-top: 20px;
        }
    }

    :hover{
        cursor: pointer;
        border-color: ${lightScheme.Primary} ${lightScheme.Border};
        background-color: ${lightScheme.OppositeSurface};
        color: ${lightScheme.Surface};
        text-decoration: none;
    }

    :active{
        transform: translateY(2px);
    }
`;
