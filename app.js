
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