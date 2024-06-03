// let num1: number = 100;
// let str1: string = 'asdkadsjhg';
// const str2: string = 'sajdhghd';
// let bool1: boolean = false;
// bool1 = true;
// let var1: any = 213;
//
// function calulator(a: number, b: number): number {
//     return a + b;
// }
//
// calulator(10, 20);


// class User {
//     name: string;
//     age: number;
//     status: boolean;
//
//     constructor(name: string, age: number, status: boolean) {
//         this.name = name;
//         this.age = age;
//         this.status = status;
//     }
//
//     greeting() {
//         console.log('hello')
//     }
// }
//
// class SuperUser extends User {
//     isAdmin: boolean;
//
//
//     constructor(name: string, age: number, status: boolean, isAdmin: boolean) {
//         super(name, age, status);
//         this.isAdmin = isAdmin;
//     }
//
//
//     greeting() {
//         console.log('ajshfdhfash');
//     }
// }
//
// let users: User[] = [
//     new User('asd', 123, true),
//     {name: 'vasya', status: false, age: 31},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true},
//     new SuperUser('asd', 123, true, true),
//     // {name: 'max', age: 31, status: true, isasd: false},
//     {name: 'max', age: 31, status: true, isAdmin: false},
// ];

// enum Gender {
//     MALE,
//     FEMALE,
//     NON_BINARY
// }

// class User {
//     private _id: number;
//     private _name: string;
//     private _gender: Gender;
//
//     constructor(id: number, name: string, gender: Gender) {
//         this._id = id;
//         this._name = name;
//         this._gender = gender;
//     }
//
//
//     get id(): number {
//         return this._id;
//     }
//
//     set id(value: number) {
//         this._id = value;
//     }
//
//     get name(): string {
//         return this._name;
//     }
//
//     set name(value: string) {
//         this._name = value;
//     }
//
//     get gender(): Gender {
//         return this._gender;
//     }
//
//     set gender(value: Gender) {
//         this._gender = value;
//     }
// }
//
// let user = new User(1, 'vasya', Gender.NON_BINARY);
// // user.id = -100500;
// // user.setId(100500);
// // console.log(user.getId()); // 100500
//
// console.log(user.id);
// user.id = 100400;


// class User {
//
//     constructor(private _id: number, private _name: string) {
//         this._id = _id;
//         this._name = _name;
//     }
//
//
//     get id(): number {
//         return this._id;
//     }
//
//     set id(value: number) {
//         this._id = value;
//     }
//
//     get name(): string {
//         return this._name;
//     }
//
//     set name(value: string) {
//         this._name = value;
//     }
// }


class User<T, X> {
    id: T;
    name: X


    constructor(id: T, name: X) {
        this.id = id;
        this.name = name;
    }


}


let user1 = new User<number, string>(1, 'asdasd');
let user2 = new User<string, string>('#$%T^YIGU&F*', 'qweqewqe');
let user3 = new User<boolean, string>(true, 'qweqewqe');





