/*eslint-env browser*/

//STEP 1
function part4_1(arg) {
    "use strict";
    var argArray = arg.split("");
    argArray = argArray.sort();
    var alphabetizedString = argArray.join("");
    return alphabetizedString;
}
//STEP 2
function part4_2(arg) {
    "use strict";
    var argArray = arg.split(" ");
    for (var i = 0; i < argArray.length; i++) {
        argArray[i] =  argArray[i].charAt(0).toUpperCase() + argArray[i].slice(1);
    }
    arg = argArray.join(" ");
    return arg;
}
//STEP 3
function part4_3(arg) {
    "use strict";
    var argArray = arg.split("");
    var counter = 0;
    for (var i = 0; i < argArray.length; i++) {
        if (argArray[i] === "a" || argArray[i] === "e" ||argArray[i] === "i" || argArray[i] === "o" ||argArray[i] === "u") {
            counter += 1;
        }
    }
    return counter;
}
//STEP 4
function part4_4(arg) {
    "use strict";
    var randomString = "";
    for (var i = 0; i < arg; i++) {
        randomString = randomString + String.fromCharCode(Math.round(Math.random() * 128));
    }
    return randomString;
}
//STEP 5
function part4_5(argArray) {
    "use strict";
    var longestCountryName = argArray[0];
//    var argArray = arg.split("");
    for (var i = 0; i < argArray.length; i++) {
        if (argArray[i].length > longestCountryName.length) {
            longestCountryName = argArray[i];
        }
    }
    return longestCountryName;
}