addEventListener()




window.addEventListener("click", function () {
    alert("You clicked on the page!");
});
Every single DOM element also has its own addEventListener method:

    var button = document.querySelector("button");

button.addEventListener("click", function () {
            alert("SOMEONE CLICKED THE BUTTON!!");