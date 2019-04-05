/*eslint-env browser*/

//STEP 1
function part2_1() {
    "use strict";
    var num = window.prompt("pick a number");
    num = Math.abs(num);
    window.console.log("The absolute value of the number you entered is " + num);
}
//STEP 2
function part2_2() {
    "use strict";
    var num = window.prompt("pick a number with a decimal");
    num = Math.ceil(num);
    window.console.log("The rounded up value of the number you entered is " + num);
}
//STEP 3
function part2_3() {
    "use strict";
    var num = window.prompt("pick a number with a decimal");
    num = Math.floor(num);
    window.console.log("The rounded down value of the number you entered is " + num);
}
//STEP 4
function part2_4() {
    "use strict";
    var biggest, smallest, numArray;
    var num = window.prompt("Enter five numbers comma delimited. \rEx: 1,2,3,4,5\r");
    numArray = num.split(",");
    for (var i = 0, smallest = numArray[0], biggest = numArray[0]; i < numArray.length; i++) {
        if (numArray[i] < smallest) {
            smallest = numArray[i];
        }
        if (numArray[i] > biggest) {
            biggest = numArray[i];
        }
    }
    window.console.log("Smallest Number entered: " + smallest);
    window.console.log("Biggest Number Entered: " + biggest);
}
//STEP 5
function part2_5() {
    "use strict";
    var num = window.prompt("Enter a number");
    
    window.console.log("The square root of " + num + " is " + Math.sqrt(num));
}