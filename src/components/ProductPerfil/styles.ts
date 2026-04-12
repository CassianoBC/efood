import styled from "styled-components";

import { breakpoints, colors } from "../../styles";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.salmon};
    padding: 8px;
    max-width: 320px;
    color: ${colors.burntYellow};
    gap: 8px;
    margin-bottom: 32px;

    img {
        max-width: 304px;
        max-height: 167px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        width: 100%;
        max-width: 300px;
    }
`;

export const CardTitle = styled.h2`
    font-size: 16px;
    font-weight: 900;
`;

export const CardDescription = styled.p`
    font-size: 14px;
    line-height: 22px;
`;

export const CardButton = styled.button`
    background-color: ${colors.burntYellow};
    color: ${colors.salmon};
    border: none;
    padding: 4px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`;