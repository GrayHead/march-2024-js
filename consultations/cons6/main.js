console.log('------ CONST #6 JS ------')

///Чим відрізняється .bind () від .apply()? В яких випадках використовувати ту чи іншу функцію?

///Покажіть на прикладі як створити функцію info() для класа Car. За допомогою рекурсії.
//
// Щоб після додавання драйвера за допомогою методу addDriver(driver)
// метод Info() працював враховуючи нові властивості створеного об'єкту і
// розгортав всі вкладені об'єкти.
//
// Зараз так виводить.
//
// id: 1
// model: 500-C
// producer: MB
// year: 2020
// speed: 800
// volume: 2.0
// driver: [object Object]


function CoffeeMachine(id, name, power = false) {
    this.id = id;
    this.name = name;
    this.power = power;
    this.water = 0;
    this.admin = 'Tom';
    this.milk = [];

    this.start = function () {
        console.log('Machine ON Ready! Good day!!');
        this.power = true;
    }

    this.stop = function () {
        console.log('Machine OFF Ready! Have nice day!!');
        this.power = false;
    }

    this.addMilk = function (nameML) {
        this.milk.push(nameML)
    }

    // this.info = function () {
    //     console.log('***** INFO')
    //     console.log(`Id: ${this.id} - Name: ${this.name}  Water: ${this.water}
    //     - Admin: ${this.admin} - Milk: ${this.milk}`)
    //     console.log('*****')
    // }

    this.addWater = function (adminName, valueWater) {
        if (adminName === this.admin) {
            this.water += valueWater;
            console.log('Water Added.!!! OK', this.water + 'ml')
        } else {
            console.log('You not admin!!! Call 911!')
        }
    }

    this.createCoffee = function () {
        if (this.power) {
            if (this.water > 200) {
                this.water -= 200;
                console.log('You coffee is ready! Water amount ' + this.water + 'ml')
            } else {
                console.log('Please add water!!!')
            }
        } else {
            console.log('POWER is NOT ON ')
        }
    }

}

let philips = new CoffeeMachine(1, 'philips');
philips.start();
// philips.stop();
philips.addMilk({value: 'cown milk'});
philips.addMilk({value: 'kokos milk'});
philips.addMilk({value: 'pumpkin milk'});

// philips.info()
philips.addWater('Jesika', 1000);
philips.addWater('Tom', 1000);
// philips.info();
philips.createCoffee();
philips.createCoffee();
philips.createCoffee();
philips.createCoffee();
philips.createCoffee();
philips.addWater('Tom', 1000);
philips.createCoffee();

CoffeeMachine.prototype.infoTwo = function () {
    console.log('***** INFO ')
    for (const key in this) {
        if (typeof this[key] === "function") continue;

        let value = this[key];
        if (typeof value === 'object' && value !== null) {
            value = JSON.stringify(value)
        }
        console.log(key + ':', this[key])
        document.write(key.toUpperCase() + ':', value + '<br>')
    }
    console.log('*****')
}
philips.infoTwo();

// document.write('<hr>')
// CoffeeMachine.prototype.infoRec = function () {
//     const print = (obj) => {
//         for (const key in obj) {
//             if(typeof obj[key] === "function") continue;
//             let value = obj[key];
//             if(typeof value === 'object' && value !== null){
//                 document.write(key.toUpperCase() + '<br>' );
//                 print(value)
//             }else {
//                 document.write(key.toUpperCase()  + ':' , value + '<br>')
//             }
//         }
//     }
//     print(this);
// }
// philips.infoRec();


///привіт, я з горем пополам зробила дз на кастомні колбеки for each i filter,
// прийшлось багато гуглити щоб відтворити їх, але я досі не розумію послідовність
// написання кастомних колбеків, без конкретних вказівок мені важко зрозуміти як їх писати,
// сама послідовність маніпуляцій вже всередині ф-ції яка приймає колбек,
// функції-аргумента і її аргументами, шо куди, як до чого звертатись і тд. дякую за відповідь наперед

Array.prototype.ownForEach = function (callback) {
    for (const item of this) {
        callback(item)
    }
}

Array.prototype.ownMap = function (callback) {
    let array = [];
    for (const item of this) {
        array.push(callback(item))
    }
    return array;
}

let arr = [1, 2, 3, 4]

arr.ownForEach(el => console.log(el))

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


// cars.ownForEach(el => console.log(el));

// let maping = cars.ownMap(el=> el.year * 2)
let maping = cars.ownMap(el => {
    return {
        ...el, year: el.year * 2
    }
})
console.log(cars)
console.log(maping)