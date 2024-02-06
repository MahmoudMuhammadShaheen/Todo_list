const theInput = document.querySelector(".txtValue");
const plus = document.querySelector(".plus");
const todoList = document.querySelector(".todo-list");



plus.addEventListener("click",addTask);
todoList.addEventListener("click", checkOrDelete);



function addTask(e) {
    e.preventDefault();
    
    const mainList = document.createElement("li")
    mainList.classList.add("todo");

    const Div = document.createElement("div");
    Div.classList.add("todo-item");
    Div.innerHTML = theInput.value;


    const fristBtn = document.createElement("button");
    fristBtn.classList.add("complete-btn")
    const secondBtn =document.createElement("button");
    secondBtn.classList.add("trash-btn")
    fristBtn.innerHTML = '<i class="fas fa-check"></i>';
    secondBtn.innerHTML = '<i class="fas fa-trash"></i>';

    mainList.appendChild(Div)
    mainList.appendChild(fristBtn)
    mainList.appendChild(secondBtn)

 todoList.append(mainList)

 console.log(todoList)

theInput.value ="";


}


function checkOrDelete(e){
    const item = e.target;

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("trached");
        todo.addEventListener("transitionend", () => {
          todo.remove();
        });
}
}