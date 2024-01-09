import styled from 'styled-components'

export const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    margin-bottom: 48px;

    h2 {
        font-family: Poppins;
        font-size: 32px;
        font-weight: 500;
        line-height: 140%;
        color: ${({ theme }) => theme.LIGHT[300]};
        margin-bottom: 24px;
    }
`

export const Wrapper = styled.div`
    display: flex;
    gap: 27px;
`