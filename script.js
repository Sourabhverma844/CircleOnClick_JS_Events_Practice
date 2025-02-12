document.getElementById('canvas').addEventListener('click',function(e){
    let circle = document.createElement("div");
    circle.style.width = "50px";
    circle.style.height = "50px";
    circle.style.backgroundColor = "white";
    circle.style.position = "absolute";
    circle.style.borderRadius = "50%";

    //center align circle
    circle.style.left = `${e.pageX - 25}px`;
    circle.style.top = `${e.pageY - 25}px`;

    document.getElementById('canvas').appendChild(circle);
});