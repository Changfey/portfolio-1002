import styled from "styled-components";

export const HeroSection = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;

    margin-top: 2rem;

    .bgAnimation__svg {
        position: absolute;
        z-index: -1;
        top: 20rem;
        right: 4rem;
        width: 45rem;
        height: 45rem;
        @media ${(props) => props.theme.breakpoints.sm} {
            display: none;
        }
    }

    h1 {
        margin-bottom: 1.2rem;
        line-height: 1;
        font-family: var(--font-mono);
        font-weight: lighter;
        color: var(--nav-color);
    }

    h2 {
        margin-bottom: 1rem;
        line-height: 1.2;
        font-size: clamp(40px, 8vw, 80px);
        font-weight: 500;
        width: max-content;
        background: var(--nav-color);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    h3 {
        margin-bottom: 2rem;
        line-height: 1;
        letter-spacing: -2px;
        font-size: clamp(40px, 8vw, 80px);
        color: var(--nav-color);
    }
`;

export const Hi = styled.a`
    text-decoration: none;
    color: var(--nav-color);
`;

export const ResumeButton = styled.button`
    margin-top: 6rem;
    border: 1px solid var(--active-color);
    border-radius: var(--border-radius);
    padding: 1.5rem 3rem;
    max-width: 260px;
    color: var(--active-color);
    font-size: var(--fz-sm);
    text-align: center;
    line-height: 1.5;
    background: transparent;
    outline: none;
    transition: var(--transition);
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 3px 0px var(--nav-color);
        background: rgba(112, 184, 175, .5);
        color: #fff;
        border: 1px solid var(--nav-color);
    }
`

interface SelfIntroInterface {
    readonly lineHeight?: string
}

export const SelfIntro = styled.p<SelfIntroInterface>`
    margin-top: 1.2rem;
    max-width: 660px;
    line-height: ${props => props.lineHeight ? props.lineHeight : 1.4};
    color: var(--nav-color);
    font-size: var(--fz-lg);
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: var(--fz-sm);
    }
`;