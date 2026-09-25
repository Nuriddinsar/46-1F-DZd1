

const movies = [
    { title: "Аватар", genre: "фантастика", rating: 8.5, age: 12, price: 1000, availableSeats: 43,},
    { title: "Интерстеллар", genre: "фантастика", rating: 9.0, age: 12, price: 200, availableSeats: 23,},
    { title: "Джокер", genre: "драма", rating: 8.4, age: 18, price: 1250, availableSeats: 15,},
    { title: "Гарри Поттер", genre: "фэнтези", rating: 7.8, age: 6, price: 1800, availableSeats: 33,},
    { title: "Оно", genre: "ужасы", rating: 7.3, age: 18, price: 120, availableSeats: 45,}
];

function checkAccess(userAge) {
    const adultMovies = movies.filter((mov) => mov.age <= userAge);
    console.log("доступные фильмы для твоего возроста:",adultMovies);
    //я знаю что можно через иф но у меня была готовая формула
}

checkAccess(18)

console.log('----------------------------------------');

const popularMovies = movies.filter((mov) => mov.rating >= 8.0);

console.log(popularMovies);

console.log('----------');


for (let i = 0; i < movies.length; i++) {
    console.log(`${movies[i].title} - ${movies[i].rating}`);
}
// movies.forEach(mov => {
//     console.log(`${mov.title} - ${mov.rating}`);
// });

console.log('-----------');


let avaAll = 0;
for (let i = 0; i < movies.length; i++) {
    avaAll += movies[i].availableSeats;
}
console.log(`все свободные места: ${avaAll}`);

console.log('----------------------------------------');


function showMovie(movie) {
    const j = movies.find(mov => mov.title.toLowerCase() == movie.toLowerCase().trim());

    console.log(j);
    console.log("--------------");
    console.log(j.title);
    console.log(j.rating);
    console.log(j.genre);
    console.log(`${j.price} com`);
}
showMovie('джокер');

console.log('====================================================');

let cinema ={
    name: 'gggggggg',
    movies2: [
        { title: "Аватар", genre: "фантастика", rating: 8.5, age: 12, price: 1000, availableSeats: 43,},
        { title: "Интерстеллар", genre: "фантастика", rating: 9.0, age: 12, price: 200, availableSeats: 23,},
        { title: "Джокер", genre: "драма", rating: 8.4, age: 18, price: 1250, availableSeats: 15,},
        { title: "Гарри Поттер", genre: "фэнтези", rating: 7.8, age: 6, price: 1800, availableSeats: 33,},
        { title: "Оно", genre: "ужасы", rating: 7.3, age: 18, price: 120, availableSeats: 45,}
    ]
}

function showInfo() {
    console.log('названия:',cinema.name);
}showInfo()

function showMovies2() {
    console.log('все фильмы',cinema.movies2);
}showMovies2() 

function addMovie (mov) {
    cinema.movies2.push(mov)
    console.log('добавлено', mov);
}

let df = {
    title: 'gffgfg',
    genre: 'fdvjdcv',
    rating: 9.0,
}

addMovie(df)

function removeLastMovie() {
    console.log('удалён:', cinema.movies2.pop());
}

removeLastMovie() 

console.log('----------------------------------------');

movies.forEach(mov => {
    console.log(`${mov.title} - ${mov.rating}`);
});

console.log('------------');

const mTitle = cinema.movies2.map((mov) => mov.title);
console.log(mTitle);

console.log('------------');

const popularMovi = cinema.movies2.filter((mov) => mov.rating >= 8.0);

console.log(popularMovi);

console.log('------------');

showMovie('джокер');

console.log('------------');

const ratingpr = cinema.movies2.some((mov) => mov.rating > 9);
console.log(ratingpr); 

console.log('------------');

const availableSeatspro = cinema.movies2.every((mov) => mov.availableSeats > 0 );

console.log(availableSeatspro);

console.log('-------------------------------------');

function buyTicket(movieName, userAge, tickets, balance) {
    const j = cinema.movies2.find(mov => mov.title.toLowerCase() == movieName.toLowerCase().trim());

    if (tickets <= j.availableSeats) {
        console.log('мест хватает');
    checkAccess(userAge);
    } else {
        console.log('столько мест нет');
    }

    let priseAll = tickets * j.price;
    
    if (priseAll < balance) {
        j.availableSeats -= tickets;
        console.log(`вы купили ${tickets} мест они стоили ${priseAll}`);
    }
}

buyTicket('джокер', 18, 2, 5000)
