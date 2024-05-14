// console.log('test');

// Коли ми ітеруєм цикл в зворотньому напрямку чи змінюються в елементів масиву індекси?
// Якщо ні, то як зробити зворотній цикл?  (additional1 9 завдання з зворотніми масивами)

// let arr = [1,2,3,4,5,6,7,8,9];
// let arrNew=[];
// for (let i = arr.length-1; i >= 0; i--) {
//     const elem = arr[i];
//     arrNew[arrNew.length] = elem;
// }
// console.log(arr)
// console.log(arrNew)


// Є масив [2,17,13,6,22,31,45,66,100,-18].
//     Потрібно замінити кожне число кратне 3 на слово 'okten'.
//     Як саме це зробити? Можете показати на схожому прикладі,
//     коли потрібно, наприклад, змінити кратне 5. Дякую.
// "Можете пояснити , будь ласка, це завдання :

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let number1 = [{},{},[{},{}]];
//
// let for5 = [];
// for (let item of number) {
//     if (item % 5 === 0) {
//         console.log(item)
//         item = 'test';
//         for5[for5.length] = item
//     }else {
//         for5[for5.length] = item
//     }
// }
// console.log(for5)

// let random = [];
//
// for (let i = 0; i < 20; i++) {
//     random[random.length] = Math.floor(Math.random() * 30)
// }


// //створити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти набільшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор"

// "Доброго дня.
// Можете показати як зробити завдання з lesson_3/additional ?
//     Без використання функцій, лише циклами.
//     Умова:
// Дан масив
// - знайти книжкки з найбільшою кількістю жанрів

let arrBooks = [
    {
        id: 1,
        name: 'Book 1',
        pages: 177,
        author: ['Gary R'],
        zhanr: ['Comedy', 'Dram']
    },
    {
        id: 2,
        name: 'Book 2',
        pages: 1000,
        author: ['Taras Shevchenko'],
        zhanr: ['Comedy', 'Dram', 'Any']
    },
    {
        id: 3,
        name: 'Book 3',
        pages: 250,
        author: ['Nazar Shevchenko'],
        zhanr: ['Any']

    },
    {
        id: 4,
        name: 'Book 4',
        pages: 500,
        author: ['Shevchenko555', 'Franko'],
        zhanr: ['Comedy', 'Dram', 'Any']

    },
    {
        id: 5,
        name: 'Book 5',
        pages: 500,
        author: ['Shevchenko555', 'Franko'],
        zhanr: ['Comedy', 'Dram', 'Any']

    }
]

// "Завдання:
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// Не можу зрозуміти, як виконати це завдання,
//     можете пояснити, як можливо за допомогою цикла знайти найбільше число в масиві? Дякую."

let books = [
    {
        title: 'HarryPotter and cup of whisky',
        pageCount: 80,
        genre: ['fantasy', 'artistic', 'comedy'],
        // authors: [{name: 'Author name1', age: 29}, {name: 'Author name2', age: 30}]
    },
    {
        title: 'Astral',
        pageCount: 250,
        genre: ['horror', 'fantasy', 'NEWWWW'],
        // authors: [{name: 'Author name1', age: 32}]
    },
    {
        title: 'TomasSoer',
        pageCount: 1190,
        genre: ['artistic', 'ffff', 'three'],
        // authors: [{name: 'Author name1', age: 45}, {name: 'Author name2', age: 19}, {name: 'Author name3', age: 28}]
    },
    {
        title: 'TTT',
        pageCount: 1190,
        genre: ['artistic', 'ffff', 'three'],
        // authors: [{name: 'Author name1', age: 45}, {name: 'Author name2', age: 19}, {name: 'Author name3', age: 28}]
    },
];

let bigBook = books[0]
// console.log(books)
// console.log('******')

for (const book of books) {
    console.log(book.pageCount)
    if (book.pageCount > 2) {

        bigBook = book;
    }
}
console.log(bigBook)

// console.log(bigBook)

// let genres = [];
// let bigGenre = books[0]
// console.log(bigGenre)
// for (const book of books) {
//     console.log(book.genre.length);
//     // if (book.genre.length > bigGenre.genre.length) {
//     //     bigGenre = book;
//     // }
//     //
//     // if(book.genre.length === bigGenre.genre.length){
//     //         genres[genres.length] = book;
//     // }
//
//     if (book.genre.length === bigGenre.genre.length) {
//         genres[genres.length] = book;
//     }  else if(book.genre.length > bigGenre.genre.length){
//         bigGenre = book;
//     }
//
// }
// console.log(bigGenre)
// console.log(genres)

// for (const book of books) {
//     console.log(book.title, book.genre)
//     document.write(`<hr>`)
//     for (const key in book) {
//         document.write(`<div>
//           <h2>${key} - ${book[key]}</h2>
//
//  </div>`)
//     }
// }