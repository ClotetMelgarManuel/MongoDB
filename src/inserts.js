/*Esta BD es sobre la temporada actual de Formula1*/

/*Comando para meter toda la informacion a la vez*/
db.pilotos.insertMany
(
    [
        { nombre: "Max Verstappen", escuderia: "Red Bull",puntos: "261.5", victorias: "7", poles: "8"},
        { nombre: "Lewis Hamilton", escuderia: "Mercedes",puntos: "256.5", victorias: "5", poles: "3"},
        { nombre: "Valtteri Bottas", escuderia: "Mercedes",puntos: "177", victorias: "1", poles: "2"},
    ]
)

/*
También se pueden añadir de forma individual
*/

db.pilotos.insertOne({nombre: "Lando Norris", escuderia: "Mclaren",puntos: "145", victorias: "0", poles: "1"})
db.pilotos.insertOne({nombre: "Sergio (el checo) Perez", escuderia: "Red Bull",puntos: "135", victorias: "1", poles: "0"})