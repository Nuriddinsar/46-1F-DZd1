


const movies = [
    { title: "Аватар", genre: "фантастика", rating: 8.5, age: 12 },
    { title: "Интерстеллар", genre: "фантастика", rating: 9.0, age: 12 },
    { title: "Джокер", genre: "драма", rating: 8.4, age: 18 },
    { title: "Гарри Поттер", genre: "фэнтези", rating: 7.8, age: 6 },
    { title: "Оно", genre: "ужасы", rating: 7.3, age: 18 }
];

movies.forEach(mov => {
    console.log(`${mov.title} - ${mov.rating}`);
});

console.log('------------------------------------');

const popularMovies = movies.filter((mov) => mov.rating >= 8.0);

console.log(popularMovies);

console.log('------------------------------------');

const adultMovies = movies.filter((mov) => mov.age >= 18);

console.log(adultMovies);

console.log('------------------------------------');

// let i = prompt('названия фильма')
// const j = movies.find((mov) => mov.title.toLowerCase() == i.toLowerCase().trim())//спициально спросил у ии как это можно сделать.toLowerCase().trim()

// if (j){
//     console.log(`Фильм: ${j.title}`);
//     console.log(`Жанр: ${j.genre}`);
//     console.log(`Рейтинг6: ${j.rating}`);
// }else {
//     console.log('этот фильм не найден');
// }

console.log('------------------------------------');

const n = movies.some((mov) => mov.rating >= 9.0);
console.log(n);

console.log('------------------------------------');

const b = movies.every((mov) => mov.rating >= 7.0);
console.log(b);

console.log('------------------------------------');

function getMoviesByGenre(genre) {
    const j = movies.find((mov) => mov.genre.toLowerCase() == genre.toLowerCase().trim())//спициально спросил у ии как это можно сделать.toLowerCase().trim()

    if (j){
        console.log(`Фильм: ${j.title}`);
        console.log(`Жанр: ${j.genre}`);
        console.log(`Рейтинг6: ${j.rating}`);
    }else {
        console.log('этот фильм не найден');
    }
}

getMoviesByGenre("фэНтеЗи")// находит не смотря заглавная буква или нет :)



