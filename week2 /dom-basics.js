
const newP = document.createElement("p");
newP.textContent = "A new Paragraph";
document.body.append(newP);
const myList = ["one", "two", "three"]
const newDiv = document.createElement("div");
newDiv.innerHTML = `<ul><li>${mylist[0]}One</li><li>Two</li><li>Three</li></ul>`;
document.body.appendChild(newDiv);