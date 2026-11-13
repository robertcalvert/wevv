// Copyright (c) Robert Calvert. MIT License.
// See LICENSE file in the project root for full license information.

import { ContainerBuilder } from "./container.js";

// Builder for the HTML element
export class HtmlBuilder extends ContainerBuilder<"html"> {
    constructor() {
        super("html");
    }

    // Renders the doctype followed by the HTML element
    override render(): string {
        return `<!DOCTYPE html>${super.render()}`;
    }
}
