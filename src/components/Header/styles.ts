import styled from "styled-components";
import { cores } from "../../styles";

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 384px;
    color: ${cores.salmao};
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
`;
