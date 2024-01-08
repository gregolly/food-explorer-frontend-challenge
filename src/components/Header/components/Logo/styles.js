import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    h1 {
        font-size: 42px;
        font-weight: 700;
        color: ${({ theme }) => theme.LIGHT[100]};
    }
`