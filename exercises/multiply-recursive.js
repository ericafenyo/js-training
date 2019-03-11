'use strict'

/*
 * Create a `multiply` function that takes two number as arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops. You need to do it using recursion.
 *
 * @notions Primitive and Operators, Functions, Recursion
 */

// Your code :
const isPositive = (num) => num > 0
const multiply = (a, b) => {

    let shouldNegateProduct = false
    if (!isPositive(a) || !isPositive(b)) {
        shouldNegateProduct = true
    }

    if (!isPositive(a) && !isPositive(b)) {
        shouldNegateProduct = false
    }

    if (a === 0 || b === 0) {
        return 0
    }

    let val = 0
    const loop = count => {
        if (count < Math.abs(a)) {
            val += Math.abs(b)
            loop(count + 1)
        }
    }

    loop(0)
    return shouldNegateProduct ? -val : val
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
