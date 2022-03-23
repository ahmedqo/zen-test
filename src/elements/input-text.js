import Component, { when, html, css, define, choose, ref } from "zen";
import { COLOR, FONT, GAP, PADDING, RADIUS, TEXT } from "../styles";
import "./glass";

var props = {
    value: null,
    label: null,
    type: "text",
    round: null,
    info: null,
    show: true,
};

var state = {
    glass: ref(),
};

var logic = {
    change(e) {
        this.props.value = e.target.value;
    },
    border() {
        this.props.value.length ? (this.props.info = "success") : (this.props.info = "error");
        this.state.glass.current.style.borderColor = when(this.props.info === "success", COLOR.Suces, COLOR.Error);
    },
};

function styles() {
    return css /*css*/ `
		* {
			box-sizing: border-box;
		}
		:host {
			display: flex;
			flex-direction: column;
			gap: ${GAP.small};
		}
		label {
			display: block;
			font-size: ${TEXT.large};
			font-weight: ${FONT.XXXLarge};
			text-transform: capitalize;
		}
		input {
			border: unset;
			background: unset;
			width: 100%;
			font-size: ${TEXT.large};
			border-radius: ${RADIUS.small};
			padding: ${PADDING.small} ${PADDING.base};
			transition: box-shadow 250ms ease-in-out, outline 250ms ease-in-out;
			height: 44px;
			&::-webkit-input-placeholder {
				display: block;
				text-transform: capitalize;
			}
			&:focus {
				outline: none;
				box-shadow: 2px 2px 4px ${COLOR.Shade};
			}
			&:focus::-webkit-input-placeholder {
				display: none;
			}
		}
		zg-glass-wrapper {
			border-color: ${choose(this.props.info, {
				success: () => COLOR.Suces,
				error: () => COLOR.Error,
			})};
			border-radius: ${when(this.props.round, RADIUS.round, RADIUS.small)};
			box-shadow: unset;
		}
	`;
}

function render() {
    return html /*html*/ `
		${when(this.props.label && this.props.show, html`<label for="input">${this.props.label}</label>`)}
		<zg-glass-wrapper ref="${this.state.glass}">
			<input
				id="input"
				tabindex="-1"
				type="${this.props.type}"
				value="${this.props.value}"
				@blur="${this.logic.border}"
				@focus="${this.logic.border}"
				@input="${this.logic.change}"
				${when(this.props.label, `placeholder="${this.props.label}"`)}
			/>
		</zg-glass-wrapper>
	`;
}

export default define("zg-input-text", Component({ props, state, logic, styles, render }));