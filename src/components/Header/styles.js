import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    padding: 24px 123px;
    background-color: #00111A;
    gap: 32px;
`

export const SearchContainer = styled.div`
    display: flex;
    align-items:center; 
    justify-content: center;

    > div {
        position: absolute;
        color: #7C7C8A;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
    }

    input {
        display: flex;
        height: 48px;
        padding: 12px 14px;
        justify-content: center;
        align-items: center;
        gap: 14px;
        flex: 1 0 0;
        border-radius: 5px;
        background-color: #0D1D25;
        border: none;
        width: 500px;
    }
`