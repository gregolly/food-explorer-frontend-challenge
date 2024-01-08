import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #fff;
    height: 100vh;
`

export const Form = styled.form`
    background-color: ${({ theme }) => theme.DARK[700]};
    border-radius: 1rem;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 32px;

    a {
        font-family: Poppins;
        font-size: 14px;
        color: #fff;
        font-weight: 500;
        text-align: center;
        text-decoration: none;

        &:hover {
            opacity: 0.8;
        }
    }
`