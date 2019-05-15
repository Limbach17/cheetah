INSERT INTO cheetah.examples (route_name, example_name, example_display, example_description, documentation_url, 
    createdAt, updatedAt, SubjectId)
VALUES ("alert", "alert()", "alert('Hello World!');", "The alert() method displays an alert box with a specified message and an OK button. An alert box is often used if you want to make sure information comes through to the user.",
    "https://www.w3schools.com/jsref/met_win_alert.asp", now(), now(), 10);

INSERT INTO cheetah.examples (route_name, example_name, example_display, example_description, documentation_url, 
    createdAt, updatedAt, SubjectId)
VALUES ("toLowerCase", ".toLowerCase()", "var str = Hello World!;", "The toLowerCase() method converts a string to lowercase letters. Note: The toLowerCase() method does not change the original string.",    
    "https://www.w3schools.com/jsref/jsref_tolowercase.asp", now(), now(), 11);

INSERT INTO cheetah.examples (route_name, example_name, example_display, example_description, documentation_url, 
    createdAt, updatedAt, SubjectId)
VALUES ("Math.floor", "Math.floor()", "console.log(Math.floor(5.95));// expected output: 5", 
    "The Math.floor() function returns the largest integer less than or equal to a given number.",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor", now(), now(), 10);

INSERT INTO cheetah.examples (route_name, example_name, example_display, example_description, documentation_url, 
    createdAt, updatedAt, SubjectId)
VALUES ("Function constructor", "Function constructor", "var sum = new Function('a', 'b', 'return a + b');console.log(sum(2, 6));// expected output: 8",
    "The Function constructor creates a new Function object. Calling the constructor directly can create functions dynamically, but suffers from security and similar (but far less significant) performance issues to eval.",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function", now(), now(), 12);

INSERT INTO cheetah.examples (route_name, example_name, example_display, example_description, documentation_url, 
    createdAt, updatedAt, SubjectId)
VALUES ("if", "if Statement", "if (condition) {// block of code to be executed if the condition is true}", "Use the if statement to specify a block of JavaScript code to be executed if a condition is true.",
    "https://www.w3schools.com/js/js_if_else.asp", now(), now(), 9);
