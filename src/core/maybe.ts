// Copyright (c) Robert Calvert. MIT License.
// See LICENSE file in the project root for full license information.

// A value of type T that may be conditionally omitted
export type Maybe<T> =
    | T
    | false
    | null
    | undefined;
