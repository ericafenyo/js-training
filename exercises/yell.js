'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code :
const yell = (str) => str.toUpperCase()

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
assert.deepStrictEqual(yell("hello, world!"), "HELLO, WORLD!")
// End of tests */
