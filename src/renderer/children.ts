// Copyright (c) Robert Calvert. MIT License.
// See LICENSE file in the project root for full license information.

import type { ElementChild } from "../core/node.js";

import { isElementNode } from "../core/node.js";
import { escapeText } from "../core/escaping.js";

// Renders child nodes into an HTML string
export function renderChildren(children: readonly ElementChild[]): string {
    let result = "";

    for (const node of children) {
        result += isElementNode(node)
            ? node.render()
            : escapeText(String(node));
    }

    return result;
}
