// Copyright (c) Robert Calvert. MIT License.
// See LICENSE file in the project root for full license information.

import type { ContainerTag } from "../core/tags.js";
import type { ElementChild } from "../core/node.js";

import { isElementNode } from "../core/node.js";

import { ElementBuilder } from "./element.js";

import {
    renderOpeningTag,
    renderClosingTag
} from "../renderer/element.js";

import { renderChildren } from "../renderer/children.js";

// Builder for HTML container elements
export class ContainerBuilder<T extends ContainerTag> extends ElementBuilder<T> {
    // Child nodes belonging to this element
    protected children: ElementChild[] = [];

    // Adds child nodes to the container
    append(...children: ElementChild[]): this {
        for (const child of children) {
            if (child === false || child == null) continue; // Drop conditionals
            this.children.push(
                isElementNode(child) ? child : String(child)
            );
        }

        return this;
    }

    // Renders the opening tag, children and closing tag
    override render(): string {
        return (
            renderOpeningTag(this.tag, this.attrs) +
            renderChildren(this.children) +
            renderClosingTag(this.tag)
        );
    }
}
