const mysql = require('mysql')

const conection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'metallica',
    database:'alcaldia'
})

conection.connect( (err) =>{
    if(err) throw err
    console.log('La conexion funciona')
})

conection.query('SELECT * from empleados', (err, rows) =>{
    if(err) throw err
    console.log('Los datos de la tabla son estos:')
    console.log(rows)
})

conection.end()

