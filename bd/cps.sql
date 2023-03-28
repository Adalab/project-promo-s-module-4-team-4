CREATE DATABASE cps;
USE cps;

CREATE TABLE project(
idProject INT auto_increment primary key not null, 
name VARCHAR(100) not null,
slogan VARCHAR(100) not null,
repo VARCHAR(1024) not null,
demo VARCHAR(1024) not null,
technologies VARCHAR(150) not null,
description VARCHAR(1024) not null,
photo VARCHAR(1024) not null
);

CREATE TABLE autor(
idAutor INT auto_increment primary key not null, 
autor VARCHAR(150) not null,
job VARCHAR(100) not null,
image VARCHAR(1024) not null
);

INSERT INTO project (name, slogan, repo, demo ,technologies, description, photo) VALUES ('Cool Project ladies', 'Guarda aquí tus proyecto!', 'https://github.com/Adalab/project-promo-s-module-4-team-4', 'http://beta.adalab.es/Project-promo-s-module-3-team-4/', 'React, SCSS', 'Proyecto en grupo creado como almacenaje de repositorios y webs creadas', 'https://coachready.com/dev/wp-content/uploads/2015/09/nuevo-mundo-del-trabajo.jpg'),
('Cool Project ladies', 'Guarda aquí tus proyecto!', 'https://github.com/Adalab/project-promo-s-module-4-team-4', 'http://beta.adalab.es/Project-promo-s-module-3-team-4/', 'React, SCSS', 'Proyecto en grupo creado como almacenaje de repositorios y webs creadas', 'https://coachready.com/dev/wp-content/uploads/2015/09/nuevo-mundo-del-trabajo.jpg'),
('Cool Project ladies', 'Guarda aquí tus proyecto!', 'https://github.com/Adalab/project-promo-s-module-4-team-4', 'http://beta.adalab.es/Project-promo-s-module-3-team-4/', 'React, SCSS', 'Proyecto en grupo creado como almacenaje de repositorios y webs creadas', 'https://coachready.com/dev/wp-content/uploads/2015/09/nuevo-mundo-del-trabajo.jpg'),
('Cool Project ladies', 'Guarda aquí tus proyecto!', 'https://github.com/Adalab/project-promo-s-module-4-team-4', 'http://beta.adalab.es/Project-promo-s-module-3-team-4/', 'React, SCSS', 'Proyecto en grupo creado como almacenaje de repositorios y webs creadas', 'https://coachready.com/dev/wp-content/uploads/2015/09/nuevo-mundo-del-trabajo.jpg');

INSERT INTO autor (autor,job, image) VALUES ('Josefina la Cerda', 'Full-Stack Developer', 'https://w7.pngwing.com/pngs/851/653/png-transparent-doll-drawing-doll-pic-miscellaneous-child-human.png'),
('Josefina', 'Full-Stack Developer', 'https://w7.pngwing.com/pngs/851/653/png-transparent-doll-drawing-doll-pic-miscellaneous-child-human.png'),
('Bob Esponja', 'Full-Stack Developer', 'https://w7.pngwing.com/pngs/851/653/png-transparent-doll-drawing-doll-pic-miscellaneous-child-human.png'),
('Patricio', 'Full-Stack Developer', 'https://w7.pngwing.com/pngs/851/653/png-transparent-doll-drawing-doll-pic-miscellaneous-child-human.png');