// Exportaciones
const Actor = require('./Actor');
const Director = require('./Director');
const Genre = require('./Genre');
const Movie = require('./Movie');

// Relaciones muchos a muchos entre Películas y Actores
Movie.belongsToMany(Actor, { through: 'Movie_Actor' });
Actor.belongsToMany(Movie, { through: 'Movie_Actor' });

// Relaciones muchos a muchos entre Películas y Directores
Movie.belongsToMany(Director, { through: 'Movie_Director' });
Director.belongsToMany(Movie, { through: 'Movie_Director' });

// Relaciones muchos a muchos entre Películas y Géneros
Movie.belongsToMany(Genre, { through: 'Movie_Genre' });
Genre.belongsToMany(Movie, { through: 'Movie_Genre' });