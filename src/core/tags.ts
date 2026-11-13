// Copyright (c) Robert Calvert. MIT License.
// See LICENSE file in the project root for full license information.

// Supported HTML tag names
export type HtmlTag =
    // Document
    | "html"
    | "head" | "title"
    | "body"

    // Structural
    | "div"

    // Text
    | "span"
    | "a"
    | "p"

    // Headings
    | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

    // Separators
    | "br" | "hr";

// HTML tags that cannot contain child nodes
const VOID_TAGS = [
    "br",
    "hr",
] as const satisfies readonly HtmlTag[];

// HTML void tag names
export type VoidTag = (typeof VOID_TAGS)[number];

// HTML tags that can contain child nodes
export type ContainerTag = Exclude<HtmlTag, VoidTag>;

// Checks whether an HTML tag is a void element
export function isVoidTag(tag: HtmlTag): tag is VoidTag {
    return (VOID_TAGS as readonly string[]).includes(tag);
}
