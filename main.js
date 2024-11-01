var inputs = document.getElementById("inp");
var text  = document.querySelector(".Text");
function Add(){
    if (inputs.value == ""){
        alert("Please Enter Task")
    }
    else{
        var newEL = document.createElement("ul");
        newEL.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEL);
        inputs.value = "";
        newEL.querySelector("i").addEventListener("click",remove);
        function remove(){
newEL.remove()
        }
    }

}