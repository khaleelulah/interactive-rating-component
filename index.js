let rate = document.querySelectorAll(".rate")
let rating = document.getElementById("selected")
let submit = document.getElementById("submit")
let container = document.getElementById("container")
let container2 = document.getElementById("container2")
let userRating

rate.forEach(possiblity => possiblity.addEventListener("click", (e) => {
    userRating = e.target.innerHTML
    rating.innerHTML = userRating;
    console.log(userRating);



}));
submit.addEventListener("click", function() {
    container.style.display = "none";
    container2.style.display = "flex";


})