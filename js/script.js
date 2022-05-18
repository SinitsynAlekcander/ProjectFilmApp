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
                // console.log('Done1');
                // console.log('Done2');
                personalMovieDB.movies[nameOfFilm] = assessmentOfFilm;
            } else {
                // console.log('EROR');
                console.log(i);
                i--;
                console.log(i);
            }
        }
    },
    detectedPersonalLevel: function() {
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
    showMyDB: function(hiddenDB) {
        if (!hiddenDB) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            // const genre = prompt(`ваш любимый жанр по номером ${i}`);
            // personalMovieDB.genres[i - 1] = genre;
            personalMovieDB.genres[i - 1] = prompt(`ваш любимый жанр по номером ${i}`);
        }
    }
};

