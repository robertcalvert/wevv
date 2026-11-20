// Copyright (c) Robert Calvert. MIT License.
// See LICENSE file in the project root for full license information.

import type { HtmlTag } from "../core/tags.js";
import type { ElementNode } from "../core/node.js";
import type { Attributes } from "../core/attributes.js";

import type { Maybe } from "../core/maybe.js";

import { renderElement } from "../renderer/element.js";

// Supported class name values (can be omitted)
export type ClassValue = Maybe<
    | string
    | ClassValue[]
>;

// Base builder for individual HTML elements
export class ElementBuilder<T extends HtmlTag> implements ElementNode {
    // Attributes assigned to this element
    protected attrs: Attributes = {};

    // Creates a new element builder
    constructor(public readonly tag: T) { }

    // Specifies a unique id for an element
    id(value: Maybe<string>): this {
        this.attrs.id = value;
        return this;
    }

    // Specifies the language of the elements content
    lang(value: Maybe<string>): this {
        this.attrs.lang = value;
        return this;
    }

    // Specifies one or more class names for an element
    class(...values: ClassValue[]): this {
        // Collect valid class names into a flat array
        const classes: string[] = [];

        // Recursively process each value
        const add = (value: ClassValue): void => {
            if (typeof value === "string") {
                // Trim whitespace and ignore empty strings
                const trimmed = value.trim();
                if (trimmed) classes.push(trimmed);

            } else if (Array.isArray(value)) {
                value.forEach(add); // Recurse into nested arrays
            }
        };

        // Process all the class values
        values.forEach(add);

        // Join all valid class names into a single space separated string
        const result = classes.join(" ");

        // Omit empty (rather than class="")
        if (result) {
            this.attrs.class = result;
        } else {
            delete this.attrs.class;
        }

        return this;
    }

    // Renders the element's opening HTML tag
    render(): string {
        return renderElement(this.tag, this.attrs);
    }
}
