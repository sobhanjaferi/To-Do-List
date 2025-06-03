let addItem = document.getElementById("input_add");
let button = document.getElementById("button");
let listItems = document.getElementById("list_items");

button.addEventListener("click",()=>{
    listItems.style.display = "inline"

    let newItem = document.createElement("li");
    let newItemText = document.createTextNode(addItem.value);

    newItem.style.borderBottom = "2px solid #0984e3";
    newItem.style.padding = "10px";
    newItem.style.marginRight = "15px";    

    newItem.appendChild(newItemText);
    listItems.appendChild(newItem);

    addItem.value = "";
})