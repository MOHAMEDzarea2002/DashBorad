// optins optionProExp
var optionProExp = document.querySelector(".options i");
var itemOption = document.querySelector(".item-option");
// show options
optionProExp.addEventListener("click", function (event) {
    event.stopPropagation();
    itemOption.classList.toggle("Active");
});
// heding options
document.body.addEventListener("click", function (event) {
    var traget = event.target;
    if (!itemOption.contains(traget) && traget !== optionProExp) {
        itemOption.classList.remove("Active");
    }
});
