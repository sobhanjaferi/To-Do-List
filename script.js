let addItem = document.getElementById("input_add");
let button = document.getElementById("button");
let listItems = document.getElementById("list_items");
// let closeIcon = document.getElementById("close_icon");

button.addEventListener("click",()=>{
    let newItem = document.createElement("li");

    // closeIcon.style.display = "block";
    let newItemText = document.createTextNode(addItem.value);

    newItem.style.borderBottom = "2px solid #0984e3"
    newItem.style.padding = "10px"

    newItem.appendChild(newItemText)
    listItems.appendChild(newItem)

    addItem.value = ""
})

// closeIcon.addEventListener("click", ()=>{
//     newItem.style.display = "none"
// })