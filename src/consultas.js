
/*
Find sin Query de Partidos jugados
*/

db.pilotos.find({puntos:261.5})

/*
Todos los documentos sobre Max Verstappen
*/

db.pilotos.find({nombre:"Max Verstappen"})
db.pilotos.find({nombre:{$eq: "Max Verstappen"}})