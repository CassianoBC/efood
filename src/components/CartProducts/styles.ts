import styled from "styled-components";

import { breakpoints, colors } from "../../styles";

export const Sidebar = styled.aside`
    background-color: ${colors.salmon};
    max-width: 360px;
    width: 100%;
    padding: 32px 8px 0 8px;
    z-index: 1;

    .empty-cart {
        text-align: center;
        color: ${colors.burntYellow};
    }

    @media (max-width: ${breakpoints.mobile}) {
        width: 100%;
        max-width: 300px;
    }
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
    background-color: ${colors.burntYellow};
    display: flex;
    color: ${colors.salmon};
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
    color: ${colors.burntYellow};
    font-size: 14px;
    font-weight: 700;
`

export const Button = styled.button`
    background-color: ${colors.burntYellow};
    color: ${colors.salmon};
    border: none;
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    padding: 4px 0;
    cursor: pointer;
`
