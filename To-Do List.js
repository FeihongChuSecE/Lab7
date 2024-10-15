document.getElementById("submitButton").addEventListener("click", submitButton);

function submitButton() {
    document.body.style.backgroundColor = "#000";
}


document.getElementById("addButton").addEventListener("click", addItem);

function addItem() {
    let newItem = document.createElement("li");
    newItem.textContent = "go to shopping";
    document.getElementById("listItem").appendChild(newItem);
}

document.getElementById("removeButton").addEventListener("click", removeButton);

function removeButton() {
    const removeList = document.getElementById("listItem");
    if (removeList.firstElementChild) {
        removeList.removeChild(removeList.firstElementChild);
    } else {
        alert("You've finised all the items on the list.");
    }
}

