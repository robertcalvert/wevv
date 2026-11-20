// Copyright (c) Robert Calvert. MIT License.
// See LICENSE file in the project root for full license information.

import type { Maybe } from "./maybe.js";

// Represents an HTML element that can be rendered
export interface ElementNode {
    render(): string;
}

// Represents a value that can be appended as a child (can be omitted)
export type ElementChild = Maybe<
    | string
    | number
    | ElementNode
    | readonly ElementChild[]
>;

// Checks whether a value implements the ElementNode interface
export function isElementNode(value: unknown): value is ElementNode {
    return (
        typeof value === "object" &&
        value !== null &&
        "render" in value &&
        typeof value.render === "function"
    );
}
