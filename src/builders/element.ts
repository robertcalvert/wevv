// Copyright (c) Robert Calvert. MIT License.
// See LICENSE file in the project root for full license information.

import type { HtmlTag } from "../core/tags.js";
import type { ElementNode } from "../core/node.js";
import type { Attributes } from "../core/attributes.js";

import { renderElement } from "../renderer/element.js";

// Supported class name values
export type ClassName =
    | string
    | readonly string[]
    | false
    | null
    | undefined;

// Base builder for individual HTML elements
export class ElementBuilder<T extends HtmlTag> implements ElementNode {
    // Attributes assigned to this element
    protected attrs: Attributes = {};

    // Creates a new element builder
    constructor(public readonly tag: T) { }

    // Specifies a unique id for an element
    id(value: string): this {
        this.attrs.id = value;
        return this;
    }

    // Specifies the language of the elements content
    lang(value: string): this {
        this.attrs.lang = value;
        return this;
    }

    // Specifies one or more class names for an element
    class(...values: ClassName[]): this {
        this.attrs.class = values
            .flat()
            .filter((c) => typeof c === "string")
            .map((c) => c.trim())
            .filter(Boolean)
            .join(" ");

        return this;
    }

    // Renders the element's opening HTML tag
    render(): string {
        return renderElement(this.tag, this.attrs);
    }
}
