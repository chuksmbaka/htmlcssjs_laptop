
let counter = 0;
function count() {
    counter++;
    if (counter % 10 == 0) {
        alert('count is now ${counter}');
    }
    // alert(counter);
}

function hello() {
    alert("Stay alert my friend...");
    document.querySelector('h1').innerHTML = "Goodbye";
}
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").onclick = count;

//run after some interval. eg every 100ms or 1sec
setInterval(counter, 1000);
});
