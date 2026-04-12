import styled from "styled-components";

import { breakpoints, colors } from "../../styles";
import type { Props } from ".";

export const HeaderContainer = styled.div<Props>`
    display: flex;
    flex-direction: ${(props) => (props.type === "home" ? "column" : "row")};
    align-items: center;
    justify-content: space-between;
    height: ${(props) => (props.type === "home" ? "384px" : "186px")};
    color: ${colors.salmon};

    a {
    text-decoration: none;
    }

    @media (max-width: ${breakpoints.tablet}) {
        justify-content: center;
        gap: 56px;
    }
`;

export const HeaderLogo = styled.img`
    margin-top: 64px;
    width: 125px;
    height: 58px;
`;

export const HeaderTitle = styled.h1`
    max-width: 539px;
    margin-bottom: 40px;
    text-align: center;
    font-size: 36px;
    font-weight: 900;

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 24px;
    }
`;

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 100%;

    @media (max-width: ${breakpoints.desktop}) {
        flex-direction: column;
        padding: 16px 0;
        }
`

export const HeaderLogoPerfil = styled.img`
    width: 125px;
    height: 58px;
    

    @media (min-width: ${breakpoints.desktop}) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
        }
`;

export const HeaderLink = styled.p`
    color: ${colors.salmon};
    text-decoration: none;
    font-weight: 900;
    font-size: 18px;
    cursor: pointer;
`
