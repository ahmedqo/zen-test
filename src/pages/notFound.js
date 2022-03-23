import { useTitle } from '../core/utils';
import { html } from 'zen';

export default function() {
    useTitle("Page not found");
    return html /*html*/ `
        <div class="app-wrapper not-found-wrapper">
            <div class="not-found-text">Page Not Found</div>
        </div>
    `;
}