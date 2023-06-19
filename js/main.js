console.log (" js file added ")

const bodyTag=document.querySelector("body ")

bodyTag.innerHTML+= `
<section id="groceries">
<h2> Groceries</h2>
<ul id= "groceryList"></ul>
</section>

`
let groceryItems = ["apples", "bananas","milk","eggs","bread","cat food"]
const groceryUl = document.getElementById("groceryList")
//for what coming from where
for(item of groceryItems) {
console.log (item)
groceryUl.insertAdjacentHTML("beforeend",`<li> ${item}  </li>`)

}

function addItem (newItem){
    if (newItem !== "" ){
        groceryUl.insertAdjacentHTML("afterbegin", ` <li> ${newItem}  </li>`)
    }
}


// addItem ("chocolate")

// adding HTML using creatElement and appendChild

const section=document.createElement('section')
section.id="todo"
section.innerHTML= " <h2> todo list </h2>"

bodyTag.appendChild (section)