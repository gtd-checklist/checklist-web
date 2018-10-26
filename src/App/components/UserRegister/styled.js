import styled from 'styled-components';

const red = '#fa163a';
const lightGray = '#dcdcdc';

// обертка для формы
export const Wrapper = styled.div`
    max-width:50%;
    display:flex;
    flex-flow:column;
    margin: 0 auto;
    padding-top:20px;
`;

export const SocialAuthorization = styled.div`
    display:flex;
    align-items: center;
    margin:10px 0;
`;

export const MainHeader = styled.h1`
    font-size: 2.2em;
    letter-spacing:0.05em;
    font-weight:normal;
`;

export const LinkSocial = styled.a`
    width: 50px;
    height: 50px;
    background-image: url('./img/${props => props.path}');
    background-color: #000;
    margin-left:15px;
`;

export const Form = styled.form`
    display:flex;
    flex-flow:column;
    flex: auto;
    padding-top:20px;
`;

export const Input = styled.input`
    display: ${props => (props.hide ? 'none' : 'inline-block')};
    border: 1px solid ${props => (props.err ? red : lightGray)};
    font-size: 1em;
    padding: 20px;
    margin: 10px 0; 
    outline: none;
    box-shadow: 0 0 10px 0 ${lightGray};
    border-radius: 10px;

    :focus{
        border-color: ${lightGray} #000;
    }
`;

export const Hint = styled.span`
    font-size: 0.8em;
    color: #666;
    padding-left: 10px;
`;

export const Error = styled.span`
    font-size: 0.8em;
    color: ${red};
    padding-left: 10px;
`;

export const Label = styled.label`
    display: ${props => (props.hide ? 'none' : 'inline-block')};
    font-size: 1.2em;
    padding: 5px 0 0px 5px;
`;

export const GroupButtons = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top:10px;
    @media (max-width: 960px) {
        flex-flow: column;
    }
`;

export const Button = styled.button`
    font-size: 0.9em;
    padding: 20px 40px;
    border-radius: 10px;
    background-color: #000;
    color: #fff;
    border: 1px solid #000;
    transition: all 0.2s ease-in-out;
    outline: none;
    box-shadow: 0 0 10px 0 ${lightGray};

    @media (max-width: 960px) {
        :last-child{
            margin-top: 20px;
        }
    }

    :hover{
        cursor: pointer;
        border-color: ${lightGray} #000;
        background-color: #fff;
        color: #000;
    }

    :active{
        transform: translateY(2px); 
    }
`;

export const SignUp = styled(Button)`
    border: none;
    text-decoration:underline;
    background-color: #fff;
    color: #000;

    :hover{
        text-decoration:none;
    }
`;
