import styled from 'styled-components'

export const Container = styled.header`
    background-color: ${({ theme }) => theme.DARK[600]};

    .container {
        display: flex;
        padding: 24px 0;
        align-items: center;
        justify-content: center;
        gap: 32px;
        width: 1200px;
        margin: 0 auto;
    }
`

export const SearchContainer = styled.div`
    display: flex;
    align-items:center; 
    justify-content: center;

    > div {
        position: absolute;
        color: ${({ theme }) => theme.LIGHT[500]};
        display: flex;
        align-items: center;
        gap: 14px;
    }

    input {
        padding: 18px 14px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.DARK[900]};
        border: none;
        width: 500px;
        color: #fff;
    }
`