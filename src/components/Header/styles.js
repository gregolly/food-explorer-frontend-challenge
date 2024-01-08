import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    padding: 24px 123px;
    background-color: ${({ theme }) => theme.DARK[600]};
    gap: 32px;
    align-items: center;
    justify-content: center;
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