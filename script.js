// Skapa en Todo lista där man kan ta bort varje enskild todo. 

// Tänk på att bryta ner uppgiften i mindre bitar! =)

window.addEventListener('load', main);

function main() {
    addEventListeners();
 
}

function addEventListeners() {
    const addToList = document.getElementById('addItem');
    addToList.addEventListener('click', addItemToList);
}


function addItemToList() {
    let userInput = document.getElementById('item');
    let ulList = document.querySelector('ul');
    let liItem = document.createElement('li');
    liItem.appendChild(document.createTextNode(userInput.value));
    ulList.appendChild(liItem);
   
    // console.log(ulList)
    // let ulList = document.getElementById('todo-list');
    // let liItem = document.createElement('li');
    // liItem.innerText = userInput;

}