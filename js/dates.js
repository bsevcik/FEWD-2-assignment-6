/*eslint-env browser*/
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//STEP 1
function part3_1() {
    "use strict";
    
    //    months are 0 based, so subtract 1 from what the user enters
    var userMonthPicked = window.prompt("Enter the digit of a month \rEx: enter 4 for April");
    window.console.log(userMonthPicked);
//    var userYearPicked = window.prompt("Enter the year \rEx: 2019");
    var daysInMonth = new Date(2019, userMonthPicked, 0).getDate();
    window.console.log("There are " + daysInMonth + " days in " + months[userMonthPicked - 1]);
}

//STEP 2
function part3_2() {
    "use strict";
    var pickedDate = new Date(window.prompt("Enter a date in the format of 04/04/2019"));
    console.log(months[pickedDate.getMonth()]);
}
//STEP 3
function part3_3() {
    "use strict";
    var pickedDate = new Date(window.prompt("Enter a date in the format of 04/04/2019"));
    if (pickedDate.getDay() === 0 || pickedDate.getDay() === 6) {
        console.log(pickedDate + " is during the weekend")
    } else {
         console.log(pickedDate + " is NOT during the weekend")
    }
}
//STEP 4
function part3_4() {
    "use strict";
    var today = new Date();
//    var yesterday = new Date(today.getYear(), today.getMonth(), (today.getDay() - 1));
    console.log("Yesterday was " + days[today.getDay() -1 ]);
}
//STEP 5
function part3_5() {
    "use strict";
    var today = new Date();
    var todayDay = days[today.getDay()];
    console.log(todayDay.slice(0, 1));
}