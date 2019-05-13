insert into subjects (route_name, subject_name,documentation_url,createdAt,updatedAt,FrameworkId, ModeratorId) 
values ("html", "HTML5", 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',now(), now(), 1,1);

insert into subjects (route_name, subject_name,documentation_url,createdAt,updatedAt,FrameworkId, ModeratorId) 
values ("CSS", "CSS", 'https://developer.mozilla.org/en-US/docs/Web/CSS',now(), now(), 2,1);

insert into subjects (route_name, subject_name,documentation_url,createdAt,updatedAt,FrameworkId, ModeratorId) 
values ("javascript", "javascript", 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',now(), now(), 3,1);

insert into subjects (route_name, subject_name,documentation_url,createdAt,updatedAt,FrameworkId, ModeratorId) 
values ("jquery", "jQuery", 'https://api.jquery.com/',now(), now(), 4,1);

insert into subjects (route_name, subject_name,documentation_url,createdAt,updatedAt,FrameworkId, ModeratorId) 
values ("node", "node.JS", 'https://nodejs.org/en/docs/',now(), now(), 5,1);

select * from subjects;