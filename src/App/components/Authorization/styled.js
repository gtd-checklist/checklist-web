import styled from 'styled-components';
// обертка для формы
export const Wrapper = styled.div`
    max-width:50%;
    display:flex;
    flex-flow:column;
    margin: 0 auto;
    padding-top:50px;
`;

export const SocialAuthorization = styled.div`
    display:flex;
`;

export const Form = styled.form`
    display:flex;
    flex-flow:column;
    flex: auto;
`;

export const Input = styled.input`
    border: 1px solid #ececec;
    font-size: 1em;
    padding: 20px;
    margin: 10px 0; 
    outline: none;
    box-shadow: 0 0 10px 0 #ececec;
    border-radius: 10px;

    :focus{
        border-color: #ececec #000;
    }
`;

export const Label = styled.label`
    font-size: 1.2em;
    padding-left:5px;
`;

export const GroupButtons = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top:10px;
`;

export const Button = styled.button`
    font-size: 0.9em;
    width:30%;
    border: none;
    padding: 20px;
    border-radius: 10px;
    background-color: ${props => (props.signIn ? '#fff' : '#000')};
    color: ${props => (props.signIn ? '#000' : '#fff')};
    box-sizing: border-box;
    border: 1px solid #000;
    transition: all 0.2s ease-in-out;
    outline: none;
    box-shadow: 0 0 10px 0 #ececec;

    :hover{
        cursor: pointer;
        border-color: #ececec #000;
        background-color: #fff;
        color: #000;
    }

    :active{
        transform: translateY(2px); 
    }
`;
