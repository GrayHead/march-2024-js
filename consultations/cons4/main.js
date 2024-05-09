console.log('------ CONST #4 JS ------')

let cars = [
    {make: "Toyota", model: "Camry", year: 2022, color: "Blue", price: 25000,
        test: 100500,company:{name:'CHINA', value: 200}},
    {make: "Honda", model: "Civic", year: 2021, color: "Red", price: 22000},
    {make: "Ford", model: "Mustang", year: 2023, color: "Black", price: 40000},
    {make: "Chevrolet", model: "Silverado", year: 2022, color: "Gray", price: 35000},
    {make: "Nissan", model: "Altima", year: 2021, color: "White", price: 23000},
    {make: "BMW", model: "X5", year: 2022, color: "Silver", price: 60000},
    {make: "Mercedes-Benz", model: "C-Class", year: 2023, color: "Black", price: 50000},
    {make: "Audi", model: "A4", year: 2022, color: "Blue", price: 45000},
    {make: "Jeep", model: "Wrangler", year: 2022, color: "Green", price: 35000},
    {make: "Jeep", model: "Wrangler", year: 2022, color: "Green", price: 35000},
    {make: "Jeep", model: "Wrangler", year: 2022, color: "Green", price: 35000},
    {make: "Jeep", model: "Wrangler", year: 2022, color: "Green", price: 35000},
    {make: "Jeep", model: "Wrangler", year: 2022, color: "Green", price: 35000},
    {make: "Jeep", model: "Wrangler", year: 2022, color: "Green", price: 35000},
    {make: "Jeep", model: "Wrangler", year: 2022, color: "Green", price: 35000},
    {make: "Lexus", model: "RX", year: 2023, color: "Champagne", price: 55000,
        company:{name:'VAG', value: 1000000} },
    {make: "Lexus", model: "RX", year: 2023, color: "Champagne", price: 55000,
        company:{name:'VAG', value: 1000000} },
    {make: "Lexus", model: "RX", year: 2023, color: "Champagne", price: 55000,
        company:{name:'VAG', value: 1000000} },
    {make: "Lexus", model: "RX", year: 2023, color: "Champagne", price: 55000,
        company:{name:'VAG', value: 1000000} }

];

function iterator(arr){
    for (const car of arr) {
//         document.write(`<div>${car.make} - ${car.model}
// // <h3>${car.year}</h3>
// // </div>`)
// //         console.log(car)

        for (const carKey in car) {
            if(typeof car[carKey] === 'object'){
                for (const keyObj in car[carKey]) {
                    document.write(`<li>${keyObj}: ${car[carKey][keyObj]}</li>`)
                }
            }else{
                document.write(`<div>${carKey}: ${car[carKey]}</div>`)
            }
        }
        createHr()
        createHr('red', 6)
        createHr()
    }

}
iterator(cars);

let products = [
    {name: "Laptop", price: 1000, category: "Electronics"},
    {name: "T-shirt", price: 20, category: "Clothing"},
    {name: "Book", price: 15, category: "Books"},
    {name: "Shoes", price: 50, category: "Footwear"},
    {name: "Headphones", price: 80, category: "Electronics"},
    {name: "Backpack", price: 40, category: "Accessories"},
    {name: "Guitar", price: 300, category: "Musical Instruments"},
    {name: "Watch", price: 150, category: "Accessories"},
    {name: "Cookware Set", price: 200, category: "Kitchenware"},
    {name: "Bicycle", price: 400, category: "Sports & Outdoors"}
];

let numbers = ['Max', 'Ivan', 'Tom', 'Jason'];

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// Чи можна якимось ще способом об'єднати два масива з об'єктами через
// однаковий ключ, окрім методу map?(чергове питання по додаткових)

// function allFn(arr1, arr2){
//     let newArr =[];
//     for (const user of arr1) {
//         // console.log(user)
//         for (const city of arr2) {
//             // console.log(city)
//             if (user.id === city.user_id){
//                newArr[newArr.length] = user;
//                user.address = city;
//             }
//         }
//     }
//     return newArr;
// }
// let resultArr = allFn(usersWithId, citiesWithId)
// console.log(resultArr)


// "Покажіть на схожому прикладі, що потрібно зробити в цьому завданні. Не можу зрозуміти, як правильно побудувати структуру.
// //створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// ////   Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]//"

// console.log(numbers)
// function swapFn(arr,index1,index2 ){
//     let newIndex = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = newIndex;
//
//     return arr;
// }
//
// console.log(swapFn(numbers, 0, 3));

// "Підкажіть, будь ласка, яким чином можна прив'язати кількість створюємих " +
// "елементів li до числового аргументу? Питання стосовно цього завдання:
// - створити функцію яка створює ul з трьома елементами li.
//     Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом,
//     який є числовим (тут використовувати цикл)."

// function tagFn(text = 'Okten', count = 8, tagName='h1'){
//     for (let i = 0; i < count; i++) {
//         document.write(`<${tagName}>${text}</${tagName}>`)
//     }
// }
// tagFn('Hello', 5, 'h3');
// createHr('red', 5)
// tagFn('World', 15, 'p');
// createHr('green', 2)
// tagFn('Hello World', 15, 'li');
// createHr()
// tagFn();
//
function createHr(color='orange', num=1){
    document.write(`<hr style="border: ${color} solid ${num}px">`)
}
// createHr('blue', 2);


// "1. В реальних проектах використовують значення аргументів функцій по замовченню?
// Приклад:
//     function sum(a=10, b){
//         return a+b;
//     }
// 2. Чи можливо викликати таку фу-ію не вказавши перший аргумент?"

//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


// function exchange(summ, arr, valuta ){
//     return summ / 40
// }
// exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');