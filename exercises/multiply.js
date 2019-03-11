'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :
const isPositive = (num) => num > 0
const abs = (arg) => {
    return arg < 0 ? -arg : arg;   
}
const multiply = (a, b) => {
    let val = 0
    let shouldNegateProduct = false
    if(!isPositive(a) || !isPositive(b)){
      shouldNegateProduct = true
    }
    
    if(!isPositive(a) && !isPositive(b)){
      shouldNegateProduct = false
      }
      
      if(a === 0|| b ===0){
      return 0
    }
    for (let i = 0; i < Math.abs(a); i++){
        val += Math.abs(b)
    }
    
     return shouldNegateProduct? -val : val
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
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
