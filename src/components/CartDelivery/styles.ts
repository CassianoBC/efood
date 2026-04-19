import styled from "styled-components";

import { breakpoints, colors } from "../../styles";

type inputGroupProps = {
    maxWidth?: string
}

type props = {
    isValid?: boolean;
}

export const Sidebar = styled.aside`
    background-color: ${colors.salmon};
    max-width: 360px;
    width: 100%;
    padding: 32px 8px 0 8px;
    z-index: 1;
    color: ${colors.burntYellow};

    h2 {
    font-size: 16px;
    font-weight: bold;
    }

    p {
        font-size: 14px;
        margin-top: 28px;
        line-height: 22px;
    }

    > button {
        background-color: ${colors.burntYellow};
        color: ${colors.salmon};
        border: none;
        padding: 4px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        width: 100%;
        margin-top: 28px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        width: 100%;
        max-width: 300px;
    }
`

export const Form = styled.form<props>`
    margin-top: 16px;

    p {
        display: ${(props) => props.isValid ? "block" : "none"};
        text-align: center;
        font-weight: bold;
    }
`

export const InputGroup = styled.div<inputGroupProps>`
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 14px;
    font-weight: bold;
    margin-top: 8px;
    max-width: ${(props) => props.maxWidth || "auto"};
    width: 100%;

    label {
        color: ${colors.burntYellow};
    }

    input {
        background-color: ${colors.burntYellow};
        border: none;
        padding: 8px;
        color: ${colors.salmon};
        font-weight: bold;
        width: 100%;

        &.error {
            border: 2px solid red;
        }
    }
`

export const TwoInputsForRow = styled.div`
    display: flex;
    gap: 34px;
`

export const ButtonsGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 24px;

    button {
        background-color: ${colors.burntYellow};
        color: ${colors.salmon};
        border: none;
        padding: 4px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
    }
`