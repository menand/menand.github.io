// пропишем функцию random
const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

// найдем кнопку
const btn = document.querySelector('#btn');
// повесим обработчик событий
btn.addEventListener('mouseenter', () => {
    btn.style.left = `${random(0, 90)}%`;
    btn.style.top = `${random(0, 90)}%`;
});

// в случае победы выведем:
btn.addEventListener('click', () => {
    alert('Ну вот и зачем?.. Просили же...');
    alert('Даже не знаю - что теперь делать то?');
    alert("Оно правда того стоило?");
    alert("Надеюсь, что вы рады");
    alert("Да и как вообще вы смогли эту кнопку нажать?");
    alert("Любопытно, на долго ли вас хватит?");
    alert("(кстати, это всё можно закончить - просто нажав на кнопку 'ОК')");
});






























// // функция рандом
// const random = (min, max) => {
//   const rand = min + Math.random() * (max - min + 1);
//   return Math.floor(rand);
// };

// // убегающая кнопка
// const btn = document.querySelector('#btn');
// btn.addEventListener('mouseenter', () => {
//     btn.style.left = `${random(0, 90)}%`;
//     btn.style.top = `${random(0, 90)}%`;
// });

// // победа
// btn.addEventListener('click',
//   () => alert('Congratulations! You hit the button! What are you doing with your life?')
// );