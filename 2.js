// Cоздать функцию greeting, которая принимает имя и выводит приветствие, 
// используя переданное имя, в консоль.
// Необходимо у пользователя запросить имя и вызвать функцию greeting, 
// передав туда данное значение.

// const userName = prompt("Input your name, please: ");
// greeting(userName);

// function greeting(name) {
//     console.log(`Hello, ${name}`);
// }

function Gretting() {
    const name = prompt('Введите Ваше имя:');
    m = `Привет, ${name}!`;
    alert(m);
}

Gretting();
console.log(m);