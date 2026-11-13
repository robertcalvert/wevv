// Copyright (c) Robert Calvert. MIT License.
// See LICENSE file in the project root for full license information.

// Supported HTML attribute values
export type AttributeValue =
    | string
    | number
    | boolean
    | null
    | undefined;

// Map of HTML attribute names to their values
export type Attributes = Record<string, AttributeValue>;
