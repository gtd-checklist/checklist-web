import styled from 'styled-components';

import lightScheme from '../Colors';

export const StyledButton = styled.button`
    font-size: 0.9em;
    padding: 20px 40px;
    border-radius: 10px;
    background-color: ${props => (props.isSubmit ? lightScheme.black : '#fff')};
    color: ${props => (props.isSubmit ? '#fff' : lightScheme.black)};
    border: ${props => (props.isSubmit ? `1px solid ${lightScheme.black}` : 'none')};
    transition: all 0.2s ease-in-out;
    outline: none;
    box-shadow: 0 0 10px 0 ${lightScheme.lightGray};
    text-decoration: ${props => (props.isSubmit ? 'none' : 'underline')};

    @media (max-width: 960px) {
        :last-child{
            margin-top: 20px;
        }
    }

    :hover{
        cursor: pointer;
        border-color: ${lightScheme.lightGray} ${lightScheme.black};
        background-color: #fff;
        color: ${lightScheme.black};
        text-decoration: none;
    }

    :active{
        transform: translateY(2px);
    }
`;
