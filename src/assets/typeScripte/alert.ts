
let hidAlert = document.querySelector("#hiding") as HTMLElement
let Resst = document.querySelector("#reset") as HTMLButtonElement
let closable = document.querySelector("#closable") as HTMLDivElement
hidAlert?.addEventListener("click", () => { 
    closable.style.height = "0"
    closable.style.padding = "0"
    Resst.style.display = "block "
    
})
Resst?.addEventListener("click", () => { 
    closable.style.height = "auto"
    closable.style.padding = ""
    
})
console.log(hidAlert)