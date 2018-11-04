import styled from 'styled-components';

// обертка для формы
export const StyledWrapper = styled.div`
    max-width: 50%;
    display: flex;
    flex-flow: column;
    margin: 0 auto;
    padding-top: 20px;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-flow: column;
    flex: auto;
    padding-top: 20px;
`;

export const StyledGroupButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    @media (max-width: 960px) {
        flex-flow: column;
    }
`;
