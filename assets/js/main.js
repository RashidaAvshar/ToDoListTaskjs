document.querySelector("#btn").addEventListener("click",() => {
    const input = document.querySelector("#input").value;
    console.log(input);
    if(input.trim() == ""){
        alert("list elave edin")
    }else{
        document.querySelector("#list").innerHTML +=`<div class="list" id="list">
        <span>${input}</span>
        <button id="delete">X</button>
    </div>`
    } 
});