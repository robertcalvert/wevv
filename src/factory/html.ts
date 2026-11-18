// Copyright (c) Robert Calvert. MIT License.
// See LICENSE file in the project root for full license information.

import { ElementBuilder } from "../builders/element.js";
import { ContainerBuilder } from "../builders/container.js";

import { HtmlBuilder } from "../builders/structural.js";
import { AnchorBuilder } from "../builders/text.js";

import { RawBuilder } from "../builders/raw.js";

// Fluent HTML builder factory
export const w = {
    // Document
    get html() { return new HtmlBuilder(); },
    get head() { return new ContainerBuilder("head"); },
    get title() { return new ContainerBuilder("title"); },
    get body() { return new ContainerBuilder("body"); },

    // Structural
    get div() { return new ContainerBuilder("div"); },

    // Text
    get a() { return new AnchorBuilder(); },
    get p() { return new ContainerBuilder("p"); },
    get span() { return new ContainerBuilder("span"); },

    // Headings
    get h1() { return new ContainerBuilder("h1"); },
    get h2() { return new ContainerBuilder("h2"); },
    get h3() { return new ContainerBuilder("h3"); },
    get h4() { return new ContainerBuilder("h4"); },
    get h5() { return new ContainerBuilder("h5"); },
    get h6() { return new ContainerBuilder("h6"); },

    // Separators
    get br() { return new ElementBuilder("br"); },
    get hr() { return new ElementBuilder("hr"); },

    // Trusted raw HTML
    raw: (html: string) => new RawBuilder(html)
};
