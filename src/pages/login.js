import Component, { html, css, define, ref } from "zen";
import { useRoute, useTitle } from "../core/utils";
import { GAP, PADDING, RADIUS } from "../styles";
import Verify, { exist } from "../core/validator";
import "../elements/logo-text-column";
import "../elements/navbar-trigger";
import "../elements/navbar-list";
import "../elements/navbar-link";
import "../elements/div-wrapper";
import "../elements/input-text";
import "../elements/button";
import "../elements/glass";

var state = {
    username: ref(),
    password: ref(),
};

var logic = {
    login(e) {
        var procced = true,
            message = "",
            refs = {
                username: this.state.username,
                password: this.state.password,
            };
        for (const c in refs) {
            const { type } = Verify(refs[c].current.value, exist);
            procced = type === "success";
        }
        if (procced) {
            // fetch dynamic data from database
            if (this.state.username.current.value !== "admin") {
                this.state.username.current.info = "error";
                procced = false;
            }
            if (this.state.password.current.value !== "admin") {
                this.state.password.current.info = "error";
                procced = false;
            }
            if (procced) useRoute(1);
            else message = "data is not valid";
        } else message = "all fields are required";
        // display a toasted message;
        message.length && console.log(message);
    },
};

function styles() {
    return css /*css*/ `
		* {
			box-sizing: border-box;
		}
		:host {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100vh;
			padding: ${PADDING.base};
		}
		zg-glass-wrapper {
			border-radius: ${RADIUS.small};
			width: 100%;
		}
		zg-wrapper {
			display: flex;
			flex-flow: column;
			gap: ${GAP.base};
			padding: ${PADDING.base};
		}
		zg-logo-text-column {
			cursor: pointer;
			margin: 0 auto;
		}
		@media (min-width: 768px) {
			zg-glass-wrapper {
				max-width: 500px;
			}
		}
	`;
}

function render() {
    useTitle("Login");
    return html /*html*/ `
		<zg-glass-wrapper blur=${2}>
			<zg-wrapper>
				<zg-logo-text-column></zg-logo-text-column>
				<zg-input-text ref="${this.state.username}" label=${"username"}></zg-input-text>
				<zg-input-text ref="${this.state.password}" type=${"password"} label=${"password"}></zg-input-text>
				<zg-button @click="${this.logic.login}">Sign in</zg-button>
			</zg-wrapper>
		</zg-glass-wrapper>
	`;
}

export default define("zg-login", Component({ state, logic, styles, render }));