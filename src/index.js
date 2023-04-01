const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

let connection;
const server = express();
server.use(cors());
server.use(express.json({ limit: '10mb' }));
const port = 4000;

server.listen(port, () => {
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
  let sql = 'SELECT * FROM project, autor WHERE project.fkidproject = autor.idAutor;';
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
