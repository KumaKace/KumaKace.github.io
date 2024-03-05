function cambiar(){
    console.log("Hola Mundo!");
}

function colorbg(){
    color  = document.getElementById("cambiocolor");
    //console.log(color);
    color.classList.remove("bg-secondary-subtle")
    color.classList.add("bg-primary-subtle")
    
}
function colorbgb(){
    color  = document.getElementById("cambiocolor");
    //console.log(color);
    color.classList.remove("bg-primary-subtle")
    color.classList.add("bg-secondary-subtle")
    
}

function clorclick(){
    colorc = document.getElementById("cambiocolor");
    colorc.classList.remove("bg-primary-subtle")
    colorc.classList.add("bg-danger")
}