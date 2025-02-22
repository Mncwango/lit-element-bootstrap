
import { LitElement, html } from 'lit-element';
import { BsContentRebootCss, BsContentTypographyCss } from '../../content';
import { BsButtonMixin } from './bs-button-mixin';
import { BsButtonsCommonCss } from './css/bs-button-common-css';
import { BsButtonPrimaryCss } from './css/bs-button-primary-css';
import { BsButtonSecondaryCss } from './css/bs-button-secondary-css';
import { BsButtonSuccessCss } from './css/bs-button-success-css';
import { BsButtonInfoCss } from './css/bs-button-info-css';
import { BsButtonWarningCss } from './css/bs-button-warning-css';
import { BsButtonDangerCss } from './css/bs-button-danger-css';
import { BsButtonLightCss } from './css/bs-button-light-css';
import { BsButtonDarkCss } from './css/bs-button-dark-css';
import { BsButtonPrimaryOutlineCss } from './css/bs-button-primary-outline-css';
import { BsButtonSecondaryOutlineCss } from './css/bs-button-secondary-outline-css';
import { BsButtonSuccessOutlineCss } from './css/bs-button-success-outline-css';
import { BsButtonInfoOutlineCss } from './css/bs-button-info-outline-css';
import { BsButtonWarningOutlineCss } from './css/bs-button-warning-outline-css';
import { BsButtonDangerOutlineCss } from './css/bs-button-danger-outline-css';
import { BsButtonLightOutlineCss } from './css/bs-button-light-outline-css';
import { BsButtonDarkOutlineCss } from './css/bs-button-dark-outline-css';
import { BsButtonLinkCss } from './css/bs-button-link-css';
import { BsButtonBlockCss } from './css/bs-button-block-css';
import { BsButtonLargeCss } from './css/bs-button-large-css';
import { BsButtonSmallCss } from './css/bs-button-small-css';

export class BsInputButton extends BsButtonMixin(LitElement) {
    
    static get properties() {
        return {
            label: String
        };
    }
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            BsButtonsCommonCss,
            BsButtonPrimaryCss,
            BsButtonSecondaryCss,
            BsButtonSuccessCss,
            BsButtonInfoCss,
            BsButtonWarningCss,
            BsButtonDangerCss,
            BsButtonLightCss,
            BsButtonDarkCss,
            BsButtonPrimaryOutlineCss,
            BsButtonSecondaryOutlineCss,
            BsButtonSuccessOutlineCss,
            BsButtonInfoOutlineCss,
            BsButtonWarningOutlineCss,
            BsButtonDangerOutlineCss,
            BsButtonLightOutlineCss,
            BsButtonDarkOutlineCss,
            BsButtonLinkCss,
            BsButtonBlockCss,
            BsButtonLargeCss,
            BsButtonSmallCss
        ];
    }
    
    render() {
        return html`
            <input class="btn" value="${this.label}" />
        `;
    }
    
    constructor() {
        super();
        this.label = '';
    }
};

if (!window.customElements.get("bs-input-button"))  window.customElements.define('bs-input-button', BsInputButton);

