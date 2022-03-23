import Component, { when, define, html, css } from "zen";
import { BACKGROUND, COLOR } from "../styles";

var props = {
    blur: null,
};

function styles() {
    return css /*css*/ `
		* {
			box-sizing: border-box;
		}
		:host {
			display: block;
			box-shadow: 2px 2px 4px ${COLOR.Shade};
			background: ${BACKGROUND.White};
            border: 1px solid #F1F1F160;
			backdrop-filter: ${when(this.props.blur, "blur(" + this.props.blur + "px)")};
		}
	`;
}

function render() {
    return html /*html*/ `
		<slot></slot>
	`;
}

define("zg-glass-wrapper", Component({ props, styles, render }));