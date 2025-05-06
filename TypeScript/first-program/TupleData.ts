// when we work with mix data type ---> key , value

let user: [number, string];
user = [101, "anis"];

let tuple: [number, string] = [1, "hello"];

/**
 * In TypeScript, a tuple is a special type of array that:
    Has a fixed number of elements.
    Each element has a known, specific type.
    The order matters—types are assigned to specific positions.
 */
let data: [number, string, boolean] = [1, "hello", true];
