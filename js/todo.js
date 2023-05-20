const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //html의 todo-form안에 있는 input을 불러온 것
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos)); // JSON.stringify() array를 String으로 바꿔줌
}

function deleteToDo(event) {
    const li = event.target.parentElement; //정확히 어떤 ❌ 버튼을 찾아서 없애야하는지를 지정해주는 코드
    li.remove(); // 위의 li 버튼을 실행하게 해줌. 정확히는 생성된 투두리스트를 지우게 해줌
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //toDos array에 있던 것 중에 방금 클릭한 li의 id와 같은거 빼고는 다 남긴느 새로운 array의 function
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li"); // li 태그 생성
    li.id = newTodo.id; //각 li 요소에 id를 연결해줌
    const span = document.createElement("span"); // span 태그 생성
    span.innerText = newTodo.text; // span 안에 넣은 새로운 텍스트는 사용자가 form에서 우리에게 준 newTodo의 값
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); //<li></li>안에 <span></span>을 넣어준 것
    li.appendChild(button);
    toDoList.appendChild(li); //li의 내용을 toDoList에 넣은것
}

function handleToDoSubmit(event) { // submit의 기본 행동의 function은 첫번째 argument가 항상 정보를 보내는것. 그래서 event라는 argument를 줌
    event.preventDefault(); // submit의 기본 행동인 새로고침을 없애기 위한 function
    const newTodo = toDoInput.value; // input의 현재 value를 새로운 변수에 복사하는 것
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); // add the todos's object
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // JSON.parse() String을 Array로 바꿔줌
    toDos = parsedToDos; // 원래 작성한 todo를 잃지 않고 저장하는 법
    parsedToDos.forEach(paintToDo);
}