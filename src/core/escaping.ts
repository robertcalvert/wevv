// Copyright (c) Robert Calvert. MIT License.
// See LICENSE file in the project root for full license information.

// Escapes special characters in an HTML attribute value
export function escapeAttr(value: string): string {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll('"', "&quot;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}

// Escapes special characters in HTML text content
export function escapeText(value: string): string {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}
