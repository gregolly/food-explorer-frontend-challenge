import styled from 'styled-components'

export const CardWrapper = styled.div`
    display: flex;
    height: 462px;
    padding: 24px;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.DARK[300]};
    background: ${({ theme }) => theme.DARK[200]};
    position: relative;

    .wrapperFavorite {
        position: absolute;
        top: 15px;
        right: 15px;
        background: none;
    }

    > a {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }

    h3 {
        color: ${({ theme }) => theme.LIGHT[300]};
        font-family: Poppins;
        font-size: 24px;
        font-weight: 700;
        line-height: 140%;
    }

    p {
        color: ${({ theme }) => theme.LIGHT[400]};
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        line-height: 160%;
    }

    .price {
        color: ${({ theme }) => theme.TINTS.CAKE[200]};
        font-family: Roboto;
        font-size: 32px;
        font-weight: 400;
        line-height: 160%;
    }
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    > div  {
        display: flex;
        align-items: center;
        gap: 14px;

        button {
            background: none;
        }
    }
`