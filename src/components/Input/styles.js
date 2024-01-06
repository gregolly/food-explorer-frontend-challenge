import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    label {
        font-family: inherit;
        font-size: 16px;
        font-weight: 400;
        line-height: 100%;
        margin-bottom: 8px;
        color: #C4C4CC;
    }

    input {
        height: 48px;
        padding: 12px 14px;
        border-radius: 8px;
        background-color: #0D1D25;
        border: none;
        color: #fff;
        width: 380px;
    }
`