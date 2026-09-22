



const scores = [5, 4, 3, 5, 2, 4, 5, 3, 5];

function st1() {
    scores.forEach(function(score) {
        console.log(`оценка: ${score};`);
    });
} st1()

// scores.forEach(function(score) {
//     console.log(`оценка: ${score};`);
// });

console.log('---------------------------------');

function st2(grade) {
    console.log(scores.indexOf(grade));
    console.log(scores.lastIndexOf(grade));
} st2(5)

function st2_0 (grade0) { return scores.indexOf(grade0);}

function st2_L (gradeL) {console.log(`Первая пятёрка: ${scores.lastIndexOf(gradeL)};`);}



// console.log(scores.indexOf(5));
// console.log(scores.lastIndexOf(5));

console.log('---------------------------------');

function poisc (target) {
    let i = 0;
    scores.forEach((scor) => {
        if (scor === target) {
            i++
        }
    });
    return i;
}


console.log(poisc(5));

console.log('---------------------------------');

function createCounter() {
    let i = 0;

    return function() {
        i++;
        return i;
    };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());

console.log('=================================');


function All() {
    st1();
    st2(5);
    console.log(poisc(5));
    console.log(`всего петёрок: ${poisc(5)};`);
    console.log(`Первая пятёрка: ${st2_0(5)};`);
    st2_L(5);
}

All()
