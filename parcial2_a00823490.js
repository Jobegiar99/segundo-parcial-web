const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "parcial2_A00823490",
  port:"3306"
});

connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });

operation = ( message, queue ) => {
    
    connection.query(queue, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        console.log(message, res);
      });
};

operation("SE INSERTARON ALUMNOS","INSERT INTO Alumnos(Nombre, Identificador, Email, Carrera)VALUES('Bernardo', 'A00823490','A00823490@tec.mx','ITC'),('Fulano', 'A0123','A0123@tec.mx','LAD');");
operation("ALUMNOS ACTUALES","SELECT * from Alumnos;");
operation("SE MODIFICAN ALUMNOS","UPDATE Alumnos SET Nombre = 'BORRAR ALUMNO' WHERE Id = 2");
operation("ALUMNOS DESPUES DE MODIFICAR","SELECT * from Alumnos;");
operation("SE ELIMINA UN ALUMNO","DELETE from Alumnos WHERE Id = 2");
operation("ESTADO DESPUES DE ELIMINAR","SELECT * from Alumnos;");