document.querySelector("#btn").addEventListener("click",() => {
    const input = document.querySelector("#input").value;
    console.log(input);
    if(input.trim() == ""){
        alert("list elave edin")
    }else{
        document.querySelector("#task-list").innerHTML +=`<div class="list" id="list">
        <span>${input}</span>
        <button id="delete">X</button>
    </div>`;
    document.querySelector("#input").value=""; 

    const deleteTask = document.querySelectorAll("#delete");
    for (let i=0; i<deleteTask.length; i++){
        deleteTask[i].onclick = function(){
            deleteTask[i].parentNode.remove()
        }
    }    
    }
});