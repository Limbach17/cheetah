/* ---------------------------------------------HTML-----------------------------------------------------------------------*/

INSERT INTO cheetah.subjects (route_name, subject_name , documentation_url, createdAt, updatedAt, FrameworkId, ModeratorId) 
VALUES ("htmlbasic", "HTML Basics","https://www.w3schools.com/html/html_basic.asp", now(), now(), 1, 3);

INSERT INTO cheetah.subjects (route_name, subject_name , documentation_url, createdAt, updatedAt, FrameworkId, ModeratorId) 
VALUES ("htmlmedia", "HTML Media", "https://www.w3schools.com/html/", now(), now(), 1, 3);

INSERT INTO cheetah.subjects (route_name, subject_name , documentation_url, createdAt, updatedAt, FrameworkId, ModeratorId) 
VALUES ("htmllist", "HTML List", "https://www.w3schools.com/html/html_lists.asp", now(), now(), 1, 3);

INSERT INTO cheetah.subjects (route_name, subject_name , documentation_url, createdAt, updatedAt, FrameworkId, ModeratorId) 
VALUES ("htmlmedia", "HTML Table", "https://www.w3schools.com/html/html_basic.asp", now(), now(), 1, 3);

/* ---------------------------------------------CSS-----------------------------------------------------------------------*/

INSERT INTO cheetah.subjects (route_name, subject_name , documentation_url, createdAt, updatedAt, FrameworkId, ModeratorId) 
VALUES ("cssbackground", "CSS Background", "https://www.w3schools.com/css/css_background.asp", now(), now(), 2, 4);

INSERT INTO cheetah.subjects (route_name, subject_name , documentation_url, createdAt, updatedAt, FrameworkId, ModeratorId) 
VALUES ("cssborder", "CSS Background", "https://www.w3schools.com/css/css_border.asp", now(), now(), 2, 4);

INSERT INTO cheetah.subjects (route_name, subject_name , documentation_url, createdAt, updatedAt, FrameworkId, ModeratorId) 
VALUES ("cssboxmodel", "CSS Box Model", "https://www.w3schools.com/css/css_boxmodel.asp", now(), now(), 2, 4);

INSERT INTO cheetah.subjects (route_name, subject_name , documentation_url, createdAt, updatedAt, FrameworkId, ModeratorId) 
VALUES ("cssmargin", "CSS Margin", "https://www.w3schools.com/css/css_background.asp", now(), now(), 2, 4);

/* ---------------------------------------------Javascript-----------------------------------------------------------------------*/

INSERT INTO cheetah.subjects (route_name, subject_name , documentation_url, createdAt, updatedAt, FrameworkId, ModeratorId) 
VALUES ("jsstatments", "Javascript Statements", "https://www.w3schools.com/js/js_statements.asp", now(), now(), 3, 1);

INSERT INTO cheetah.subjects (route_name, subject_name , documentation_url, createdAt, updatedAt, FrameworkId, ModeratorId) 
VALUES ("jsfunctions", "Functions", "https://www.w3schools.com/js/js_functions.asp", now(), now(), 3, 1);

INSERT INTO cheetah.subjects (route_name, subject_name , documentation_url, createdAt, updatedAt, FrameworkId, ModeratorId) 
VALUES ("jsmethods", "Javascript Methods", "https://www.w3schools.com/js/js_object_methods.asp", now(), now(), 3, 1);

INSERT INTO cheetah.subjects (route_name, subject_name , documentation_url, createdAt, updatedAt, FrameworkId, ModeratorId) 
VALUES ("jsconstructors", "Javascript Constructors", "https://www.w3schools.com/js/js_object_constructors.asp", now(), now(), 3, 1);

select * from subjects;