import styled from "styled-components";
import { cores } from "../../styles";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${cores.branco};
    color: ${cores.salmao};
    max-width: 472px;
    margin-bottom: 48px;

    img {
        display: block;
        max-width: 100%;
        max-height: 100%;
    }
`

export const CardContent = styled.div`
    padding: 8px;
    border: 1px solid ${cores.salmao};
    border-top: none;

`;

export const CardTitle = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
`;

export const CardDescription = styled.p`
    margin-bottom: 16px;
    font-size: 14px;
`;

export const CardButton = styled.button`
    background-color: ${cores.salmao};
    color: ${cores.brancoGelo};
    border: none;
    font-size: 14px;
    font-weight: bold;
    padding: 4px 6px;

    &:hover {
        background-color: darken(${cores.salmao}, 10%);
    }
`;