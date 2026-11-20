// Copyright (c) Robert Calvert. MIT License.
// See LICENSE file in the project root for full license information.

import type { Maybe } from "../core/maybe.js";

import { ContainerBuilder } from "./container.js";

// Builder for HTML anchor elements
export class AnchorBuilder extends ContainerBuilder<"a"> {
    constructor() {
        super("a");
    }

    // Sets the anchors href attribute
    href(value: Maybe<string>): this {
        this.attrs.href = value;
        return this;
    }
}
