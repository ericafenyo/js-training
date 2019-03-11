'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */


// Your code :
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
const jadenCase = (words) => {
    let concString = ""
    words.split(" ").forEach((value) => {
        concString += capitalize(value) + " "
    })
    return concString.trim()
}




//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase.length, 1)
assert.strictEqual(jadenCase("How are you ?"), "How Are You ?")

// End of tests */
