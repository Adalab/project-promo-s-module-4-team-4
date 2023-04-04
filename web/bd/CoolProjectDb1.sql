USE freedb_CoolProjectDb;

SELECT * FROM project, autor WHERE project.fkidproject = autor.idAutor;

USE freedb_CoolProjectDb;
ALTER TABLE project DROP FOREIGN KEY fkidproject;
USE freedb_CoolProjectDb;
ALTER TABLE project DROP COLUMN fkidproject;

USE freedb_CoolProjectDb;
CREATE TABLE project (
  idProject INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  slogan VARCHAR(100) NOT NULL,
  repo VARCHAR(1024) NOT NULL,
  demo VARCHAR(1024) NOT NULL,
  technologies VARCHAR(150) NOT NULL,
  description VARCHAR(1024) NOT NULL,
  photo VARCHAR(6000) NOT NULL,
  fkIdAutor INT NOT NULL,
  FOREIGN KEY (fkIdAutor) REFERENCES autor(idAutor)
  );
  
  INSERT INTO autor (autor,job, image) VALUES ('Calamardo', 'Full-Stack Developer', 'https://w7.pngwing.com/pngs/851/653/png-transparent-doll-drawing-doll-pic-miscellaneous-child-human.png'),
('Eugene', 'Full-Stack Developer', 'https://w7.pngwing.com/pngs/851/653/png-transparent-doll-drawing-doll-pic-miscellaneous-child-human.png'),
('Bob Esponja', 'Full-Stack Developer', 'https://w7.pngwing.com/pngs/851/653/png-transparent-doll-drawing-doll-pic-miscellaneous-child-human.png'),
('Patricio', 'Full-Stack Developer', 'https://w7.pngwing.com/pngs/851/653/png-transparent-doll-drawing-doll-pic-miscellaneous-child-human.png');

INSERT INTO project (name, slogan, repo, demo ,technologies, description, photo, fkIdAutor) VALUES ('Cool Project ladies', 'Guarda aquí tus proyecto!', 'https://github.com/Adalab/project-promo-s-module-4-team-4', 'http://beta.adalab.es/Project-promo-s-module-3-team-4/', 'React, SCSS', 'Proyecto en grupo creado como almacenaje de repositorios y webs creadas', 'https://coachready.com/dev/wp-content/uploads/2015/09/nuevo-mundo-del-trabajo.jpg', 1),
('Cool Project ladies', 'Guarda aquí tus proyecto!', 'https://github.com/Adalab/project-promo-s-module-4-team-4', 'http://beta.adalab.es/Project-promo-s-module-3-team-4/', 'React, SCSS', 'Proyecto en grupo creado como almacenaje de repositorios y webs creadas', 'https://coachready.com/dev/wp-content/uploads/2015/09/nuevo-mundo-del-trabajo.jpg', 2),
('Cool Project ladies', 'Guarda aquí tus proyecto!', 'https://github.com/Adalab/project-promo-s-module-4-team-4', 'http://beta.adalab.es/Project-promo-s-module-3-team-4/', 'React, SCSS', 'Proyecto en grupo creado como almacenaje de repositorios y webs creadas', 'https://coachready.com/dev/wp-content/uploads/2015/09/nuevo-mundo-del-trabajo.jpg', 3),
('Cool Project ladies', 'Guarda aquí tus proyecto!', 'https://github.com/Adalab/project-promo-s-module-4-team-4', 'http://beta.adalab.es/Project-promo-s-module-3-team-4/', 'React, SCSS', 'Proyecto en grupo creado como almacenaje de repositorios y webs creadas', 'https://coachready.com/dev/wp-content/uploads/2015/09/nuevo-mundo-del-trabajo.jpg', 4);
  
  
SELECT * FROM autor;
SELECT * FROM project;

SELECT autor.autor, autor.job, autor.image, project.name, project.slogan, project.repo, project.demo, project.technologies, project.description, project.photo 
FROM autor INNER JOIN project ON autor.idautor = project.fkIdAutor 
WHERE autor.idautor = 3;