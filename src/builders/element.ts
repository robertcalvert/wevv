// Copyright (c) Robert Calvert. MIT License.
// See LICENSE file in the project root for full license information.

import type { HtmlTag } from "../core/tags.js";
import type { ElementNode } from "../core/node.js";
import type { AttributeInput, Attributes } from "../core/attributes.js";

import type { Maybe } from "../core/maybe.js";

import { renderElement } from "../renderer/element.js";

// Supported class name values (can be omitted)
export type ClassValue = Maybe<
    | string
    | ClassValue[]
>;

// Base builder for individual elements
export class ElementBuilder<T extends HtmlTag> implements ElementNode {
    // Attributes assigned to this element
    protected attrs: Attributes = {};

    // Creates a new element builder
    constructor(public readonly tag: T) { }

    // Specifies a unique id for an element
    id(value: Maybe<string>): this {
        return this.attribute("id", value);
    }

    // Specifies the language of the elements content
    lang(value: Maybe<string>): this {
        return this.attribute("lang", value);
    }

    // Specifies one or more class names for an element
    class(...values: ClassValue[]): this {
        // Collect valid class names into a flat array
        const tokens: string[] = [];

        // Recursively process each value
        const add = (value: ClassValue): void => {
            if (typeof value === "string") {
                tokens.push(value);

            } else if (Array.isArray(value)) {
                value.forEach(add); // Recurse into nested arrays
            }
        };

        // Process all the class values
        values.forEach(add);

        return this.attribute("class", tokens);
    }

    // Sets an attribute on the element
    protected attribute(name: string, value: AttributeInput): this {
        // Remove the attribute when the value is null, undefined or false
        if (value == null || value === false) {
            delete this.attrs[name];
            return this;
        }

        // Join string values into a single space separated string
        if (Array.isArray(value)) {
            value = value
                .flatMap(v => typeof v === "string" ? [v.trim()] : [])
                .filter(Boolean)
                .join(" ");

            // Remove the attribute when no valid values remain
            if (!value) {
                delete this.attrs[name];
                return this;
            }
        }

        // Store the attribute value
        this.attrs[name] = value;

        return this;
    }

    // Renders the element's opening HTML tag
    render(): string {
        return renderElement(this.tag, this.attrs);
    }
}
