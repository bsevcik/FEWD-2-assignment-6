/*eslint-env browser*/

//STEP 1
function part1_1() {
    "use strict";
    var name = window.prompt("What's your name?");
    window.alert("Your name has " + name.length + " letters");
}
//STEP 2
function part1_2() {
    "use strict";
    var name = window.prompt("What's your name?");
    var number = parseInt(window.prompt("Pick a number"), 10);
    var nameNum = name.slice((number - 1), number);
    window.alert("The letter " + number + " places from the beginning of your name is " + nameNum);
}
//STEP 3
function part1_3() {
    "use strict";
    var name = window.prompt("What's your first name?") + " ";
    var lastName = window.prompt("What's your last name?");
    var fullName = name.concat(lastName);
    window.alert("Your name is: " + fullName);
}
//STEP 4
function part1_4() {
    var text = "The quick brown fox jumps over the lazy dog";
    var foxIndex = text.indexOf("fox");
    alert("The first index at which 'fox' begins is " + foxIndex);
}
//STEP 5
function part1_5() {
    var text = "The quick brown fox jumps over the lazy fox";
    var foxIndex = text.lastIndexOf("fox");
    alert("The last index at which 'fox' begins is " + foxIndex);
}
//STEP 6
function part1_6() {
    var text = "The quick brown fox jumps over the lazy dog";
    var fullName = window.prompt("What's your full name?");
    var foxIndex = text.indexOf("fox");
    alert(text.replace("the lazy dog", fullName));
}
//STEP 7
function part1_7() {
    var text = "The quick brown fox jumps over the lazy dog";
    var word = window.prompt("Enter a word to search for");
    alert(text.search(word));
}
//STEP 8
function part1_8() {
    var old_string = "The quick brown fox jumps over the lazy dog";
    var middle_string = "the lazy dog";
    var new_string = old_string.slice(old_string.indexOf(middle_string, middle_string + middle_string.length - 1)).toUpperCase();
    alert(new_string);
}
//STEP 9
function part1_9() {
    var text = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
    alert(text.trim());
}
//STEP 10
function part1_10() {
    var text = "the quick brown fox jumps over the lazy dog";
    text = text.charAt(0).toUpperCase() + text.slice(1, text.length);
    alert(text);
}