import Component, { when, html, css, define } from "zen";
import { COLOR, FONT, PADDING, RADIUS, TEXT } from "../styles";

var props = {
    round: null,
    color: null,
    bg: null,
};

function styles() {
    return css /*css*/ `
        @mixin vars {
			background: ${when(this.props.bg, this.props.bg, COLOR.Prime)};
            color: ${when(this.props.color, this.props.color, COLOR.White)};
			border-radius: ${when(this.props.round, RADIUS.round, RADIUS.small)};
            font-size: ${TEXT.large};
            font-weight: ${FONT.XXXLarge};
            padding: 0 ${PADDING.base};
        }
		* {
			box-sizing: border-box;
		}
		:host {
            justify-content: center;
            align-items: center;
            cursor: pointer;
			display: flex;
            @include vars;
            height: 44px;
			width: 100%;
            &(:hover) {
                box-shadow: 2px 2px 4px ${COLOR.Shade};
            }
		}
	`;
}

function render() {
    return html /*html*/ `
        <slot></slot>
	`;
}

define("zg-button", Component({ props, styles, render }));