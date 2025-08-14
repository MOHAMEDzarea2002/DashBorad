
// optins optionProExp
let optionProExp = document.querySelector(".options i") as HTMLButtonElement; 
let itemOption = document.querySelector(".item-option") as HTMLMenuElement
// show options
optionProExp.addEventListener("click", (event:MouseEvent) => {
    event.stopPropagation()
    itemOption.classList.toggle("Active")
})
// heding options
document.body.addEventListener("click", (event: MouseEvent) => {
    const traget = event.target as Node
    if (!itemOption.contains(traget) && traget !== optionProExp) {
        itemOption.classList.remove("Active")
    }
})

