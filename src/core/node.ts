// Copyright (c) Robert Calvert. MIT License.
// See LICENSE file in the project root for full license information.

// Represents an HTML element that can be rendered
export interface ElementNode {
    render(): string;
}

// Represents a valid child node
export type ElementChild = string | number | ElementNode;

// Checks whether a value implements the ElementNode interface
export function isElementNode(value: unknown): value is ElementNode {
    return (
        typeof value === "object" &&
        value !== null &&
        "render" in value &&
        typeof value.render === "function"
    );
}
