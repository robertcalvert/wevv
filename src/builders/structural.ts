// Copyright (c) Robert Calvert. MIT License.
// See LICENSE file in the project root for full license information.

import type { ElementNode } from "../core/node.js";
import type { ElementChild } from "../core/node.js";

import { appendChildren } from "./container.js";

import { renderChildren } from "../renderer/children.js";

// Groups children that render without a wrapping element
export class FragmentBuilder implements ElementNode {
    // Child nodes belonging to this fragment
    protected children: ElementChild[] = [];

    // Adds child nodes to the fragment
    append(...children: ElementChild[]): this {
        appendChildren(this.children, children);
        return this;
    }

    // Renders the children
    render(): string {
        return renderChildren(this.children);
    }
}
