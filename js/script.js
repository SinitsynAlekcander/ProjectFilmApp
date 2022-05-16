"use strict"; //Директива для современного кода, где неработают прошлые некоторые неточности

const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// Заполнение DB
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?'),
          b = +prompt('На сколько его оцените?');
    if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
        // console.log('Done1');
        // console.log('Done2');
        personalMovieDB.movies[a] = b;
    } else {
        // console.log('EROR');
        i--;
    }
}
//Резюме после формирование DB
if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}


console.log(personalMovieDB);






// let result = '';
// const leght = 7;
// for (let i = 1; i < leght; i++) {
//     for (let j = i; j < leght; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);

let result = '';
const lines = 5;

for (let i = 1; i <= lines; i++) {
    for (let j = i; j < lines; j++) {
        result += ' ';
    }
    for (let k = 0; k <= i; k++) {
        if (k === 0) {
            result += '*';
        } else {
            result += '**';
        }
    }
    result += '\n';
}