import styled from "styled-components";
import { GiTriangleTarget } from "react-icons/gi";

export const StyledWorkSection = styled.section`
    margin: 10rem auto 0;

    padding-top: 10rem;

    @media ${(props) => props.theme.breakpoints.md} {
      padding-top: 6rem;
    }

    h2 {
        margin: 0 auto 4rem;
        display: flex;
        align-items: center;
        white-space: nowrap;
        line-height: 1.2;
        font-size: var(--fz-xxxl);
        font-weight: bold;
        width: max-content;
        background: var(--nav-color);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        &:before {
            content: '';
            position: relative;
            display: block;
            margin-right: 20px;
            width: 16rem;
            height: 1px;
            background: var(--light-color);
            @media ${(props) => props.theme.breakpoints.md} {
                width: 12rem;
            }
            @media ${(props) => props.theme.breakpoints.xs} {
                width: 10rem; 
            }
            @media ${(props) => props.theme.breakpoints.xxs} {
                width: 5rem; 
            }
            @media ${(props) => props.theme.breakpoints.xxxs} {
                width: 10%;
            }
        }
        &:after {
            content: '';
            position: relative;
            display: block;
            margin-left: 20px;
            width: 16rem;
            height: 1px;
            background: var(--light-color);
            @media ${(props) => props.theme.breakpoints.md} {
                width: 12rem;
            }
            @media ${(props) => props.theme.breakpoints.xs} {
                width: 10rem; 
            }
            @media ${(props) => props.theme.breakpoints.xxs} {
                width: 5rem;
            }
            @media ${(props) => props.theme.breakpoints.xxxs} {
                width: 10%;
            }
        }
    }
`;

export const WorkInfoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
`

export const YearOfWork = styled.div`
    grid-column: 3 / 5;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: start;

    @media ${(props) => props.theme.breakpoints.xl} {
        grid-column: 2 / 5;
    }

    @media ${(props) => props.theme.breakpoints.lg} {
        grid-column: 1 / 5;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        overflow-x: scroll;
        grid-column: 1 / -1;
        flex-direction: row;
        align-items: center;
        margin-bottom: 2rem;
    }
    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
    
    ::-webkit-scrollbar {
        display: none;
    }

`

export const YearButton = styled.button`
    padding: 0 2rem;
    height: var(--tab-height);
    line-height: var(--tab-height);
    white-space: nowrap;
    text-align: left;
    font-size: var(--fz-sm);
    color: var(--main-color);
    transition: var(--transition);
    border-left: 2px solid var(--light-color);
    &:hover {
        color: var(--active-color);
        background: rgba(66, 135, 245, .1);
        cursor: pointer;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        border-left: none;
        font-size: var(--fz-sm);   
        border-bottom: 2px solid var(--light-color);
        width: var(--tab-width);
    }

    &.active {
        color: var(--active-color);
        background: rgba(66, 135, 245, .1);
    }
`

interface YearActiveBarInterface {
    index: number
}

export const YearActiveBar = styled.div<YearActiveBarInterface>`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    width: 2px;
    height: var(--tab-height);
    border-radius: var(--border-radius);
    background: var(--active-color);
    transition: var(--transition);
    transform: translateY(calc(var(--tab-height) * ${props => props.index}));

    @media ${(props) => props.theme.breakpoints.sm} {
        top: auto;
        bottom: 0;
        left: 0;
        height: 2px;
        width: var(--tab-width);
        transform: translateX(calc(var(--tab-width) * ${props => props.index}));
    }
`

export const JobDescription = styled.div`
    grid-column: 5 / 12;

    padding: 0 2rem;
    color: #fefefe;

    h3 {
        margin-bottom: 2rem;
        font-size: var(--fz-lg);
    }
    p {
        margin-bottom: 2rem;
        font-size: var(--fz-sm);
    }
    ul {
        list-style: none;
        li {
            display: table;
            margin-bottom: 1rem;
            font-size: var(--fz-sm);
            line-height: 1.4;
            span {
                display: table-cell;
            }
            svg {
                display: table-cell;
            }
        }
    }

    @media ${(props) => props.theme.breakpoints.lg} {
        grid-column: 5 /13;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        grid-column: 1 / -1;
    }
    
`

export const StyledGiTriangleTarget = styled(GiTriangleTarget)`
    margin-right: 1rem;
    transform: rotateZ(90deg);
    color: var(--active-color);
    font-size: var(--fz-xs);

    @media ${(props) => props.theme.breakpoints.xs} {
        font-size: var(--fz-xxs);
    }
`

export const WorkProduct = styled.div`
    grid-column: 10 / 13;
    justify-content: center;

    @media ${(props) => props.theme.breakpoints.lg} {
        grid-column: 9 / 13;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        margin-top: 2rem;
        grid-column: 3 / 10;
    }

    .picture-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: var(--active-color);

        &:hover{
            &:before {
                background-color: var(--nav-color);
            }
            &:after {
                top: 10px;
                left: 10px
            }
        }

        &:before, &:after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            transition: var(--transition);
            border-radius: var(--border-radius); 
        }

        &:before {
            top: 0;
            left: 0;
            background-color: var(--light-color);
            mix-blend-mode: screen;
        }

        &:after {
            left: 15px;
            top: 15px;
            z-index: -1;
            border: 2px solid var(--active-color);
        }

        .img-wrapper {
            position: relative;
            border-radius: var(--border-radius);
            mix-blend-mode: multiply;
            filter: grayscale(100%) contrast(1);
            transition: var(--transition);

            width: 100%;
            height: 100%;
            vertical-align: middle;

            img {
                max-width: 100%;
                max-height: 100%;
                transform: translateZ(0);
                transition: opacity .25s linear;
                will-change: opacity;
            }
        }

    }
`