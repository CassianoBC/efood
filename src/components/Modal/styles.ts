import styled from "styled-components";
import { cores } from "../../styles";

export const ModalContainer = styled.div`
    background-color: ${cores.salmao};
    color: ${cores.branco};
    position: relative;
`

export const ModalContent = styled.div`
    display: flex;
    gap: 24px;
    padding: 32px;

    img {
        width: 280px;
        height: 280px;
        object-fit: cover;
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
    background-color: ${cores.brancoGelo};
    color: ${cores.salmao};
    font-size: 14px;
    font-weight: bold;
    border: none;
    padding: 4px 6px;
`

