'use strict';

const numberOfFilms = +prompt ("Сколько фільмов ви уже посмотрели?", '')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотрених фильмов", ''),
b = prompt('На сколько', ''),
c = prompt('How', ''),
d = prompt('What', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

