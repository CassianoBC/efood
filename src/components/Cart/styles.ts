import styled from "styled-components";

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

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
`
