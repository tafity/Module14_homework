/*Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

Заголовок первого input — «номер страницы».
Заголовок второго input — «лимит».
Заголовок кнопки — «запрос».
При клике на кнопку происходит следующее:

Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input.
Пример. Если пользователь ввёл 5 и 7, то запрос будет вида https://picsum.photos/v2/list?page=5&limit=7.*/

const button = document.querySelector ('button');
const resultNode = document.querySelector ('.result');

button.addEventListener ('click', e => {
    const inputPage = document.querySelector('.input-page').value;
    const inputLimit = document.querySelector('.input-limit').value;
    resultNode.textContent = '';
    if (!(inputPage >= 1 && inputPage <= 10)) {
        resultNode.textContent = 'Номер страницы вне диапазона от 1 до 10'
    } else if (!(inputLimit >= 1 && inputLimit <= 10)) {
        resultNode.textContent = 'Лимит вне диапазона от 1 до 10';

    } else if(!(inputPage >= 1 && inputPage <= 10 && inputLimit >= 1 && inputLimit <= 10)) {
        resultNode.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10'
        return
    } else {
        fetch(`https://picsum.photos/v2/list?page=${inputPage}&limit=${inputLimit}`)
        .then(response =>  response.json())
        .then((result) => {
            postPhoto(result);
            console.log(result);
        })
    }
});

  function postPhoto(apiData) {
    let cards = '';
    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image" style= "width: 400px"
          />
        </div>
      `;
      cards = cards + cardBlock;
    });   
resultNode.innerHTML = cards
};