"use strict";

const todoDayForm = document.querySelector('#todayTodoList');
const todoWeekForm = document.querySelector('#weekTodoList');
const dayTodoInput = document.querySelector('#todayTodoList input');
const weekTodoInput = document.querySelector('#weekTodoList input');
const dayTodoList = document.querySelector('#todoDayList');
const weekTodoList = document.querySelector('#todoWeekList');

const dayTodoKey = "dayTodos";
let dayTodos = [];
const weekTodoKey = "weekTodos";
let weekTodos = [];

const savedDayTodos = localStorage.getItem(dayTodoKey);
if(savedDayTodos !== null){
    const parsedDayTodos = JSON.parse(savedDayTodos);
    dayTodos = parsedDayTodos;
    parsedDayTodos.forEach(items => paintDayTodo(items));
}

const savedWeekTodos = localStorage.getItem(weekTodoKey);
if(savedWeekTodos !== null){
    const parsedWeekTodos = JSON.parse(savedWeekTodos);
    weekTodos = parsedWeekTodos;
    parsedWeekTodos.forEach(items => paintWeekTodo(items));
}

todoDayForm.addEventListener("submit", event => handleDaySubmit(event));

function handleDaySubmit(event) {
    event.preventDefault();
    const newTodo = dayTodoInput.value;
    //console.log(newTodo);
    dayTodoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    }
    dayTodos.push(newTodoObj);
    paintDayTodo(newTodoObj);
    saveDayTodos();
}
function paintDayTodo(newTodoObj) {
    const li = document.createElement('li');
    li.id = newTodoObj.id;
    const span = document.createElement('span');
    span.innerText = newTodoObj.text;
    const button = document.createElement('button');
    button.classList.add('deleteBtn');
    button.innerText = "X";
    button.addEventListener("click",event => deleteDayTodo(event));
    li.appendChild(span);
    li.appendChild(button);
    dayTodoList.appendChild(li);
}

function deleteDayTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    //console.log(li.id);
    dayTodos = dayTodos.filter(todo => todo.id !== parseInt(li.id));
    saveDayTodos();
}

function saveDayTodos() {
    localStorage.setItem(dayTodoKey,JSON.stringify(dayTodos));
}

todoWeekForm.addEventListener("submit", event => handleWeekSubmit(event));

function handleWeekSubmit(event) {
    event.preventDefault();
    const newTodo = weekTodoInput.value;
    weekTodoInput.value = "";
    const weekTodoObj = {
        text : newTodo,
        id : Date.now()
    }
    weekTodos.push(weekTodoObj);
    paintWeekTodo(weekTodoObj);
    saveWeekTodo();
}

function paintWeekTodo(weekTodoObj) {
    const li = document.createElement('li');
    li.id = weekTodoObj.id;
    const span = document.createElement('span');
    span.innerText = weekTodoObj.text;
    const button = document.createElement('button');
    button.innerText = "X";
    button.classList.add('deleteBtn');
    button.addEventListener("click",item => deleteWeekTodo(item));
    li.appendChild(span);
    li.appendChild(button);
    weekTodoList.appendChild(li);
}

function deleteWeekTodo(item) {
    const li = item.target.parentElement;
    li.remove();
    weekTodos = weekTodos.filter(item => item.id !== parseInt(li.id));
    saveWeekTodo();
}

function saveWeekTodo() {
    localStorage.setItem(weekTodoKey,JSON.stringify(weekTodos));
}

