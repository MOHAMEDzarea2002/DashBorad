var hidAlert = document.querySelector("#hiding");
var Resst = document.querySelector("#reset");
var closable = document.querySelector("#closable");
hidAlert === null || hidAlert === void 0 ? void 0 : hidAlert.addEventListener("click", function () {
    closable.style.height = "0";
    closable.style.padding = "0";
    Resst.style.display = "block ";
});
Resst === null || Resst === void 0 ? void 0 : Resst.addEventListener("click", function () {
    closable.style.height = "auto";
    closable.style.padding = "";
});
console.log(hidAlert);
