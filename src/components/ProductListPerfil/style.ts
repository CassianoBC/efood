import styled from "styled-components";
import { breakpoints } from "../../styles";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 32px;
    margin-top: 80px;

    @media (max-width: ${breakpoints.desktop}) {
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
    }

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: repeat(1, 1fr);
    }
`;