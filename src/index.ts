// Copyright (c) Robert Calvert. MIT License.
// See LICENSE file in the project root for full license information.

// Exposes the fluent HTML element factory
export { w } from "./factory/html.js";

// Export the type representing valid element children
export type { ElementChild } from "./core/node.js";

// Export the type representing valid class name values
export type { ClassValue } from "./builders/element.js"

// Export the Maybe utility type for optionally omitted values
export type { Maybe } from "./core/maybe.js"
