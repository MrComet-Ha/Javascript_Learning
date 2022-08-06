const toDoForm = document.getElementById("todo_form");
const toDoInput = toDoForm.querySelector("#todo_form input");
const toDoList = document.getElementById("todo_list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //JSON.stringyfy : 데이터를 string형으로 변환.
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newToDo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDo();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

function loadToDos(item){
    paintToDo(item);
}
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    //JSON.parse : 데이터를 array로 변환.
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}