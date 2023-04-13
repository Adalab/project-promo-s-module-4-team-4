const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger.json');

let connection;
const server = express();
server.use(cors());
server.use(express.json({ limit: '10mb' }));
server.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
server.set('view engine', 'ejs');

//Especificar en el server use
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

async function api() {
  const resp = await fetch('');
  const data = await resp.json();
  console.log(data);
}
async function getConnection() {
  const connection = await mysql.createConnection({
    host: 'sql.freedb.tech',
    database: 'freedb_CoolProjectDb',
    user: 'freedb_Cool Station Ladies',
    password: 'Qff$XK3qwgSwr@s',
  });
  await connection.connect();

  console.log('Conectado con el identificador ' + connection.threadId);

  return connection;
}

server.get('/api/projects/all', async (req, res) => {
  console.log('Pidiendo a la base de datos información de las tarjetas.');
  let sql =
    'SELECT * FROM project, autor WHERE project.fkIdAutor = autor.idAutor;';
  const connection = await getConnection();
  const [results] = await connection.query(sql);
  res.json(results);
  connection.end();
});

server.post('/api/projects/add', async (req, res) => {
  const data = req.body;

  if (data.autor === '') {
    res.json({
      success: false,
      error: 'Campo autor vacío',
    });
  } else if (data.job === '') {
    res.json({
      success: false,
      error: 'Campo trabajo vacío',
    });
  }
  if (data.name === '') {
    res.json({
      success: false,
      error: 'Campo nombre de proyecto vacío',
    });
  } else if (data.slogan === '') {
    res.json({
      success: false,
      error: 'Campo slogan vacío',
    });
  } else if (data.repo === '') {
    res.json({
      success: false,
      error: 'Campo repo vacío',
    });
  } else if (data.demo === '') {
    res.json({
      success: false,
      error: 'Campo demo vacío',
    });
  } else if (data.technologies === '') {
    res.json({
      success: false,
      error: 'Campo technologies vacío',
    });
  } else if (data.description === '') {
    res.json({
      success: false,
      error: 'Campo decripción vacío',
    });
  } else {
    let sqlAutor = 'INSERT INTO autor (autor, job, image) VALUES (?,?,?)';
    let valueAutor = [data.autor, data.job, data.image];
    const connection = await getConnection();
    const [results] = await connection.query(sqlAutor, valueAutor);

    let sqlProject =
      'INSERT INTO project (name, slogan, repo, demo, technologies, `description`, photo, fkIdAutor) VALUES (?,?,?,?,?,?,?,?)';

    let valueProject = [
      data.name,
      data.slogan,
      data.repo,
      data.demo,
      data.technologies,
      data.description,
      data.photo,
      results.insertId,
    ];
    const [resultsInsert] = await connection.query(sqlProject, valueProject);
    let response = {
      success: true,
      cardURL: `https://project-cool-station.onrender.com/api/projects/detail/${resultsInsert.insertId}`,
    };
    res.json(response);
    connection.end();
  }
});

server.get('/api/projects/detail/:projectID', async (req, res) => {
  const projectId = req.params.projectID;
  const sql =
    'SELECT * FROM project, autor WHERE project.fkIdAutor = autor.idAutor and idProject = ?';
  const connection = await getConnection();
  const [results] = await connection.query(sql, [projectId]);

  res.render('project_detail', results[0]);
  connection.end();
});

/*server.delete('/api/projects/delete_one/:idCard', async (req, res) => {
  let idCard = req.params.idCard;
  const sql = 'DELETE FROM project WHERE fkAutor = ?';
  const connection = await getConnection();
  const [results] = await connection.query(sql, [idCard]);

  console.log(results);
  const sqlAutor = 'DELETE FROM autor WHERE idAutor= ?';
  const [resultsDetele] = await connection.query(sqlAutor, [idCard]);

  res.json(resultsDetele);
  connection.end();
});*/
server.use(express.static('./src/public-react'));
server.use(express.static('./src/public-css'));
