// Copyright (c) Robert Calvert. MIT License.
// See LICENSE file in the project root for full license information.

// Supported attribute values
export type AttributeValue =
    | string
    | true;

// Map of attribute names to their values
export type Attributes = Record<string, AttributeValue>;

// Accepted values when setting an attribute
export type AttributeInput =
    | AttributeValue
    | false
    | null
    | undefined
    | string[];
