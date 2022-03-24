import Component, { html, css, define } from "zen";
import { useTitle } from "../core/utils";
import { TEXT, FONT } from "../styles";
import "../elements/div-wrapper";

function styles() {
    return css /*css*/ `
		* {
			box-sizing: border-box;
		}
		header {
			font-size: ${TEXT.XXXXLarge};
			font-weight: ${FONT.XXXXXLarge};
			width: 100%;
		}
		@media (min-width: 768px) {
			header {
				font-size: ${TEXT.XXXXXLarge};
			}
		}
	`;
}

function mounted() {
    useTitle("Products");
}

function render() {
    return html /*html*/ `
		<zg-wrapper>
			<header>
				Products page.
			</header>
		</zg-wrapper>
	`;
}

export default define("zg-products-view", Component({ mounted, styles, render }));