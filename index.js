'use strict';

/*
let age2 = 8;
let welcome2 = (age2 < 18) ? //create function short of   let welcome2 = function(args) { code here }
    function() { console.log("Привет!"); } :
    function() { console.log("Здравствуйте!"); };

welcome2(); // теперь всё в порядке


let age1 = 9;
let welcome1 = (age1 < 18) ? //let welcome1 = function(args) { code here }
    () => console.log('Привет') :
    () => console.log("Здравствуйте!");

welcome1(); // теперь всё в порядке


let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
  let result = a + b;
  return result; // при фигурных скобках для возврата значения нужно явно вызвать return
};

console.log(`The sum is: ${sum(1, 2)}`); // 3

/*
Функции-стрелки очень удобны для однострочных действий. Они бывают двух типов:

Без фигурных скобок: (...args) => expression – правая сторона выражение: функция выполняет его и возвращает результат.
С фигурными скобками: (...args) => { body } – скобки позволяют нам писать многострочные инструкции внутри функции, но
при этом необходимо указывать директиву return, чтобы вернуть какое-либо значение.


// */ // short f() expression syntax and arrow f() declaration syntax
/*
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
    return ask;
};


ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);


*/ // two declaration types of ask f()

console.log("=====================================================================================");

let obj = {
    a: 1,
    b: 2,
    c: {
        three: 3
    }
};
console.log(obj); //{ a: 1, b: 2, c: { three: 3 } }


let newObj = { ...obj };
console.log(newObj); //{ a: 1, b: 2, c: { three: 3 } }

obj.c.three = 9000;
console.log(obj);
console.log(newObj);


console.log("=====================================================================================");
