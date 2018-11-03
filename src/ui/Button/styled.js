import styled from 'styled-components';

export const StyledButton = styled.button`
    font-size: 0.9em;
    padding: 20px 40px;
    border-radius: 10px;
    /* different between submit button and simple button */
    background-color: ${props => (
    props.isSubmit
      ? props.theme.colors.Surface
      : props.theme.colors.OppositeSurface)};
    color: ${props => (
    props.isSubmit
      ? props.theme.colors.OnSurface
      : props.theme.colors.OnOppositeSurface)};
    border: ${props => (
    props.isSubmit
      ? `1px solid ${props.theme.colors.Border}`
      : 'none')};
    text-decoration: ${props => (props.isSubmit ? 'none' : 'underline')};
    
    transition: all 0.2s ease-in-out;
    outline: none;
    box-shadow: 0 0 10px 0 ${props => props.theme.colors.Primary};

    @media (max-width: 960px) {
        :last-child{
            margin-top: 20px;
        }
    }

    :hover{
        cursor: pointer;
        border-color: ${props => props.theme.colors.Primary} ${props => props.theme.colors.Border};
        background-color: ${props => props.theme.colors.OppositeSurface};
        color: ${props => props.theme.colors.Surface};
        text-decoration: none;
    }

    :active{
        transform: translateY(2px);
    }
`;
