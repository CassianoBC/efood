import styled from "styled-components";
import { cores } from "../../styles";

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
    display: none;
    z-index: 1;

    &.is-open {
        display: flex;
    }
`

export const Sidebar = styled.aside`
    background-color: ${cores.salmao};
    max-width: 360px;
    width: 100%;
    padding: 32px 8px 0 8px;
    z-index: 1;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
`

export const CartIcone = styled.img`
    position: absolute;
    bottom: 8px;
    right: 8px;
    max-width: 16px;
    max-height: 16px;
    cursor: pointer;
`

export const CartItem = styled.li`
    position: relative;
    background-color: ${cores.amareloQueimado};
    display: flex;
    color: ${cores.salmao};
    padding: 8px 8px 12px 8px;
    max-width: 344px;
    width: 100%;
    margin-bottom: 16px;

    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
    }
`

export const CartContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 8px;

    h3 {
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 16px;
    }

    p {
        font-size: 14px;}
`

export const CartTotal = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    margin-bottom: 16px;
    color: ${cores.amareloQueimado};
    font-size: 14px;
    font-weight: 700;
`

export const Button = styled.button`
    background-color: ${cores.amareloQueimado};
    color: ${cores.salmao};
    border: none;
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    padding: 4px 0;
    cursor: pointer;
`
