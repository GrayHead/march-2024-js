// class User {
//     id: number = -999;
//     name: string = 'john';
//
//
//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//     }
//
//     greeting(msg: string): void {
//         console.log(`${msg} my name is ${this.name}`);
//     }
// }
//
// class PuperUser extends User {
//     isAdmin: boolean;
//
//
//     constructor(id: number, name: string, isAdmin: boolean) {
//         super(id, name); // call of super constructor (User constructor)
//         this.isAdmin = isAdmin;
//     }
// }
//
// let su1 = new PuperUser(1, 'vasya', true);
// let su2 = new PuperUser(2, 'petya', false);
// let user1 = new User(3, 'kokos');
// let user2 = new User(4, 'anrikos');
//
// const users: Array<User> = [
//     su1, su2, user1, user2
// ];


// abstract class Person {
//     id: number;
//     name: string;
//
//     abstract greeting(msg: string): void;
//
//
//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//     }
// }
//
// // let person = new Person(1, 'asdsad');
// let p1: Person = {
//     id: 111,
//     name: 'asdasd',
//     greeting(msg: string) {
//         //.......
//     }
// };
// let p2: Person = {
//     id: 123,
//     name: 'qwe',
//     greeting(msg: string) {
//         //.......
//         //.......
//         //.......
//     }
// };
//
// p1.greeting('hello'); //???????
//
//
// class User extends Person {
//
//     greeting(msg: string) {
//         console.log('sadasd' + ' ' + msg);
//     }
//
//     asd() {
//
//     }
//
// }
//
// class Policeman extends Person {
//     greeting(msg: string): void {
//         console.log(msg, 'hey!!! stop!!!');
//     }
//
//     foobar() {
//
//     }
//
//     foobar2() {
//
//     }
//
//     foobar3(asd: number): number {
//         return 100500;
//
//     }
//
//
//     constructor(id: number, name: string, private isDetective: boolean) {
//         super(id, name);
//         this.isDetective = isDetective;
//     }
//
//
// }
//
// let persons: Person[] = [
//     new User(123, 'asd'),
//     new Policeman(234, 'werte', true)
// ];

//
// interface IUser {
//     id: number;
//     name: string;
//     status: boolean;
//     greeting: (msg: string, symbol: string) => string
// }
//
//
// let asd: IUser = {
//     id: 1,
//     name: 'asdas',
//     status: false,
//     greeting: (msg, symbol) => {
//         return 'asd';
//     }
// }
//
// let asd2: IUser = {
//     id: 132,
//     name: 'ljfdhjdshgf',
//     status: true,
//     greeting: (msg, symbol) => {
//         //....??????
//         return msg + ' ' + symbol;
//     }
// }
//
// interface ISuperUser extends IUser {
//     isAdmin: boolean;
// }

// class User implements ISuperUser {
//
//     id: number;
//     isAdmin: boolean;
//     name: string;
//     status: boolean;
//
//     greeting(msg: string, symbol: string): string {
//         return "";
//     }
//
//
// }


interface IUser {
    id: number;
    name: string;
    status: boolean;
    greeting: (msg: string, symbol: string) => string
    // greeting(msg: any, asdqwe: string): void;

}

interface IAdmin {
    isAdmin: boolean;
}

type SuperPuperUserType = IUser & { age: number, height: number, password: string } & IAdmin;

type SomeType = IUser | IAdmin;

let x: SomeType = {
    isAdmin: true
}


type Seasons = 'summer' | "winter";

class Car {
    productionSeason: Seasons;
}

let asd: Car = {productionSeason: "winter"}


let users: IUser[] = [];
