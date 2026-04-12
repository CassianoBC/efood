import styled from "styled-components";

import { breakpoints, colors } from "../../styles";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.white};
    color: ${colors.salmon};
    max-width: 472px;
    
    margin-bottom: 48px;
    position: relative;

    img {
        display: block;
        max-height: 217px;
        object-fit: cover;
    }

    @media (max-width: ${breakpoints.tablet}) {
        max-width: 80%;

        img {
            width: 100%;
        }
    }
`

export const CardInfos = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    gap: 8px;
    display: flex;
`


export const CardTag = styled.div`
    font-size: 12px;
    font-weight: bold;
    padding: 4px 6px;

    display: inline-block;
    background-color: ${colors.salmon};
    color: ${colors.iceWhite};
`

export const CardContent = styled.div`
    padding: 8px;
    height: 100%;
    border: 1px solid ${colors.salmon};
    border-top: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardTitle = styled.h2`
    font-size: 18px;
    font-weight: bold;
`;

export const CardDescription = styled.p`
    margin-bottom: 16px;
    line-height: 22px;
    font-size: 14px;
`;

export const CardButton = styled.button`
    background-color: ${colors.salmon};
    color: ${colors.iceWhite};
    border: none;
    font-size: 14px;
    font-weight: bold;
    padding: 4px 6px;
    cursor: pointer;

    &:hover {
        background-color: darken(${colors.salmon}, 10%);
    }
`;

export const CardContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`

export const CardRating = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    gap: 8px;

    img {
    width: 20px;
    height: 20px;
    }
`