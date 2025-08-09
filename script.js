console.log("JS file loaded successfully!");
document.getElementById("menu").addEventListener("click", function () {
    let menuBar = document.getElementById("menu-bar");
    let currentVisibility = getComputedStyle(menuBar).visibility;

    if (currentVisibility === "hidden") {
        menuBar.style.visibility = "visible";
    } else {
        menuBar.style.visibility = "hidden";
    }
});
