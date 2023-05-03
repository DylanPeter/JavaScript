const myArray = ["one", "two", "three"]

function listTemplate(item) {
    return `<li>${item}</li>`;
}
console.log(myArray);
const newArray = myArray.map(listTemplate); 
console.log(newArray);

const listElement = document.querySelector('#mylist');
listElement.innerHTML = newArray.join("");