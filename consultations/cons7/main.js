console.log('------ CONST #7 JS ------')

////addDriver (driver) - приймає об'єкт який "водій" з
// довільним набором полів, і додає його в поточний об'єкт car


function Car (model, producer, year){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.driver = null;
    this.driver2 = null;

    this.addDriver = function(addDriver){
        this.driver = addDriver;
    }

}

// let bmw = new Car('X5', 'BMW', 2015)
// console.log(bmw)
//
// function Driver (name, year, exp){
//     this.name = name;
//     this.year = year;
//     this.exp = exp;
// }
//
// let newDriver = new Driver('Ivan', 1980, 2024)
// let newDriver2 = new Driver('Tom', 2000, 2022)
//
// Car.prototype.addDriver2 = function (addDriver){
//     this.driver2 = addDriver;
// }
//
// bmw.addDriver2(newDriver)
// bmw.addDriver2(newDriver2)
// bmw.addDriver({name: 'Max', license: true})
// console.log(bmw);

// let now = new Date();
// console.log(now)
// let time = new Date().getTime()
// console.log(new Date(time).toISOString())
// console.log( new Date().getFullYear())
// console.log( new Date().getMonth() + 1 )
// console.log( new Date().getDate() )
//
//
// let obj = {name: 'Ivan', age: 100}
// console.log(obj)
//
// let newObj = JSON.parse(JSON.stringify(obj));
// console.log(newObj)

let users = {
    name: 'Tom',
    age: 35,
    isMarried: true,
    country: 'Ukraine',
    street: {
        name: 'Pr.Svobody'
    }
}

// let {name, country, ...otherValue } = users;
let {name, country, street:{name:nameStreet} } = users;
// console.log(name, country , otherValue )
console.log('My name ' + name, country , nameStreet )



// console.log(users)