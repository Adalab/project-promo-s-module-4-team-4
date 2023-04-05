const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

let connection;
const server = express();
server.use(cors());
server.use(express.json({ limit: '10mb' }));
const port = 4000;

server.listen(port, () => {
  server.set('view engine', 'ejs')
  console.log(`App listening on port ${port}`);
});

mysql
  .createConnection({
    host: 'sql.freedb.tech',
    database: 'freedb_CoolProjectDb',
    user: 'freedb_Cool Station Ladies',
    password: 'Qff$XK3qwgSwr@s',
  })
  .then((conn) => {
    connection = conn;
    connection
      .connect()
      .then(() => {
        console.log('Conectado con el identificador ' + connection.threadId);
      })
      .catch((err) => {
        console.error('Error de conexion: ' + err.stack);
      });
  })
  .catch((err) => {
    console.error('Error de configuración: ' + err.stack);
  });


server.get('/api/projects/all', (req, res) => {
  let sql = 'SELECT * FROM project, autor WHERE project.fkIdAutor = autor.idAutor;';
  connection
    .query(sql)
    .then(([results, fields]) => {
      console.log('Información recuperada:');
      results.forEach((result) => {
        console.log(result);
      });

      res.json(results);
    })
    .catch((err) => {
      throw err;
    });
});

server.post('/api/projects/add' , (req , res) => {
  const data = req.body;

  if(data.autor === ''){
    res.json({
      success: false,
      error: 'Campo autor vacío'
      })
  }else if(data.job === ''){
    res.json({
      success: false,
      error: 'Campo trabajo vacío'
      })
  } if(data.name === ''){
    res.json({
    success: false,
    error: 'Campo nombre de proyecto vacío'
    })
  }else if(data.slogan === ''){
    res.json({
    success: false,
    error: 'Campo slogan vacío'
    })
  }else if(data.repo === ''){
    res.json({
    success: false,
    error: 'Campo repo vacío'
    })
  }else if(data.demo === ''){
    res.json({
    success: false,
    error: 'Campo demo vacío'
    })
  }else if(data.technologies === ''){
    res.json({
    success: false,
    error: 'Campo technologies vacío'
    })
  }else if(data.description === ''){
    res.json({
    success: false,
    error: 'Campo decripción vacío'
    })
  }else{
    let sqlAutor = 'INSERT INTO autor (autor, job, image) VALUES (?,?,?)';
    let valueAutor = [
      data.autor,
      data.job,
      data.image];
      
    let sqlProject = 'INSERT INTO project (name, slogan, repo, demo, technologies, `description`, photo, fkIdAutor) VALUES (?,?,?,?,?,?,?,?)';

    connection 
      .query(sqlAutor , valueAutor)
      .then (([results, fields]) => {
        console.log(results);
        let valuesProject = [
          data.name,
          data.slogan,
          data.repo,
          data.demo,
          data.technologies,
          data.description,
          data.photo,
          results.insertId
        ];

      connection
        .query(sqlProject, valuesProject)
        .then(([results, fields]) => {

          let response = {
            success: true,
            cardURL: `http://localhost:4000/api/projects/${results.insertId}`
          }
          res.json(response);
        })
      .catch((err) => {
        throw err;
      });
    })
    .catch((err) => {
        throw err;
    });
    }
  }  
);

server.use(express.static('./src/publish-react'));