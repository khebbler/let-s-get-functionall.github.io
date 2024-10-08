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



var averageBalance = function(array) {
    // iterating through customer's array
    // finding total of customer's balances
    let totalBalance = customers.reduce(function(sum, customer){
        // removing first char ($) replacing commas
        // converting string to number using unary plus
        // adding to sum
        return sum + +customer.balance.slice(1).replace(',', ''); // unary plus operator*
    }, 0);
    // returning avegage, diving total by number of customers
    return totalBalance / customers.length;
}


var firstLetterCount = function(array, letter) {
    // converting letter to lowercase
    var lowercaseLetter = letter.toLowerCase();
    // filtering through array of customer objects
    // checking if first letter matches convereted input letter
    var firstLetter = array.filter(function(customer) {
        return customer.name[0].toLowerCase() === lowercaseLetter;
    });
    // returning length of array
    return firstLetter.length;

}

var friendFirstLetterCount = function(array, customer, letter) {
       // initializing storage variable
    var count = 0;
    // converting letter to lowercase
    var convertedLetter = letter.toLowerCase();

    // Looping through array of customers
    for (var i = 0; i < array.length; i++) {
        // if customer name is found in array
        if (array[i].name === customer) {
            // adding customer's friends to friends variable
            var friends = array[i].friends;
            // looping through friends array
            for (var j = 0; j < friends.length; j++) {
                // converting first letter of friend's name to lowercase
                var nameOfFriend = friends[j].name.toLowerCase();
                // if name of friend is the same as input letter
                if (nameOfFriend.charAt(0) === convertedLetter) {
                    // incrementing count
                    count++;
                }
            }
            break;
        }
    }
    // returning updated count
    return count;
}

var friendsCount = function(array, name) {
   // initializing storage array
   var output = [];
   // Looping through array of customers
   for (var i = 0; i < array.length; i++) {
       // Looping through customer's friends
       for (var j = 0; j < array[i].friends.length; j++) {
           // if friends name = name
           if (array[i].friends[j].name === name) {
               // pushing customer's name into output array
               output.push(array[i].name);
               break;
           }
       }
   }
   // returning updated output
   return output;
}

var topThreeTags = function(array) {
    // initializing storage object
    var tags = {};

    // Looping through customers arary
    array.forEach(function(customer) {
        // Looping through customer's tags
        customer.tags.forEach(function(tag) {
            // if customer has tag
            if (tags[tag]) {
                // increment count
                tags[tag]++;
            // if no tag exists    
            } else {
                // initialize count
                tags[tag] = 1;
            }
        });
    });

    // getting array of tags keys
    // sorting based on count
    var topTags = Object.keys(tags).sort(function(a, b) {
        return tags[b] - tags[a];
    });
    // returning first 3 elements (top 3 tags)
    return topTags.slice(0, 3);

}

var genderCount = function(array) {
    // Looping through array of customers with reduce method
    return array.reduce(function (accumulator, current){
        // assigning current customer's gender to gender variable
        var gender = current.gender;

        // if accumulator doesn't have gender key
        if (!accumulator[gender]) {
            // gender count is zero
            accumulator[gender] = 0;
        }
        // if accumulator has gender key
        accumulator[gender] += 1;

        // returning updated accumulator
        return accumulator;
    
    }, {});
};
    

/*
    return arrayOfCustomers.reduce((acc, customer) => {
        // Assigning gender from customer object to gender variable
        var gender = customer.gender;

        // Checking if accumulator contains gender
        if (!acc[gender]) {
            // Initializing count for current gender
            acc[gender] = 0; 
        }
        // Incrementing count for current gender
        acc[gender] += 1;
        // Returning updated accumulator
        return acc;
    }, {});
        // initial value for accumulator
};
*/

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
