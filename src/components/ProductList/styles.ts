import styled from "styled-components";

import type { Props } from ".";

export const Container = styled.div<Omit<Props, "produtos">>`
    display: grid;
    grid-template-columns: ${(props) => props.grid === "home" ? "repeat(2, 1fr)" : "repeat(3, 1fr)"};
    column-gap: 80px;
    margin-top: 80px;
`;

