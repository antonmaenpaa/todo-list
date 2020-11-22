// Skapa en Todo lista där man kan ta bort varje enskild todo. 

// Tänk på att bryta ner uppgiften i mindre bitar! =)

window.addEventListener('load', main);

function main() {
    addEventListeners();
 
}

function addEventListeners() {
    const addToList = document.getElementById('addItem');
    const deleteFromList = document.getElementById('deleteItem');
    

    addToList.addEventListener('click', addItemToList);
    deleteFromList.addEventListener('click', deleteItemFromList);
    
    
}


function addItemToList() {
    let userInput = document.getElementById('item');
    let ulList = document.querySelector('ul');
    let liItem = document.createElement('li');
    liItem.appendChild(document.createTextNode(userInput.value));
    ulList.appendChild(liItem);

    const item = document.querySelector('ul');
    item.addEventListener('click', selectItem);
   
}

function selectItem(event){
    let items = document.querySelectorAll('#todo-list li');
    for (let item of items) {
        if (event.target === item ) {
            event.target.style.color = 'red';
            
        
        }
    }
    // let ulList = document.querySelectorAll('ul li');
    // for (let item of ulList) {
    //     if (event.target === item) {
    //         item.style.color = 'red';
    //     }
    // }
} 

function deleteItemFromList () {
    let items = document.querySelectorAll('#todo-list li');
    for (let item of items) {
        if (item.style.color = 'red' ) {
            item.remove(item);
            
        
        }
    }
}