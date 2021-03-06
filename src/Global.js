import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --logo:        'PT Sans', sans-serif;
        --base-font:   'Open Sans', sans-serif;
        --black:       rgb(0, 0, 0);
        --white:       #fff;
        --purple:      #FFC0FF;
        --green:       #C0FFC0;
        font-size:     calc(1rem + ((1vw - 0.3rem) * 0.2222));
        font-weight:   normal;
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    *, ::before, ::after {
        box-sizing: inherit;
        font-size: inherit;
        margin: 0px;
        padding: 0px;
    }

    body {
        // background: linear-gradient(240.5deg, rgb(17, 18, 22) 0%, var(--black) 82.84%);
        background: #181818;
        color: var(--white);
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizelegibility;
        cursor: default;
        font-family: var(--base-font);
    }

    .github {
        margin-left: auto;
        width: 34px;
        height: 34px;
        display: block;
        background: var(--white);
        border-radius: 50%;
        padding: 2px;
        :after {
            display: none;
        }
      }

    p {
        margin-bottom: 1rem;
    }

    a {
        position: relative;
        display: inline-block;
        color: var(--purple);
        font-weight: bold;
        text-decoration: none;
        &:hover {
            .HoverText {
                clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
            }
            &:after {
                transform: translateY(-0.25em);
                opacity: 0;
                transition: transform 250ms ease 0s, opacity 450ms ease 0s;
            }
        }
        &:after {
            content: "";
            position: absolute;
            left: 0px;
            right: 0px;
            bottom: 0px;
            height: 2px;
            background-color: var(--purple);
            border-radius: 2px;
            transition: transform 250ms ease 200ms, opacity 450ms ease 200ms;
        }
    }

    .MainText {
        display: inline-block;
        position: relative;
        z-index: 1;
        color: var(--green);
    }

    .HoverText {
        display: inline-block;
        position: absolute;
        z-index: 2;
        left: 0px;
        user-select: none;
        clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
        transition: clip-path 500ms ease 0s;
    }

    button {
        padding: 0;
        border: none;
        outline: none;
        font: inherit;
        color: inherit;
        background: none;
    }

    ::selection {
        background-color: var(--green);
        color: var(--white);
    }

    @keyframes intro {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes introRight {
        0% {
            opacity: 0;
            transform: translateX(20px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

export default GlobalStyle;