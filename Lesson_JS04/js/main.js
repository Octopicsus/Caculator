// // // var x = 2;

// // // switch (x) {
// // //     case 1:
// // //         document.write('Найдена единица');
// // //         break;
// // //     case 2:
// // //         document.write('Найдена двойка');
// // //         break;
// // //     case 3:
// // //         document.write('Найдена тройка');
// // //         break;
// // //     case 4:
// // //         document.write('Найдена четвёрка');
// // //         break;
// // //     default:
// // //         document.write('Совпадений не найдено');
// // // }



// // var x = prompt('Введите первое число');
// // var z = prompt('1 знак (+), 2 знак (-), 3 знак (*) и 4 знак (/) ');
// // var y = prompt('Введите второе число');

// // var x = parseInt(x);
// // var y = parseInt(y);

// // var result;

// // switch (z) {
// //     case '1':
// //         result = x + y;
// //         break;
// //     case '2':
// //         result = x - y;
// //         break;
// //     case '3':
// //         result = x * y;
// //         break;
// //     case '4':
// //         result = x / y;
// //         break;
// //     default:
// //         result = 'Вы ввели не существующию команду';
// // }
// // document.write(result);



var x = prompt('Введите первое число');
var z = prompt('1 знак (+), 2 знак (-), 3 знак (*) и 4 знак (/)');
var y = prompt('Введите второе число');

var x = parseInt(x);
var y = parseInt(y);

var result;

if (z == '1') {
    result = x + y;
} else if (z == '2') {
    result = x - y;
} else if (z == '3') {
    result = x * y;
} else if (z == '4') {
    result = x / y;
} else {
    result = "Вы ввели не существующию команду"
}
document.write(result);