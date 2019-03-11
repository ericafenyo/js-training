'use strict'

/*
 * Create a constant variable named `escapeStr` that contains
 * the following specials characters: /\`"'
 *
 * @notions Primitive and Operators, Variables
 */

// Your code :
const escapeStr = 'Bar\'s address is \"https://bar.example.com" with two \"\\\\" after \`https`'

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof escapeStr, 'string')
assert.strictEqual(escapeStr.includes("'"), true)
assert.strictEqual(escapeStr.includes('"'), true)
assert.strictEqual(escapeStr.includes('`'), true)
assert.strictEqual(escapeStr.includes('/'), true)
assert.strictEqual(escapeStr.includes('\\'), true)
// End of tests */
