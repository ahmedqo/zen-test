import Component, { define, css } from 'zen';
import { COLOR, RADIUS } from '../styles';

function styles() {
    return css /*css*/ `
        * {
            box-sizing: border-box;
        }
        :host {
            display: inline-flex;
            width: 20px;
            height: 20px;
            position: relative;
            cursor: pointer;
            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 100%;
                height: 3px;
                background-color: ${COLOR.Prime};
                box-shadow: 0 -6px ${COLOR.Prime}, 0 6px ${COLOR.Prime};
                border-radius: ${RADIUS.round};
            }
        }
        @media (min-width: 768px) {
            :host {
                display: none;
            }
        }
    `;
}

define("zg-navbar-trigger", Component({ styles }));