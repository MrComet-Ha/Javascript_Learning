/* 변수 선언
console.log("1+1=?"); // console.log 는 디버그용 메세지처럼, 콘솔창에 띄울 수 있다.

const a= 5; //const = 변수 선언
const b = 2;
const myName = "Mr.ha"; //문자열도 저장 가능하다
const snake_case = 1; camelCase = 13; //_ 넣는 방식(gml에서 써봤음, snake case라고 부름), 대문자 넣는 방식(unity에서 써봤음, camel case라고 부름) 다 ok but js에선 camel case 가 더 자주 쓰인다고 함.
console.log(a + b); 
console.log(a * b);
console.log(a / b);
console.log("Hello "+ myName);

let aA = 5; //let 또한 변수 선언이 가능하다.
let bB = 2;
let hisName = "Mr.park";
console.log("Hi, " + hisName);
hisName = "Mr.lee"; //let은 변수값을 업데이트 할 수 있다.
console.log("No, You are " + hisName);

//const = 변해서는 안되는 값을 지정할 때 쓴다. ex)아이템 코드, 몬스터 데이터 등...
//let = 변해도 되는 값을 지정할 때 쓴다. ex)레벨, 경험치 등...
//var = 과거에 사용한 변수 선언 함수. let과 역할은 같으나, 변경해서 안되는 값을 변경했을 때 경고해주는 보호장치가 없어서 현재는 잘 사용하지 않는다. gml에서 쓰던거랑 닮았다.

*/

/* 변수 인자
const amIGood = false; // true, false : 참/거짓
console.log(amIGood);
const amIDead = null; // null : 공백값
console.log(amIDead);
let something; // undefined : 정의되지 않은 값
console.log(something);
*/

/* 리스트
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]; //배열

console.log(daysOfWeek);

console.log(daysOfWeek[0]);

daysOfWeek.push("8th day");

console.log(daysOfWeek);
*/

/* 오브젝트(객체)
const player = {
    name: "MV",
    levels: 87,
    isDead: false,
    isMarried: null,
}

console.log(player);
console.log(player.name);
player.isDead = true;
console.log(player);
player.levels += 10;
console.log(player.levels);
*/

/* 함수
function sayHello(name, age){    
    console.log("Hello, my name is " + name + ", I'm " + age +  " years old.");
}

function plus(a, b){
    console.log(a + " + " + b + " = " + ( a + b ));
}
*/

/* 객체 내 함수
const player = {
    name : "Yongsa",
    sayHello(otherName){
        console.log("Hello, " + otherName + "! Nice to meet you!");
    }
}
console.log(player.name);
player.sayHello("lynn");
player.sayHello(player.name);
*/

/* 예제
const calculator = {
    add: function(a,b){
        console.log(a+b);
    },
    minus: function(a,b){
        console.log(a-b);
    },
    multiply: function(a,b){
        console.log(a*b);
    },
    divide: function(a,b){
        console.log(a/b);
    },
    powerof: function(a,b){
        console.log(a**b);
    }
}
calculator.add(2,2);
calculator.minus(7,4);
calculator.multiply(9,6);
calculator.divide(13,2);
calculator.powerof(17,3);
*/

/* 함수의 결과값
const age = 87;
function calKorAge(ageOfForeigner){
    return ageOfForeigner + 2;
}
const korAge = calKorAge(age);

console.log(korAge);
*/

/* 예제 수정
const calculator = {
    add: function(a,b){
        return (a+b);
    },
    minus: function(a,b){
        return (a-b);
    },
    multiply: function(a,b){
        return (a*b);
    },
    divide: function(a,b){
        return (a/b);
    },
    powerof: function(a,b){
        return (a**b);
    }
}
const addResult = calculator.add(5,2);
const minusresult = calculator.minus(addResult,4);
const multiplyresult = calculator.multiply(10,minusresult);
const divideResult = calculator.divide(multiplyresult,addResult);
const powerResult = calculator.powerof(divideResult,minusresult);
*/

/* if문 연습
const age = parseInt(prompt("How old are you?"));
const ageCal = function(numOfAge){
    if(isNaN(numOfAge) || age < 0){
        return "Please write a real positive number.";
    }
    else if(age < 19){
        return "You are too young.";
    }
    else if (age >= 19 && age <= 50){
        return "You can drink.";
    }
    else if (age >50 && age <=80){
        return "You should exersise.";
    }
    else if (age === 100){
        return "Whow...";
    }
    else if (age > 80){
        return "You can do whatever you want.";
    }
}
console.log(ageCal(age));
*/
/* document(HTML에 JS로 영향을 주는 법)
document.title = "Hello from JS!";
const title = document.getElementById("title");
title.innerText="Got you!"
*/