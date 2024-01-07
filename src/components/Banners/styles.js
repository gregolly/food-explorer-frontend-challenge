import styled from 'styled-components'

export const Container = styled.div`
    border-radius: 8px;
    background: var(--Gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));
    width: 1120px;
    height: 260px;
    flex-shrink: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 160px;
    margin-bottom: 60px;
    position: relative;
    display: flex;
    align-items: center;

    img {
        position: relative;
        top:-73px;
    }

    > div {
        h1 {
            color: #E1E1E6;
            font-family: Poppins;
            font-size: 40px;
            font-weight: 500;
            margin-bottom: 8px;
        }

        p {
            color: #E1E1E6;
            font-family: Roboto;
            font-size: 16px;
        }
    }
`