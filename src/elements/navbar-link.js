import Component, { define, exist, html, css, when } from "zen";
import { COLOR, FONT, TEXT, PADDING, RADIUS } from "../styles";
import Router from "zen/router";

var props = {
    to: null,
    active: null,
};

var logic = {
    click(e) {
        this.makeEvent("push", {}, function() {
            this.props.to !== "false" && Router.goto(this.props.to);
        });
    },
};

function created() {
    this.addEventListener("click", this.logic.click);
}

function removed() {
    this.removeEventListener("click", this.logic.click);
}

function styles() {
    return css /*css*/ `
		@mixin sm-valid {
			color: ${COLOR.White};
			font-weight: ${FONT.XXXXXLarge};
		}
		@mixin md-valid {
			color: ${COLOR.Prime};
		}
		@mixin sm-width {
			width: 100%;
		}
		* {
			box-sizing: border-box;
		}
		:host {
			cursor: pointer;
			padding: ${PADDING.small} ${PADDING.base};
			font-size: ${TEXT.extraLarge};
			position: relative;
			z-index: 1;
			transition: all 250ms ease-in-out;
			${when(this.props.active, `@include sm-valid`, `color: ${COLOR.Black}`)};
			&::before {
				content: "";
				position: absolute;
				inset: 0;
				background-color: ${COLOR.Prime};
				z-index: -1;
				transition: width 250ms ease-in-out;
				${when(this.props.active, `@include sm-width`, `width: 0%`)};
			}
			&(:hover) {
				@include sm-valid;
			}
			&(:hover)::before {
				@include sm-width;
			}
		}
		@media (min-width: 768px) {
			:host {
				width: max-content;
				display: inline-block;
				height: 28px;
				padding: 0;
				${exist(this.props.active) && `@include md-valid;`}
				&(:hover) {
					@include md-valid;
				}
				&::before {
					height: 4px;
					left: 0;
					top: 100%;
					border-radius: ${RADIUS.round};
					${exist(this.props.active) && `@include md-width;`}
				}
			}
		}
	`;
}

function render() {
	return html/*html*/ ` <slot></slot> `;
}

define("zg-navbar-link", Component({ props, logic, created, removed, styles, render }));