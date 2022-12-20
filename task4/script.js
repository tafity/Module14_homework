/*Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число.

При клике на кнопку происходит следующее:

Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.
Пример. Если пользователь ввёл 150 и 200, то запрос будет вида https://picsum.photos/150/200.
После получения данных вывести ниже картинку на экран.*/
const button = document.querySelector ('button');
const resultNode = document.querySelector ('.result');
button.addEventListener('click', e => {
    const width = +document.querySelector('.Width-input').value;
    const height = +document.querySelector('.Height-input').value;
    
    resultNode.textContent = '';
    if (!(width >= 100 && width <= 300 && height >= 100 && height <= 300)) {
        resultNode.textContent = 'число вне диапазона от 100 до 300'
        return;
    }
        fetch(`https://picsum.photos/${width}/${height}`)
        .then((response) =>  response.url)
        .then((result) => {
            postPhoto(result);
            console.log(result);
        })
    })

  function postPhoto (photoUrl) {
    const cardBlock =  `<img src = '${photoUrl}'/>`
    resultNode.innerHTML = cardBlock;
  }