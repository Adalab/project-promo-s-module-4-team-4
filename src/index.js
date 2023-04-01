const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

let connection;
mysql
  .createConnection({
    host: 'sql.freedb.tech',
    database: 'freedb_CoolProjectDb',
    user: 'freedb_Cool Station Ladies',
    password: 'Qff$XK3qwgSwr@s',
  })
  .then((connection) => {
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

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
const port = 4000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.get('/dataApi/freedb_CoolProjectDb/all', (req, res) => {
  let sql = 'SELECT * FROM project, autor WHERE autor_idAutor = autor.idAutor;';
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
