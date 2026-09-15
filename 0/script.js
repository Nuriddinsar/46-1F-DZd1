// const random = Math.floor(Math.random() * 100) + 1;
// let popitki = 1;
// let ui = +prompt("Угадай число от 1 до 100");
// let proverka0 = ui > 0 && ui < 101 ? true : false; // тут я проверяю ввёл ли пользователь число или нет
// let proverka = ui >=0 || ui <= 0 ? true : false;// тут я проверяю ввёл ли пользователь число или нет

// while (random == ui) {
//     if (!proverka0) {
//         alert("Вы ввели не правильное число");
//     }else if (proverka && ui < random) {
//         alert("Загаданное число больше");
//     }else if (proverka && ui > random) {
//         alert("Загаданное число меньше");
//     }else {
//         alert("Вы ввели не число");
//     }
//     popitki++;
//     ui = +prompt("Угадай число от 1 до 100");
// }

// alert(`Поздравляю! Вы угадали число ${random} потратив ${popitki} попытки!`);
// document.write(`<h2>Поздравляю! Вы угадали число ${random} потратив ${popitki} попытки!</h2>`);


// с верху первая попытка.......................................



// const random = Math.floor(Math.random() * 100) + 1;
// let popitki = 1;
// let ui = +prompt("Угадай число от 1 до 100");
// let zashita = 0;

// while (ui !== random && zashita < 15) {
//     zashita++;// защита от бесконечного цикла
    
//     if (isNaN(ui)) {
//         // alert("Вы ввели не число!");
//         ui = +prompt("Вы ввели не число!");
//     } else if (ui < 1 || ui > 100) {
//         // alert("Число должно быть от 1 до 100!");
//         ui = +prompt("Число должно быть от 1 до 100!");
//     } else if (ui < random) {
//         ui = +prompt("Загаданное число больше");
//         // alert("Загаданное число больше");
//         popitki++;
//     } else if (ui > random) {
//         ui = +prompt("Загаданное число меньше");
//         // alert("Загаданное число меньше");
//         popitki++;
//     }
    
//     // ui = +prompt("Попробуй еще раз от 1 до 100");
// }

// if (ui === random) {
//     const win = `Поздравляю! Вы угадали число ${random}, потратив ${popitki} попыток!`;
//     alert(win);
//     document.write(`<h2>${win}</h2>`);
// } else {
//     const lose = `Игра окончена! Превышено ограничение в ${15} ходов. Число было: ${random}`;
//     alert(lose);
//     document.write(`<h2>${lose}</h2>`);
// }

 //то что у меня получилось ............................



 
const random = Math.floor(Math.random() * 100) + 1;
let popitki = 1;
let zashita = 0;
let ui = Number(prompt("Угадай число от 1 до 100"));

while (ui !== random && zashita < 15) {
    zashita++;// защита от бесконечного цикла
    
    if (isNaN(ui)) {
        // alert("Вы ввели не число!");
        ui = +prompt("Вы ввели не число!");
    } else if (ui < 1 || ui > 100) {
        // alert("Число должно быть от 1 до 100!");
        ui = +prompt("Число должно быть от 1 до 100!");
    } else if (ui < random) {
        ui = +prompt("Загаданное число больше");
        // alert("Загаданное число больше");
        popitki++;
    } else if (ui > random) {
        ui = +prompt("Загаданное число меньше");
        // alert("Загаданное число меньше");
        popitki++;
    }
    
    // ui = +prompt("Попробуй еще раз от 1 до 100");
}

if (ui === random) {
    const win = `Поздравляю! Вы угадали число ${random}, потратив ${popitki} попыток!`;
    alert(win);
    document.write(`<h2>${win}</h2>`);
    console.log(win);
} else {
    const lose = `Игра окончена! Превышено ограничение в ${15} ходов. Число было: ${random}`;
    alert(lose);
    document.write(`<h2>${lose}</h2>`);
    console.log(lose);
}// я не придумал куда засунуть return 
