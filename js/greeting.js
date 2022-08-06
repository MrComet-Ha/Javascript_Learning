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

//getElementsById : 속성을 id로 찾을 때
document.title = "Hello from JS!";
const title = document.getElementById("something");
title.innerText="Got you!"

//getElementsByClassName : 속성을 class로 찾을 때
const hellu = document.getElementsByClassName("hello");
console.log(hellu);

//getElementsByTagName : 속성을 tag로 찾을 때
const newTitle = document.getElementsByTagName("h2");
console.log(newTitle);

//getElementsByName : 속성을 name으로 찾을 때

//querySelector : HTML 원문을 보듯 속성을 찾을 수 있다, 단일. 
const altTitle = document.querySelector(".hello h2:first-child");
console.log(altTitle);

//querySelectorAll : querySelector의 다수 버전.
const alsoTitle = document.querySelectorAll(".hello h2");
console.log(alsoTitle);
//querySelector의 문법 : .(클래스), #(id), -child(n번째 검색된 것), form(form)
 */
/* 이벤트 연습

//공통적인 참조사항
const h1 = document.querySelector("div.hello:first-child h1");
h1.innerText="Hi";

// 첫 이벤트 연습
const eventPrac ={
    handleTitleEnter : function(){
        h1.innerText="The mouse is HERE!";
    },
    handleTitleLeave : function(){
        h1.innerText="The mouse is GONE!";
        },
    handleTitleClick : function(){
        h1.style.color="blue";
    },
    handleWindowResize : function(){
        document.body.style.backgroundColor = "tomato";
    },
    handleWindowCopy : function(){
        alert("Don't copy me!");
    },
    handleWindowOffline : function(){
        alert("There is no internet. HaHA!");
    },
    handleWindowOnline : function(){
        alert("ALL GOOOOOOOD");
    }
}

h1.onclick=eventPrac.handleTitleClick;
h1.onmouseenter=eventPrac.handleTitleEnter;
h1.onmouseleave=eventPrac.handleTitleLeave;
window.addEventListener("resize", eventPrac.handleWindowResize);
window.addEventListener("copy", eventPrac.handleWindowCopy);
window.addEventListener("offline",eventPrac.handleWindowOffline);
window.addEventListener("online",eventPrac.handleWindowOnline);

// 이벤트에 if문 넣어보기
function handleLetterClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor == "blue"){
        newColor="tomato";
    }
    else{
        newColor="blue";
    }
    h1.style.color=newColor;
}

// CSS의 상태를 조작하는 방식

//if문 사용
function handleLetterClick(){
    const stateNow=h1.classList;
    const stateActive = "active";
    if(stateNow.contains(stateActive))
    {
        stateNow.remove(stateActive);
    }
    else{
        stateNow.add(stateActive);
    }
}

//toggle 사용
function handleLetterClick(){
    h1.classList.toggle("active");
}

//공통적인 행동 이벤트
h1.onclick=handleLetterClick;
*/


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("input");
const greet = document.querySelector("#greeting");
const savedName = localStorage.getItem(USERNAME_KEY);

function greetUser(){
    greet.innerText = `Hello, ${localStorage.getItem(USERNAME_KEY)}!`;
    greet.classList.remove(HIDDEN_CLASSNAME);
}

function handleLoginSubmit(evt){
    evt.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    greetUser();
}

if(savedName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",handleLoginSubmit);
}
else{
    greetUser();
}