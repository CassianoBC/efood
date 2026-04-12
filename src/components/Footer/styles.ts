import styled from "styled-components";

import { colors } from "../../styles";

export const FooterContainer = styled.footer`
    background-color: ${colors.burntYellow};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 72px;
`;

export const Logo = styled.img`
    width: 125px;
    height: 58px;
    margin-top: 40px;
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 32px
`;

export const SocialMediaIcon = styled.img`
    width: 24px;
    height: 24px;
`;

export const FooterText = styled.p`
    font-size: 10px;
    text-align: center;
    margin-top: 80px;
    margin-bottom: 40px;
    max-width: 480px;
    color: ${colors.salmon};
`;
