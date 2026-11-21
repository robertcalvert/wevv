// Copyright (c) Robert Calvert. MIT License.
// See LICENSE file in the project root for full license information.

import type { Attributes } from "../core/attributes.js";

import { escapeAttr } from "../core/escaping.js";

// Serializes attributes into an HTML compatible string
export function renderAttributes(attrs: Attributes): string {
    let result = "";

    for (const [key, value] of Object.entries(attrs)) {
        result += value === true
            ? ` ${key}`
            : ` ${key}="${escapeAttr(String(value))}"`;
    }

    return result;
}
