import styled from "styled-components";
import { cores } from "../../styles";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${cores.salmao};
    padding: 8px;
    color: ${cores.amareloQueimado};
    gap: 8px;
    margin-bottom: 32px;

    img {
        max-width: 304px;
        max-height: 167px;
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
    background-color: ${cores.amareloQueimado};
    color: ${cores.salmao};
    border: none;
    padding: 4px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`;