let icon1 = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"></path></svg>`;
let icon2 = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-check-icon lucide-check-check"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"></path></svg>`;
let iconTransh = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`;
let add='<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 15 31" fill="none" stroke="black" stroke-width="1" class="icon icon-tabler icons-tabler-outline icon-tabler-database-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" /><path d="M4 6v6c0 1.657 3.582 3 8 3c1.075 0 2.1 -.08 3.037 -.224" /><path d="M20 12v-6" /><path d="M4 12v6c0 1.657 3.582 3 8 3c.166 0 .331 -.002 .495 -.006" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>'

let headBox = document.getElementById("head-box");
headBox.innerHTML = `<h2 class="text-7xl text-center">TODO APP</h2>`;


let inputBox = document.getElementById("input-box");
inputBox.classList = "flex flex-col m-2 border  p-5 bg-pink-50 shadow-sm";
inputBox.innerHTML =`
     <input type="text" class="text-3xl m-5 border p-5 rounded" placeholder="ADD TEXT" id="title-box">     
     <button class="borderblack bg-blue-500 text-white w-80 h-20 rounded-xl m-5 text-5xl cursor-pointer hover:bg-blue-600 transition" onclick="addTask()">${add}</button>
`;


let outputBox = document.getElementById("output-box");
outputBox.classList =
  "flex flex-col m-5 border rounded-xl p-5 bg-white shadow-sm";
outputBox.innerHTML = `<h2 class="text-3xl text-gray-300   ">no text add</h2>`;


function addTask() {
  let titleBox = document.getElementById("title-box");
  let titleBoxValue = titleBox.value;

  titleBox.value = "";
  
  if (outputBox.querySelector("h1.italic")) {
    outputBox.innerHTML = "";
  }

  makeTaskInOutBox(titleBoxValue);
}

function makeTaskInOutBox(titleBoxValue) {
  let newTask = document.createElement("div");
  newTask.classList =
    "border rounded-xl p-4 m-2 flex flex-col gap-5 transition-all";

  let date = new Date();
  let id = date.getTime();localStorage.   l  
  newTask.id = id;

  newTask.innerHTML = `
    <h1 class="text-5xl font-bold m-1">${titleBoxValue}</h1>
    <h2 class="text-2xl text-gray-400 m-1">${date.toLocaleString()}</h2>
    <div class="flex gap-4 mt-2">
      <button class="rounded-xl bg-red-700 tex, t-white p-2 cursor-pointer hover:bg-red-800" onclick="deleteTask(${id})">
        ${iconTransh}
      </button>    
      <button class="done-btn rounded-xl bg-green-200 p-2 cursor-pointer hover:bg-green-300" data-status="pending" onclick="doneTask(${id})">${icon1}</button>  
    </div>
  `;
  outputBox.appendChild(newTask);
}

function deleteTask(id) {
  let task = document.getElementById(id);
  if (task) {
    task.remove();
  }

  if (outputBox.children.length === 0) {
    outputBox.innerHTML = `<h1 class="text-3xl text-gray-400 italic">No tasks added yet...</h1>`;
  }
}

function doneTask(id) {
  let task = document.getElementById(id);
  if (!task) return;

  let doneButton = task.querySelector(".done-btn");
  let isDone = doneButton.getAttribute("data-status") === "done";

  if (isDone) {
    doneButton.innerHTML = icon1;
    doneButton.setAttribute("data-status","pending");
  } else {
    doneButton.innerHTML = icon2;
    doneButton.setAttribute("data-status","done");
  }

  task.classList.toggle("bg-purple-200");
}