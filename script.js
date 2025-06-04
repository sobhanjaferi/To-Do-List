let addItem = document.getElementById("input_add");
let button = document.getElementById("button");
let listItems = document.getElementById("list_items");
let listItemsHistore = document.getElementById("list_items_histore");
let listItemsHistoreContainer = document.querySelector(".histore_container");

button.addEventListener("click",()=>{
    listItems.style.display = "inline"

    let newItem = document.createElement("li");
    let closeIcon = document.createElement("i");

    let newItemText = document.createTextNode(addItem.value);
    let newCloseIcon = document.createTextNode("⨉")

    closeIcon.appendChild(newCloseIcon);
    newItem.appendChild(newItemText);
    newItem.appendChild(closeIcon)
    listItems.appendChild(newItem);

    addItem.value = "";

    closeIcon.addEventListener("click",()=>{

        listItemsHistoreContainer.style.display = "flex"
        closeIcon.style.display = "none"
        newItem.style.borderBottom = "2px dashed black"
        listItemsHistore.appendChild(newItem);
        
    })
})
