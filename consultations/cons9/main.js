console.log('------ CONST #9 JS ------')

//
// let div = document.createElement('div')
// document.body.appendChild(div)

// fetch('http://dummyjson.com/users')
//     .then(res => res.json())
//     .then(({users})=>console.log(users));

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => console.log(json))


const form = document.forms.creator;
let users = JSON.parse(localStorage.getItem('users')) || [];
form.onsubmit = function (e){
    e.preventDefault();

    const name = this.name.value;
    const surname = this.surname.value;
    const age = this.age.value;
    console.log(name, surname, age)

    let object = {name, surname, age};

    users.push(object);
    localStorage.setItem('users', JSON.stringify(users))

    e.target.reset();
}

// let items = JSON.parse(localStorage.getItem('users')) || [];
let items = [1,2,3,4,5,6,7,8,9,10,11,12]
// console.log(items)
let itemsPerPage = 8;
let currentPage = 0;

function displayItems(){
    let startIndex = currentPage * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    let currentPageItems  = items.slice(startIndex, endIndex);

    document.getElementById('items-container').innerHTML = '';

    currentPageItems.forEach(item =>{
        let itemElements = document.createElement('div')
        // itemElements.innerHTML = `Name: ${item.name} Surname: ${item.surname} Age: ${item.age}`;
        itemElements.innerHTML = item;
        document.getElementById('items-container').appendChild(itemElements)

    })

}

document.addEventListener('DOMContentLoaded', ()=>displayItems());

// window.addEventListener('load', () => {
//     displayItems();
// })

function nextPage(){
    currentPage++
    if(currentPage >= Math.ceil(items.length / itemsPerPage)) {
        currentPage = 0;
    }
    displayItems();
}


function prevPage(){
    currentPage--
    if(currentPage < 0) currentPage = Math.ceil(items.length/ itemsPerPage) -1
    displayItems();
}


let counter = document.getElementById('counter')
let minus = document.getElementById('minus')
let plus = document.getElementById('plus')
let clear = document.getElementById('clear')

localStorage.getItem('counter') || 0;

minus.addEventListener('click', ()=>{
    let count = JSON.parse(localStorage.getItem('counter'))
    count--;
    localStorage.setItem('counter', count);
    counter.innerText = count;
})

plus.addEventListener('click', ()=>{
    let count = JSON.parse(localStorage.getItem('counter'))
    count++;
    localStorage.setItem('counter', count);
    counter.innerText = count;
})


clear.addEventListener('click', (e) =>{
    e.preventDefault();
    localStorage.clear();
    location.reload();
})


// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then(({carts}) => {
//         for (const cart of carts) {
//             console.log(cart)
//             for (const item of cart.products) {
//                 console.log(item)
//             }
//         }
//     })


fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then((results) => {
        console.log(results)
        let div = document.createElement('div')
        document.body.appendChild(div)
        for (const result of results.results) {
            let divItem = document.createElement('div')
            let img = document.createElement('img')
            div.appendChild(divItem)

            divItem.innerText = `Name: ${result.name} \n Status: ${result.status}`;
            img.src = result.image;

            divItem.appendChild(img);

        }
    })
//
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then((data) => {
//         console.log(data)
//         let div = document.createElement('div')
//         document.body.appendChild(div)
//         for (const result of data) {
//             let divItem = document.createElement('div')
//
//             div.appendChild(divItem)
//             divItem.innerHTML= `Id: ${result.id} Name: ${result.name} \n Email: ${result.email} <hr>`;
//
//         }
//     })
//
//
// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then(console.log);
//
// fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(console.log);