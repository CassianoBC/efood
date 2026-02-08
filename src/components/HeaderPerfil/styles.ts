import styled from "styled-components";
import { cores } from "../../styles";

export const HeaderContainer = styled.div`
    height: 186px;
    display: flex;
    justify-content: center;
`

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`

export const HeaderLogo = styled.img`
    width: 125px;
    height: 58px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const HeaderLink = styled.a`
    color: ${cores.salmao};
    text-decoration: none;
    font-weight: 900;
    font-size: 18px;
    cursor: pointer;
`