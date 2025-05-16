const searchh = document.querySelector("#search");
const button = document.querySelector("button");
const taskcon = document.querySelector(".task_con");

button.addEventListener("click", function () {
    console.log(searchh.value);
    let task = document.createElement(`div`);
    taskcon.appendChild(task);
    // task.style.backgroundColor = "blue"

    
    
    let task_r = document.createElement(`input`);
    task_r.setAttribute("type", "radio")
    task.appendChild(task_r);
    
    let task_p = document.createElement(`p`);
    task_p.innerHTML = searchh.value;
  task.appendChild(task_p);
  
    task_r.addEventListener("click", function(){
        task_p.style.textDecoration = "line-through"
        task_r.style.textDecoration = "line-through"
        task_p.style.color = "gray"
        // console.log("clicked")
    })
    task_p.addEventListener("click", function(){
        task_p.style.textDecoration = "line-through"
        task_r.style.textDecoration = "line-through"
        task_p.style.color = "gray"
        // console.log("clicked")
    })

    
  
  let task_i = document.createElement('p')
  task_i.innerHTML = "&#10006;"
  task_i.id = "task_i"
  task.appendChild(task_i);
  
 task_i.addEventListener('click', ()=>{
    taskcon.removeChild(task)
 })
});
