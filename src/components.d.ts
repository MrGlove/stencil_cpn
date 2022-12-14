/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface GlsAvatar {
        "avatarShape": string;
        "avatarSize": string;
        "avatarType": string;
    }
    interface GlsBacktop {
    }
    interface GlsBadge {
        "badgeColor": string;
        "badgeContent": string;
        "badgeHostText": string;
        "badgeMax": number;
        "changeNum": (index: number) => Promise<void>;
    }
    interface GlsButton {
        "buttonRadius": string;
        "buttonSize": string;
        "buttonText": string;
        "buttonType": string;
        "changeState": (index: number) => Promise<void>;
    }
    interface GlsCheckbox {
        "checkboxColor": string;
        "checkboxName": string;
        "checkboxStyle": string;
        "itemChecked": boolean;
        "itemId": string;
        "itemText": string;
    }
    interface GlsCollapse {
        "changeMainInfo": (index: number) => Promise<void>;
        "clpsTitle": string;
        "currentState": number;
        "deleteLine": () => Promise<void>;
        "rl": Array<string>;
        "stateList": string;
    }
    interface GlsDialog {
        "closeDialog": () => Promise<void>;
        "deliverdata": object;
        "showDialog": () => Promise<void>;
    }
    interface GlsDivider {
        "dividerColor": string;
        "dividerLength": string;
        "dividerSize": string;
    }
    interface GlsField {
        "inputIcon": string;
        "inputText": string;
        "labelText": string;
        "required": boolean;
    }
    interface GlsIcon {
        "iconColor": string;
        "iconSize": string;
        "iconStyle": string;
    }
    interface GlsLink {
        "linkText": string;
        "linkType": string;
        "linkUnderline": boolean;
    }
    interface GlsLoading {
        "loadDone": (index: number) => Promise<void>;
    }
    interface GlsMenu {
        "closemenu": (index: number) => Promise<void>;
        "showmenu": (index: number) => Promise<void>;
    }
    interface GlsNotification {
        "notificationPosition": string;
        "notificationText": string;
        "showNotify": () => Promise<void>;
    }
    interface GlsPagination {
        "paginationStyle": string;
    }
    interface GlsProgress {
        "changeData": (index: number) => Promise<void>;
        "progressColor": string;
        "progressPercent": number;
    }
    interface GlsRadio {
        "changeChecked": (index: number) => Promise<void>;
        "itemChecked": boolean;
        "itemId": string;
        "itemText": string;
        "radioColor": string;
        "radioName": string;
        "radioStyle": string;
    }
    interface GlsSelect {
    }
    interface GlsSwitch {
        "switchChecked": boolean;
        "switchColor": string;
        "switchDisabled": boolean;
        "switchSize": string;
        "switchText": string;
    }
    interface GlsTag {
        "tagContent": string;
        "tagCross": boolean;
        "tagStyle": string;
    }
    interface GlsTitle {
        "titleLevel": string;
        "titleText": string;
    }
    interface MyComponent {
        "first": string;
        "last": string;
        "middle": string;
    }
    interface TestCpnfirst {
        "tcolor": string;
        "ttext": string;
    }
}
export interface GlsAvatarCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGlsAvatarElement;
}
export interface GlsBacktopCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGlsBacktopElement;
}
export interface GlsBadgeCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGlsBadgeElement;
}
export interface GlsButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGlsButtonElement;
}
export interface GlsCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGlsCheckboxElement;
}
export interface GlsDialogCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGlsDialogElement;
}
export interface GlsNotificationCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGlsNotificationElement;
}
export interface GlsRadioCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGlsRadioElement;
}
export interface GlsSwitchCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGlsSwitchElement;
}
export interface GlsTagCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGlsTagElement;
}
declare global {
    interface HTMLGlsAvatarElement extends Components.GlsAvatar, HTMLStencilElement {
    }
    var HTMLGlsAvatarElement: {
        prototype: HTMLGlsAvatarElement;
        new (): HTMLGlsAvatarElement;
    };
    interface HTMLGlsBacktopElement extends Components.GlsBacktop, HTMLStencilElement {
    }
    var HTMLGlsBacktopElement: {
        prototype: HTMLGlsBacktopElement;
        new (): HTMLGlsBacktopElement;
    };
    interface HTMLGlsBadgeElement extends Components.GlsBadge, HTMLStencilElement {
    }
    var HTMLGlsBadgeElement: {
        prototype: HTMLGlsBadgeElement;
        new (): HTMLGlsBadgeElement;
    };
    interface HTMLGlsButtonElement extends Components.GlsButton, HTMLStencilElement {
    }
    var HTMLGlsButtonElement: {
        prototype: HTMLGlsButtonElement;
        new (): HTMLGlsButtonElement;
    };
    interface HTMLGlsCheckboxElement extends Components.GlsCheckbox, HTMLStencilElement {
    }
    var HTMLGlsCheckboxElement: {
        prototype: HTMLGlsCheckboxElement;
        new (): HTMLGlsCheckboxElement;
    };
    interface HTMLGlsCollapseElement extends Components.GlsCollapse, HTMLStencilElement {
    }
    var HTMLGlsCollapseElement: {
        prototype: HTMLGlsCollapseElement;
        new (): HTMLGlsCollapseElement;
    };
    interface HTMLGlsDialogElement extends Components.GlsDialog, HTMLStencilElement {
    }
    var HTMLGlsDialogElement: {
        prototype: HTMLGlsDialogElement;
        new (): HTMLGlsDialogElement;
    };
    interface HTMLGlsDividerElement extends Components.GlsDivider, HTMLStencilElement {
    }
    var HTMLGlsDividerElement: {
        prototype: HTMLGlsDividerElement;
        new (): HTMLGlsDividerElement;
    };
    interface HTMLGlsFieldElement extends Components.GlsField, HTMLStencilElement {
    }
    var HTMLGlsFieldElement: {
        prototype: HTMLGlsFieldElement;
        new (): HTMLGlsFieldElement;
    };
    interface HTMLGlsIconElement extends Components.GlsIcon, HTMLStencilElement {
    }
    var HTMLGlsIconElement: {
        prototype: HTMLGlsIconElement;
        new (): HTMLGlsIconElement;
    };
    interface HTMLGlsLinkElement extends Components.GlsLink, HTMLStencilElement {
    }
    var HTMLGlsLinkElement: {
        prototype: HTMLGlsLinkElement;
        new (): HTMLGlsLinkElement;
    };
    interface HTMLGlsLoadingElement extends Components.GlsLoading, HTMLStencilElement {
    }
    var HTMLGlsLoadingElement: {
        prototype: HTMLGlsLoadingElement;
        new (): HTMLGlsLoadingElement;
    };
    interface HTMLGlsMenuElement extends Components.GlsMenu, HTMLStencilElement {
    }
    var HTMLGlsMenuElement: {
        prototype: HTMLGlsMenuElement;
        new (): HTMLGlsMenuElement;
    };
    interface HTMLGlsNotificationElement extends Components.GlsNotification, HTMLStencilElement {
    }
    var HTMLGlsNotificationElement: {
        prototype: HTMLGlsNotificationElement;
        new (): HTMLGlsNotificationElement;
    };
    interface HTMLGlsPaginationElement extends Components.GlsPagination, HTMLStencilElement {
    }
    var HTMLGlsPaginationElement: {
        prototype: HTMLGlsPaginationElement;
        new (): HTMLGlsPaginationElement;
    };
    interface HTMLGlsProgressElement extends Components.GlsProgress, HTMLStencilElement {
    }
    var HTMLGlsProgressElement: {
        prototype: HTMLGlsProgressElement;
        new (): HTMLGlsProgressElement;
    };
    interface HTMLGlsRadioElement extends Components.GlsRadio, HTMLStencilElement {
    }
    var HTMLGlsRadioElement: {
        prototype: HTMLGlsRadioElement;
        new (): HTMLGlsRadioElement;
    };
    interface HTMLGlsSelectElement extends Components.GlsSelect, HTMLStencilElement {
    }
    var HTMLGlsSelectElement: {
        prototype: HTMLGlsSelectElement;
        new (): HTMLGlsSelectElement;
    };
    interface HTMLGlsSwitchElement extends Components.GlsSwitch, HTMLStencilElement {
    }
    var HTMLGlsSwitchElement: {
        prototype: HTMLGlsSwitchElement;
        new (): HTMLGlsSwitchElement;
    };
    interface HTMLGlsTagElement extends Components.GlsTag, HTMLStencilElement {
    }
    var HTMLGlsTagElement: {
        prototype: HTMLGlsTagElement;
        new (): HTMLGlsTagElement;
    };
    interface HTMLGlsTitleElement extends Components.GlsTitle, HTMLStencilElement {
    }
    var HTMLGlsTitleElement: {
        prototype: HTMLGlsTitleElement;
        new (): HTMLGlsTitleElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLTestCpnfirstElement extends Components.TestCpnfirst, HTMLStencilElement {
    }
    var HTMLTestCpnfirstElement: {
        prototype: HTMLTestCpnfirstElement;
        new (): HTMLTestCpnfirstElement;
    };
    interface HTMLElementTagNameMap {
        "gls-avatar": HTMLGlsAvatarElement;
        "gls-backtop": HTMLGlsBacktopElement;
        "gls-badge": HTMLGlsBadgeElement;
        "gls-button": HTMLGlsButtonElement;
        "gls-checkbox": HTMLGlsCheckboxElement;
        "gls-collapse": HTMLGlsCollapseElement;
        "gls-dialog": HTMLGlsDialogElement;
        "gls-divider": HTMLGlsDividerElement;
        "gls-field": HTMLGlsFieldElement;
        "gls-icon": HTMLGlsIconElement;
        "gls-link": HTMLGlsLinkElement;
        "gls-loading": HTMLGlsLoadingElement;
        "gls-menu": HTMLGlsMenuElement;
        "gls-notification": HTMLGlsNotificationElement;
        "gls-pagination": HTMLGlsPaginationElement;
        "gls-progress": HTMLGlsProgressElement;
        "gls-radio": HTMLGlsRadioElement;
        "gls-select": HTMLGlsSelectElement;
        "gls-switch": HTMLGlsSwitchElement;
        "gls-tag": HTMLGlsTagElement;
        "gls-title": HTMLGlsTitleElement;
        "my-component": HTMLMyComponentElement;
        "test-cpnfirst": HTMLTestCpnfirstElement;
    }
}
declare namespace LocalJSX {
    interface GlsAvatar {
        "avatarShape"?: string;
        "avatarSize"?: string;
        "avatarType"?: string;
        "onLoadfail"?: (event: GlsAvatarCustomEvent<Object>) => void;
    }
    interface GlsBacktop {
        "onGototop"?: (event: GlsBacktopCustomEvent<object>) => void;
    }
    interface GlsBadge {
        "badgeColor"?: string;
        "badgeContent"?: string;
        "badgeHostText"?: string;
        "badgeMax"?: number;
        "onBadgehide"?: (event: GlsBadgeCustomEvent<Object>) => void;
    }
    interface GlsButton {
        "buttonRadius"?: string;
        "buttonSize"?: string;
        "buttonText"?: string;
        "buttonType"?: string;
        "onButtonClicked"?: (event: GlsButtonCustomEvent<Object>) => void;
    }
    interface GlsCheckbox {
        "checkboxColor"?: string;
        "checkboxName"?: string;
        "checkboxStyle"?: string;
        "itemChecked"?: boolean;
        "itemId"?: string;
        "itemText"?: string;
        "onCanceled"?: (event: GlsCheckboxCustomEvent<Object>) => void;
        "onSelected"?: (event: GlsCheckboxCustomEvent<Object>) => void;
    }
    interface GlsCollapse {
        "clpsTitle"?: string;
        "currentState"?: number;
        "rl"?: Array<string>;
        "stateList"?: string;
    }
    interface GlsDialog {
        "deliverdata"?: object;
        "onNewDataSubmitted"?: (event: GlsDialogCustomEvent<Object>) => void;
    }
    interface GlsDivider {
        "dividerColor"?: string;
        "dividerLength"?: string;
        "dividerSize"?: string;
    }
    interface GlsField {
        "inputIcon"?: string;
        "inputText"?: string;
        "labelText"?: string;
        "required"?: boolean;
    }
    interface GlsIcon {
        "iconColor"?: string;
        "iconSize"?: string;
        "iconStyle"?: string;
    }
    interface GlsLink {
        "linkText"?: string;
        "linkType"?: string;
        "linkUnderline"?: boolean;
    }
    interface GlsLoading {
    }
    interface GlsMenu {
    }
    interface GlsNotification {
        "notificationPosition"?: string;
        "notificationText"?: string;
        "onNotiClosed"?: (event: GlsNotificationCustomEvent<object>) => void;
    }
    interface GlsPagination {
        "paginationStyle"?: string;
    }
    interface GlsProgress {
        "progressColor"?: string;
        "progressPercent"?: number;
    }
    interface GlsRadio {
        "itemChecked"?: boolean;
        "itemId"?: string;
        "itemText"?: string;
        "onCanceled"?: (event: GlsRadioCustomEvent<Object>) => void;
        "onSelected"?: (event: GlsRadioCustomEvent<Object>) => void;
        "radioColor"?: string;
        "radioName"?: string;
        "radioStyle"?: string;
    }
    interface GlsSelect {
    }
    interface GlsSwitch {
        "onSwitchTofalse"?: (event: GlsSwitchCustomEvent<Object>) => void;
        "onSwitchTotrue"?: (event: GlsSwitchCustomEvent<Object>) => void;
        "switchChecked"?: boolean;
        "switchColor"?: string;
        "switchDisabled"?: boolean;
        "switchSize"?: string;
        "switchText"?: string;
    }
    interface GlsTag {
        "onTagclicked"?: (event: GlsTagCustomEvent<Object>) => void;
        "onTagclosed"?: (event: GlsTagCustomEvent<Object>) => void;
        "tagContent"?: string;
        "tagCross"?: boolean;
        "tagStyle"?: string;
    }
    interface GlsTitle {
        "titleLevel"?: string;
        "titleText"?: string;
    }
    interface MyComponent {
        "first"?: string;
        "last"?: string;
        "middle"?: string;
    }
    interface TestCpnfirst {
        "tcolor"?: string;
        "ttext"?: string;
    }
    interface IntrinsicElements {
        "gls-avatar": GlsAvatar;
        "gls-backtop": GlsBacktop;
        "gls-badge": GlsBadge;
        "gls-button": GlsButton;
        "gls-checkbox": GlsCheckbox;
        "gls-collapse": GlsCollapse;
        "gls-dialog": GlsDialog;
        "gls-divider": GlsDivider;
        "gls-field": GlsField;
        "gls-icon": GlsIcon;
        "gls-link": GlsLink;
        "gls-loading": GlsLoading;
        "gls-menu": GlsMenu;
        "gls-notification": GlsNotification;
        "gls-pagination": GlsPagination;
        "gls-progress": GlsProgress;
        "gls-radio": GlsRadio;
        "gls-select": GlsSelect;
        "gls-switch": GlsSwitch;
        "gls-tag": GlsTag;
        "gls-title": GlsTitle;
        "my-component": MyComponent;
        "test-cpnfirst": TestCpnfirst;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "gls-avatar": LocalJSX.GlsAvatar & JSXBase.HTMLAttributes<HTMLGlsAvatarElement>;
            "gls-backtop": LocalJSX.GlsBacktop & JSXBase.HTMLAttributes<HTMLGlsBacktopElement>;
            "gls-badge": LocalJSX.GlsBadge & JSXBase.HTMLAttributes<HTMLGlsBadgeElement>;
            "gls-button": LocalJSX.GlsButton & JSXBase.HTMLAttributes<HTMLGlsButtonElement>;
            "gls-checkbox": LocalJSX.GlsCheckbox & JSXBase.HTMLAttributes<HTMLGlsCheckboxElement>;
            "gls-collapse": LocalJSX.GlsCollapse & JSXBase.HTMLAttributes<HTMLGlsCollapseElement>;
            "gls-dialog": LocalJSX.GlsDialog & JSXBase.HTMLAttributes<HTMLGlsDialogElement>;
            "gls-divider": LocalJSX.GlsDivider & JSXBase.HTMLAttributes<HTMLGlsDividerElement>;
            "gls-field": LocalJSX.GlsField & JSXBase.HTMLAttributes<HTMLGlsFieldElement>;
            "gls-icon": LocalJSX.GlsIcon & JSXBase.HTMLAttributes<HTMLGlsIconElement>;
            "gls-link": LocalJSX.GlsLink & JSXBase.HTMLAttributes<HTMLGlsLinkElement>;
            "gls-loading": LocalJSX.GlsLoading & JSXBase.HTMLAttributes<HTMLGlsLoadingElement>;
            "gls-menu": LocalJSX.GlsMenu & JSXBase.HTMLAttributes<HTMLGlsMenuElement>;
            "gls-notification": LocalJSX.GlsNotification & JSXBase.HTMLAttributes<HTMLGlsNotificationElement>;
            "gls-pagination": LocalJSX.GlsPagination & JSXBase.HTMLAttributes<HTMLGlsPaginationElement>;
            "gls-progress": LocalJSX.GlsProgress & JSXBase.HTMLAttributes<HTMLGlsProgressElement>;
            "gls-radio": LocalJSX.GlsRadio & JSXBase.HTMLAttributes<HTMLGlsRadioElement>;
            "gls-select": LocalJSX.GlsSelect & JSXBase.HTMLAttributes<HTMLGlsSelectElement>;
            "gls-switch": LocalJSX.GlsSwitch & JSXBase.HTMLAttributes<HTMLGlsSwitchElement>;
            "gls-tag": LocalJSX.GlsTag & JSXBase.HTMLAttributes<HTMLGlsTagElement>;
            "gls-title": LocalJSX.GlsTitle & JSXBase.HTMLAttributes<HTMLGlsTitleElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "test-cpnfirst": LocalJSX.TestCpnfirst & JSXBase.HTMLAttributes<HTMLTestCpnfirstElement>;
        }
    }
}
