import Component, { html, css, define } from "zen";
import { useTitle } from "../core/utils";
import { TEXT, PADDING, GAP, FONT } from "../styles";
import "../elements/logo";

function styles() {
    return css /*css*/ `
		* {
			box-sizing: border-box;
		}
		:host {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			width: 100%;
			padding: ${PADDING.base};
			margin-top: 5rem;
			gap: ${GAP.extraLarge};
		}
		zg-logo {
			width: 100px;
			height: 100px;
		}
		header {
			font-size: ${TEXT.XXXXLarge};
			font-weight: ${FONT.XXXXXLarge};
			text-align: center;
			width: 100%;
		}
		@media (min-width: 768px) {
			zg-logo {
				width: 200px;
				height: 200px;
			}
			header {
				font-size: ${TEXT.XXXXXLarge};
			}
		}
	`;
}

function mounted() {
    useTitle("Page not found");
}

function render() {
    return html /*html*/ `
		<zg-logo></zg-logo>
		<header>
			Page dosn't exists.
		</header>
	`;
}

export default define("zg-not-found-view", Component({ mounted, styles, render }));