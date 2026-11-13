// Copyright (c) Robert Calvert. MIT License.
// See LICENSE file in the project root for full license information.

import type { HtmlTag } from "../core/tags.js";
import type { Attributes } from "../core/attributes.js";

import { renderAttributes } from "./attributes.js";

// Renders an HTML opening tag with its attributes
export function renderOpeningTag(tag: HtmlTag, attrs: Attributes): string {
    return `<${tag}${renderAttributes(attrs)}>`;
}

// Renders an HTML closing tag
export function renderClosingTag(tag: HtmlTag): string {
    return `</${tag}>`;
}

// Renders an HTML elements opening tag
export function renderElement(tag: HtmlTag, attrs: Attributes): string {
    return renderOpeningTag(tag, attrs);
}
