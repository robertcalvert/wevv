// Copyright (c) Robert Calvert. MIT License.
// See LICENSE file in the project root for full license information.

import type { ElementNode } from "../core/node.js";

// Builder for raw, pre-rendered HTML content
export class RawBuilder implements ElementNode {
    // The raw HTML string to render
    protected readonly html: string;

    constructor(html: string) {
        this.html = String(html);
    }

    // Renders the raw HTML verbatim
    render(): string {
        return this.html;
    }
}
