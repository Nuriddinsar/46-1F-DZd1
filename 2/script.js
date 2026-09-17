let name = 'Yehbllby';
let age = 20;
let money = false;
let work = true;
let motivation = true;
let time = true;

if (name == 'Yehbllby') {
    document.write('Привет, ' + name + '!<br>');

    if (age < 16) {
        document.write('Ещё рано думать о взрослой жизни! тебе всего ' + age + ' лет!<br>');
    }else if ((money != true || work != true) && (motivation == true && time == true)) {
        document.write('тебе нужно учить фронтенд!<br>');
    }else {
        document.write('тебе не нужно учить фронтенд!<br>');
    }
}else {
    document.write('Привет, ты не Yehbllby !<br>');
}

// ...........................................

let d = prompt('какое число?');
if (d > 20) {
    alert('ведите число меньше 20');
} else if (d >= 0) {
    for (let i = Number(d); i > 0; i--) {
        alert('обратный отсчет: ' + i);
    }

    alert('отсчет окончен');
} else {
    alert('Пожалуйста, введите положительное число.');
}