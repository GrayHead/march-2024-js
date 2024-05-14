console.log('------ CONST #5 JS ------')

//Будь ласка поясніть, чому в методі sort беруться тільки два параметри
// (ці два параметри є обʼєктом з масива) та виконується сортування до всіх елементів з масива.
// Це було відео з лекції.

// const decks = [
//     {
//         cardSuit: "Hearts",
//         color: "Red",
//         cards: ["6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
//     },
//     {
//         cardSuit: "Diamonds",
//         color: "Red",
//         cards: ["6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
//     },
//     {
//         cardSuit: "Clubs",
//         color: "Black",
//         cards: ["6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
//     },
//     {
//         cardSuit: "Spades",
//         color: "Black",
//         cards: ["6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
//     }
// ];

// for (const deck of decks) {
//     if(deck.cardSuit === 'Clubs'){
//         for (const card of deck.cards) {
//           if(card === 'King'){
//               console.log('This is: ', card)
//           }
//         }
//     }
// }
//
// let res =  decks.filter(card => {
//    return card.cardSuit === 'Clubs' && card.cards.includes('Ace')
// })
// console.log(res)
//
// if(res){
//     let index = res[0].cards.length -1; //  index Ace
//     let value = res[0].cards[index];
//     console.log('It is: ', value)
// }


// потрібно найти піковий туз, я спочатку отфільтрував масив з 4 обʼєктами,
// але як потім дійти до значення  всередині ключа cards, якщо там всередині масив.
// Пробував використовувати forEach, але не вийшло. "

// "Вибачте за просте запитання, але не дуже зрозумів, що саме потрібно застосувати в цьому завданні?
// - Є ""брудна"" стрінга let str = ' dirty string   ' .  Почистити її від зайвих пробілів."

// console.log('           dirty stirng        '.trim());


let cars = [
    {
        make: "Toyota", model: "Camry", year: 2022, color: "Blue", price: 25000,
        test: 100500, company: {name: 'CHINA', value: 200}
    },
    {make: "Honda", model: "Civic", year: 2021, color: "Red", price: 22000},
    {make: "Ford", model: "Mustang", year: 2024, color: "Black", price: 40000},
    {make: "Chevrolet", model: "Silverado", year: 2022, color: "Gray", price: 35000},
    {make: "Nissan", model: "Altima", year: 2021, color: "White", price: 23000},
    {make: "BMW", model: "X5", year: 2022, color: "Silver", price: 60000},
    {make: "Mercedes-Benz", model: "C-Class", year: 2023, color: "Black", price: 50000},
    {make: "Audi", model: "A4", year: 2022, color: "Blue", price: 45000},
    {make: "Jeep", model: "Wrangler", year: 2022, color: "Green", price: 35000},
    {
        make: "Lexus", model: "RX", year: 2020, color: "Red", price: 55000,
        company: {name: 'VAG', value: 1000000}
    }
];

// let filterCars = cars
//     .filter(car => car.year > 2021)
//     .sort((a,b) => a.year - b.year )
// console.log(filterCars);


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

let fruitArr = ['apple', 'banana', 'orange', 'ApPle', 'orange', 'kIvi', 'KIVI', 'mango'];

let resFruits = fruitArr.reduce((acc, item) => {
    item = item.toLowerCase();
    // if (acc[item]) {
    //     acc[item] += 1;
    // } else {
    //     acc[item] = 1;
    // }

    // acc[item] ? acc[item] = acc[item] + 1 : acc[item] = 1;

    acc[item] = (acc[item] || 0) + 1;

    return acc;
}, {})

console.log(resFruits)


// let cardSuits = ['spades', 'diamonds', 'hearts', 'clubs'];
// let values = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
//
// let cards = cardSuits.reduce((acc, card) => {
//
//     values.forEach(item => {
//         let color = (card === 'diamonds' || card === 'hearts') ? 'red' : 'black';
//         acc.push({
//             cardSuit: item,
//             value: card,
//             color: color
//         })
//     })
//     return acc;
// }, [])
// console.log(cards)
// console.log(cards.find(card => card.value === 'diamonds' && card.cardSuit === 10))

// let arrSum = ['1',2,3,"1",1]
//
//
// let summ = arrSum.reduce((acc, el)=> acc + (+el), 0)
// console.log(summ)