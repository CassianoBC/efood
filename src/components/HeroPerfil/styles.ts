import styled from "styled-components";
import { breakpoints } from "../../styles";

export const Container = styled.div`
    height: 280px;
    background-size: cover;
    background-position: center;
    position: relative;
    
    img {
    object-fit: cover;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        z-index: 0;
    }

    .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 156px;

    @media (max-width: ${breakpoints.desktop}) {
        padding-left: 16px;
    }

}
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 100;
    color: white;
    padding-top: 24px;

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 24px;
    }
`;

export const Subtitle = styled.h3`
    font-size: 32px;
    font-weight: 900;
    color: white;

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 24px;
    }
`;
