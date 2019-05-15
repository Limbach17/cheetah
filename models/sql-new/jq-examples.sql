INSERT INTO cheetah.examples (route_name, example_name, example_display, example_description, documentation_url, 
    createdAt, updatedAt, SubjectId) 
VALUES ("jqsyntax", "jQuery Syntax", "$","Basic syntax is: $(selector).action() $(this).hide() - hides the current element.$(p'').hide() - hides all <p> elements. $('.test').hide() - hides all elements with class='test'.$('#test').hide() - hides the element with id='test'.' 'The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the element(s).",
    "https://www.w3schools.com/jquery/jquery_syntax.asp", now(), now(), 13);
		
INSERT INTO cheetah.examples (route_name, example_name, example_display, example_description, documentation_url, 
    createdAt, updatedAt, SubjectId) 
VALUES ("jqselectors", "jQuery Selectors", "$(p')", "jQuery selectors allow you to select and manipulate HTML element(s).jQuery selectors are used to find"" (or select) HTML elements based on their name id classes types attributes values of attributes and much more. It's based on the existing CSS Selectors and in addition it has some own custom selectors. All selectors in jQuery start with the dollar sign and parentheses: $().",
    "https://www.w3schools.com/jquery/jquery_selectors.asp", now(), now(), 14);


INSERT INTO cheetah.examples (route_name, example_name, example_display, example_description, documentation_url, 
    createdAt, updatedAt, SubjectId) 
VALUES ("jqevents", "jQuery Event Methods", "$(p').click();", "All the different visitors' actions that a web page can respond to are called events.An event represents the precise moment when something happens.",
    "https://www.w3schools.com/jquery/jquery_events.asp", now(), now(), 15);

INSERT INTO cheetah.examples (route_name, example_name, example_display, example_description, documentation_url,
    createdAt, updatedAt, SubjectId) 
VALUES ("jqfunctions", "jQuery Functions", ".add()", "Create a new jQuery object with elements added to the set of matched elements. addBack() Add the previous set of elements on the stack to the current set, optionally filtered by a selector.jQuery API. jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.",
    "https://api.jquery.com/", now(), now(), 16);
