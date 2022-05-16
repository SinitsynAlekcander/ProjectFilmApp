"use strict"; //Директива для современного кода, где неработают прошлые некоторые неточности

// a=10;
// console.log(a);


// console.log('Hello');

// // ПЕРЕМЕННЫЕ
// let number = 5; //изменяемая
// const nameMe = 'Al'; //НЕ изменяемая, нельзя переписать

// number = 12;
// console.log(nameMe);

// // const me = {
// //     name: 'Al',
// //     age: 34
// // };
// // console.log(me.name);
// // console.log(me['age']);

// const arr = [5, 4, 3, 2];
// console.log(arr[0]);

// const arrObj = {
//     a: 'a',
//     b: 'b',
//     c: 'c',
//     d: {
//         e: 'e',
//         f: 'f'
//     }
// };

// console.log(arrObj['a']);
// console.log(arrObj['d']['e']);
// console.log(arrObj.d.e);
// console.log(arrObj['a']);

alert('привет');

const numberOfFilms = prompt('Сколько фильмов Вы посмотрели?');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов?'),
      b = +prompt('На сколько его оцените?'),
      c = prompt('Один из последних просмотренных фильмов?'),
      d = +prompt('На сколько его оцените?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);