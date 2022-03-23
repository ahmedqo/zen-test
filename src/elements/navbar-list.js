import Component, { define, html, css, when } from 'zen';
import { BACKGROUND, COLOR, GAP, RADIUS } from '../styles';

var state = {
    active: false
}

var logic = {
    click() {
        this.state.active = !this.state.active;
    }
}

function styles() {
    return css /*css*/ `
        @mixin sm-active {
            left: 0;
            pointer-events: all;
        }
        @mixin sm-no-active {
            pointer-events: none;
            left: -200%;
        }
        * {
            box-sizing: border-box;
        }
        :host {
            display: block;
            position: fixed;
            top: 0;
        }
        main {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 0;
            width: 200px;
            height: 100vh;
            transition: left 250ms ease-in-out;
            background: ${BACKGROUND.White};
            ${when(this.state.active, `@include sm-active`, `@include sm-no-active`)};
            &::before,
            &::after {
                content: '';
                position: fixed;
                inset: 0;
                width: 100%;
                height: 100vh;
                background: ${BACKGROUND.Black};
                z-index: -1;
                transition: opacity 250ms ease-in-out;
                opacity: ${when(this.state.active, `1`, `0`)};
            }
            &::after {
                width: 200px;
                opacity: 1;
                transition: left 250ms ease-in-out;
                background: ${BACKGROUND.White};
                ${when(this.state.active, `@include sm-active`, `@include sm-no-active`)};
            }
        }
        button {
            border: unset;
            background-color: unset;
            position: fixed;
            top: ${when(this.state.active, `1rem`, `-200%`)};
            right: 1rem;
            width: 20px;
            height: 20px;
            transition: top 250ms ease-in-out;
            cursor: pointer;
            z-index: 1;
            &::before,
            &::after {
                content: '';
                top: 50%;
                left: 50%;
                width: 3px;
                height: 100%;
                background-color: ${COLOR.White};
                position: absolute;
                transform: translate(-50%, -50%) rotate(45deg);
                border-radius: ${RADIUS.round};
            }
            &::after {
                transform: translate(-50%, -50%) rotate(-45deg);
            }
        }
        @media (min-width: 768px) {
            :host {
                display: inline-block;
                width: max-content;
                position: unset;
            }
            main {
                pointer-events: all;
                position: unset;
                flex-direction: row;
                width: 100%;
                height: auto;
                gap: ${GAP.small};
                background: unset;
                &::before,
                &::after {
                    content: unset;
                }
            }
            button {
                display: none;
            }
        }
    `;
}

function render() {
    return html /*html*/ `
        <main>
            <slot></slot>
        </main>
        <button @click="${this.logic.click}"></button>
    `;
}

define("zg-navbar-list", Component({ state, logic, styles, render }));