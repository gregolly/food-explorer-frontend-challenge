import styled from 'styled-components'

export const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.DARK[600]};
    padding: 24px 120px;

    > div {
        display: flex;
        align-items: center;
        gap: 10px;
        
        h3 {
            font-size: 24px;
            font-weight: 700;
            color: ${({ theme }) => theme.LIGHT[700]};
        }
    }
`