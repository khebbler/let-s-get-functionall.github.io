// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functionall.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functionalFOLDER with your actual github folder name that is in your workspace.
 */

/*
var maleCount = function(array) {
    // initializing storage 
    var males = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].gender === 'male') {
            males += 1;
        }
    }
    return males;

};
*/

var maleCount = function(array) {
    var males = _.filter(array, function(customer) {
        return customer.gender === 'male';
    });
    return males.length;
}


var femaleCount = function(array) {
    var females = _.reduce(array, function(acc, current) {
        // checking if current gender is female
        if (current.gender === 'female') {
            // incrementing accumulator
            return acc + 1;
        }
        // returning updated accumulator
        return acc;
    }, 0);
    // returning updated value
    return females;

};

var oldestCustomer = function(array) {
    let oldest = _.reduce(array, function(accumulator, current) {
        // if current age is greater than acc age
        if (current.age > accumulator.age) {
            // if true return current
            return current;
          }
          // if false return accumulator
          return accumulator;
    });
    // returning name of oldest customer
    return oldest.name;
};

var youngestCustomer = function(array) {
    let youngest = _.reduce(array, function(acc, current) {
        // checking if current age is less that acc age
        if (current.age < acc.age) {
            // if true return current
            return current;
        }
        // if false, return acc
        return acc;
    });
    // returning youngest customer's name
    return youngest.name;
}

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
