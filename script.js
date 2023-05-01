const buttons = document.querySelectorAll(".number-button")
let score
buttons.forEach(btn => btn.addEventListener("click", function(e) {
e = e || window.event;
if (e.target.classList.contains("button-selected")) {
e.target.classList.remove("button-selected");
score = undefined;
} else {
if (document.querySelector(".button-selected")) {
document.querySelector(".button-selected").classList.remove("button-selected");
}
e.target.classList.add("button-selected");
score = e.target.innerHTML;
}
}));

document.querySelector("#submit").addEventListener("click", function(e) {
e = e || window.event;
if (score) {
document.getElementById("customer-feedback").style.display = "none"
document.getElementById("thank-you").style.display = "flex"
document.getElementById("number").innerHTML = `You selected ${score} out of 5`
}
})