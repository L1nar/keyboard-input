const phone = document.getElementById('phone');

phone.addEventListener('keydown', function (event) {
    let isDigit = false;
    if (event.key >= 0 && event.key <= 0) {
        isDigit = true;
    }
    if (isDigit == true) {
        console.log('Число')
    } else {
        console.log('Не число');
    }
    /*console.log(event.key); event - событие. При возникновнии событий, бразуер автоматически передает в функцию-обработчик объект,
 содержащий подробную информацию об этом событии. При описании функции этот параметр обычно называют 'event' (можно так же встреить evt или просто e).
 Свойство 'key' объекта 'event' содержит нажатый на клавиатуре символ.*/
});