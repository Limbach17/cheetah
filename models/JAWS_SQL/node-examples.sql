INSERT INTO cheetah.examples (route_name, example_name, example_display, example_description, documentation_url, 
  createdAt, updatedAt, SubjectId) 
VALUES ("nodecommand", "Node command", "node hello.js", "Will load and start the Hello app",
  "https://www.w3schools.com/nodejs/nodejs_get_started.asp", now(), now(), 17);

INSERT INTO cheetah.examples (route_name, example_name, example_display, example_description, documentation_url, 
  createdAt, updatedAt, SubjectId) 
VALUES ("npminstall","Npm install or npm i","npm install mysql","Install mysql node package",
  "https://docs.npmjs.com/cli/install", now(), now(), 18);

INSERT INTO cheetah.examples (route_name, example_name, example_display, example_description, documentation_url, 
  createdAt, updatedAt, SubjectId) 
VALUES ("fsread", "File System Read", "fs.readFile('movies.txt', 'utf8', function(error, data) {// If the code experiences any errors it will log the error to the console. if (error) {return console.log(error);}",
  "This block of code will read from the 'movies.txt' file and store the contents of the reading inside the 'data' variable",
  "https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback", now(), now(), 20);
