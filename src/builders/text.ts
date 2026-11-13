// Copyright (c) Robert Calvert. MIT License.
// See LICENSE file in the project root for full license information.

import { ContainerBuilder } from "./container.js";

// Builder for HTML anchor elements
export class AnchorBuilder extends ContainerBuilder<"a"> {
    constructor() {
        super("a");
    }

    // Sets the anchors href attribute
    href(value: string): this {
        this.attrs.href = value;
        return this;
    }
}
