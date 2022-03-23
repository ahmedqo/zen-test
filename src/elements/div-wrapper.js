import Component, { define, html, css } from 'zen';
import { PADDING } from '../styles';

function styles() {
    return css /*css*/ `
        * {
            box-sizing: border-box;
        }
        :host {
            display: block;
            width: 100%;
            min-height: 50px;
            padding: ${PADDING.small} ${PADDING.base};
            max-width: 1200px;
            margin: 0 auto;
        }
    `;
}

function render() {
    return html /*html*/ `
        <slot></slot>
    `;
}

define("zg-wrapper", Component({ styles, render }));