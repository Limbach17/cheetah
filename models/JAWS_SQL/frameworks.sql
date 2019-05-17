INSERT INTO cheetah.frameworks (route_name, framework_name, documentation_url, icon_url, createdAt, updatedAt, ModeratorId)
VALUES ('html', 'HTML5', 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5', '/assets/img/html.png', now(), now(), 2);

INSERT INTO cheetah.frameworks (route_name, framework_name, documentation_url, icon_url, createdAt, updatedAt, ModeratorId)
VALUES ('css', 'CSS', 'https://developer.mozilla.org/en-US/docs/Web/CSS', '/assets/img/css.png', now(), now(), 2);

INSERT INTO cheetah.frameworks (route_name, framework_name, documentation_url, icon_url, createdAt, updatedAt, ModeratorId)
VALUES ('js', 'Javascript', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference', '/assets/img/js.png', now(), now(), 4);

INSERT INTO cheetah.frameworks (route_name, framework_name, documentation_url, icon_url, createdAt, updatedAt, ModeratorId)
VALUES ('jquery', 'jQuery', 'https://api.jquery.com/', '/assets/img/jquery.jpg', now(), now(), 4);

INSERT INTO cheetah.frameworks (route_name, framework_name, documentation_url, icon_url, createdAt, updatedAt, ModeratorId)
VALUES ('node', 'Node.js', 'https://nodejs.org/en/docs/', '/assets/img/node.png/', now(), now(), 2);

SELECT * FROM cheetah.frameworks;