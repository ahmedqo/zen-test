import Component, { when, html, css, map, define, ref } from "zen";
import { useRoute } from "../core/utils";
import Router from "zen/router";
import "./navbar-trigger";
import "./navbar-list";
import "./navbar-link";
import "./div-wrapper";
import "./logo-text";
import "./glass";

var Links = [
    { to: "/products", label: "products" },
    { to: "/orders", label: "orders" },
];

var props = {
    current: "",
};

var state = {
    list: ref(),
};

var logic = {
    click() {
        Router.goto(Router.url("home"));
    },
    open() {
        this.state.list.current.state.active = true;
    },
    close(e) {
        this.state.list.current.state.active = false;
        this.current = e.target.to;
    },
};

function styles() {
    return css /*css*/ `
		* {
			box-sizing: border-box;
		}
		:host {
			display: block;
			z-index: 9999;
			position: sticky;
			top: 0;
		}
		zg-glass-wrapper {
			border-top: unset;
			border-left: unset;
			border-right: unset;
		}
		zg-wrapper {
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
		}
		zg-logo-text {
			cursor: pointer;
		}
	`;
}

function render() {
    return html /*html*/ `
		<zg-glass-wrapper blur=${2}>
			<zg-wrapper>
				<zg-logo-text @click=${this.logic.click}></zg-logo-text>
				<zg-navbar-trigger @click="${this.logic.open}"></zg-navbar-trigger>
				<zg-navbar-list ref="${this.state.list}">
					${map(
						Links,
						(link) => html/*html*/ `
							<zg-navbar-link to="${link.to}" @push="${this.logic.close}" active="${when(this.props.current === link.to, true)}">
								${link.label}
							</zg-navbar-link>
						`
					)}
					<zg-navbar-link
						to=${"/"}
						@push="${(e) => {
							this.logic.close(e);
							useRoute(0);
						}}"
					>
						logout
					</zg-navbar-link>
				</zg-navbar-list>
			</zg-wrapper>
		</zg-glass-wrapper>
	`;
}

export default define("zg-navbar", Component({ props, state, logic, styles, render }));