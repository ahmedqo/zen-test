import { useTitle } from '../core/utils';
import { html } from 'zen';

var cls = [
    'text:xs',
    'text:sm',
    'text:base',
    'text:lg',
    'text:xl',
    'text:2xl',
    'text:3xl',
    'text:4xl',
    'text:5xl',
    'text:6xl',
    'text:7xl',
    'text:8xl',
    'text:9xl',
]

export default function() {
    useTitle("Home");
    return html /*html*/ `
        <div class="app-wrapper">
            ${cls.map(c => html/*html*/`
                <div class="${c}">hello world</div>
            `)}
        </div>
    `;
}