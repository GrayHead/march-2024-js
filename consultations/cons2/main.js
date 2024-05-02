console.log('test')

// "Якщо можна, розібрати це завдання в домашньому завданні.
// Хоча б на схожому прикладі, тому що не розумію, як саме потрібно написати код.
// - є змінна х, яка може прийняти будь-яке значення
// (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення ""default""
//     якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні,
//     тобто ті, які приводиться до false, а це 0 null undefined і тд)."

// let y = 0;  // підставляємо різні типи значень
// if(y === null ||  y === 0 || y === false || y === undefined){
//     y = 'new text'
//     console.log(y)
// }else{
//     console.log('true')
// }

// if(!y){
//     console.log('false')
// }else{
//     console.log('true')
// }

// y = y || 'falseeee'   /// OR ||
// console.log(y)

// Питання щодо цього завдання.
// «Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається
// /інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// Коли хотіла , щоб користувач ввів число тижня за допомогою prompt  ,
// і використала для цього завдання switch case , то дані з prompt ніде
// не зберігались і показувало дефолтне значення"

// let day = prompt('Enter day', 'Monday');
//
// switch (day){
//     case 'Monday':
//         console.log('This is Mon');
//         break;
//     case 'Thu':
//         console.log('HELOO');
//         break
//     default:
//         console.log('Wrong day!!!')
// }


// Якщо є об'єкт , в нього є ключі і значення, якими способами можна вивести
// всі його ключі без значень? І відповідно як вивести лише значення(одне)
// і всі разом?

// const obj = {a: 1, b: 2, c: 3};
// console.log('Значення: ' , obj.a, obj.b, obj.c)

// let key = Object.keys(obj)
// console.log(key)

// let values = Object.values(obj)
// console.log(values)

// let arr = [
//     {name: 'Jason' , age: 35},   // 0
//     {name: 'Tom', age: 25, wife: true}  // 1
// ]
//
// let array  = {name: 'Ivan'}
// // console.log(arr[0].name)
// // console.log(arr[1].age, arr[1].wife)
//
// console.log(array.name);


const temp = [
    // {day:'M', morning: 10, night: 5}
    {
        id:1,
        monday:{
            temperature:[
                {name: 'morning', value:10},
                {name: 'night', value:5}
            ]
        },
        month: 'May'
    }
];
console.log('Temp in night is ', temp[0].monday.temperature[1].value, 'gr')


