const searchh = document.querySelector("#search");
const button = document.querySelector("button");
const taskcon = document.querySelector(".task_con");

function io() {
    console.log(searchh.value);
    let task = document.createElement(`div`);
    let task_p = document.createElement(`p`);
    let task_r = document.createElement(`input`)
    
    task.appendChild(task_r);
    task_r.setAttribute("type", "radio");
    
    task_p.innerHTML = searchh.value;
    task.appendChild(task_p);
    
    if (searchh.value == "") {
        alert("Please enter a Task");
    } else {
        taskcon.appendChild(task);
        searchh.value = null

  }

  task_r.addEventListener("click", function () {
    task_p.style.textDecoration = "line-through";
    task_r.style.textDecoration = "line-through";
    task_p.style.color = "gray";
    console.log("clicked");
  });
  task_p.addEventListener("click", function () {
    task_p.style.textDecoration = "line-through";
    task_r.style.textDecoration = "line-through";
    task_p.style.color = "gray";
    console.log("clicked");
  });

  let task_i = document.createElement("p");
  task_i.innerHTML = "&#10006;";
  task_i.id = "task_i";
  task.appendChild(task_i);

  task_i.addEventListener("click", () => {
    taskcon.removeChild(task);
  });
}

button.addEventListener("click", function () {
  io();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    io();
  }
});
