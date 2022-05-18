"use strict"; //Директива для современного кода, где неработают прошлые некоторые неточности

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов Вы посмотрели?');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы посмотрели?');
        }
    },
    rememberMyFilm: function () {
        for (let i = 0; i < 2; i++) {
            const nameOfFilm = prompt('Один из последних просмотренных фильмов?'),
                assessmentOfFilm = +prompt('На сколько его оцените?');
            if (nameOfFilm != null &&
                assessmentOfFilm != null &&
                nameOfFilm != '' &&
                assessmentOfFilm != '' &&
                nameOfFilm.length <= 50) {
                personalMovieDB.movies[nameOfFilm] = assessmentOfFilm;
            } else {
                i--;
            }
        }
    },
    detectedPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (hiddenDB) {
        if (!hiddenDB) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`ваш любимый жанр по номером ${i}`);
            if (genre == '' || genre == null) {
                console.log('Вы ввели некорректные данные или не вели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Жанр №${i+1} - значение ${item}`);
        });
    }
    }; 