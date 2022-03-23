import Component, { define, html, css, keyframes } from "zen";
import { BACKGROUND } from "../styles";
import "./logo";

function styles() {
    var scale = keyframes /*css*/ `
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.5);
        }
    `;

    return css /*css*/ `
		* {
			box-sizing: border-box;
		}
		:host {
			display: flex;
			position: fixed;
			inset: 0;
			align-items: center;
			justify-content: center;
			background: ${BACKGROUND.Black};
			z-index: 9999;
		}
		zg-logo {
			display: block;
			width: 60px;
			animation: ${scale} 250ms ease-in-out alternate infinite;
		}
	`;
}

function render() {
    return html /*html*/ ` <zg-logo></zg-logo> `;
}

export default define("zg-loader", Component({ styles, render }));