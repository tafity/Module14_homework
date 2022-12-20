/*Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. 
При клике на кнопку происходит следующее:

Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, 
где get-параметр limit — это введённое число.
Пример. Если пользователь ввёл 5, то запрос будет вида: https://picsum.photos/v2/list?limit=5.
После получения данных вывести ниже картинки на экран. */

const button = document.querySelector ('button');
let result = document.querySelector ('.result');


function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
          } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
              callback(result);
            }
          }
}
xhr.send();
};
function displayResult(apiData) {
    let cards = '';
    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
      cards = cards + cardBlock;
    });   
result.innerHTML = cards
};
button.addEventListener('click', () => {
  const inputValue = document.getElementById('input').value;
    if (!(inputValue >= 1 && inputValue <= 10)) {
        result.textContent = 'число вне диапазона от 1 до 10'
        //console.log (inputValue.value)
        return;
    }else {
        useRequest(`https://picsum.photos/v2/list?limit=${inputValue}`, displayResult);
  }
})