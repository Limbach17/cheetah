insert into subjects (route_name, subject_name,documentation_url,createdAt,updatedAt,FrameworkId, ModeratorId) 
values ("basichtml", "Basic HTML", 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',now(), now(), 1,1);

insert into subjects (route_name, subject_name,documentation_url,createdAt,updatedAt,FrameworkId, ModeratorId) 
values ("js", "", 'https://developer.mozilla.org/en-US/docs/Web/CSS',now(), now(), 2,1);

select * from subjects;