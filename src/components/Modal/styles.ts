import styled from "styled-components";

import { breakpoints, colors } from "../../styles";

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    display: none;

    &.visivel {
    display: flex;
    }

    .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    }

    .container {
        @media (max-width: ${breakpoints.desktop}) {
        width: 90%;
    }
    }
`

export const ModalContainer = styled.div`
    background-color: ${colors.salmon};
    color: ${colors.white};
    position: relative;
    z-index: 1;
`

export const ModalContent = styled.div`
    display: flex;
    gap: 24px;
    padding: 32px;

    img {
        width: 100%;
        max-width: 280px;
        height: 280px;
        object-fit: cover;
    }

    .info {
        max-width: 656px;
    }

    @media (max-width: ${breakpoints.desktop}) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`

export const CloseImg = styled.img`
    height: 16px;
    width: 16px;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px; 
`

export const Title = styled.h3`
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
`

export const Description = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 32px;
`

export const Porcao = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 16px;
`

export const Button = styled.button`
    background-color: ${colors.iceWhite};
    color: ${colors.salmon};
    font-size: 14px;
    font-weight: bold;
    border: none;
    padding: 4px 6px;
    cursor: pointer;
`

