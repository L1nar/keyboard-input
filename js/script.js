const phone = document.getElementById('phone');

phone.addEventListener('keydown', function (event) {
    console.log(event.key);
    let isDigit = false;
    let isDash = false;
    let isControl = false;
    if (event.key >= 0 && event.key <= 9) { // Проверка ввода цифр
        isDigit = true;
    }
    if (event.key == '-') { // Проверка ввода '-'
        isDash = true;
    }
    if (event.key == 'arrowleft' || 'arrowright' || 'BackSpace') { // Проверка нажатия на клавиши управления курсором или backspace
        isControl = true;
    }
    if (!isDigit && !isDash && !isControl) { // Если нажата не цифра, не тире, и не клавиши управления курсором или backspace, то отменить ввод
        event.preventDefault();
    }
});

/*console.log(event.key); event - событие. При возникновнии событий, бразуер автоматически передает в функцию-обработчик объект,
содержащий подробную информацию об этом событии. При описании функции этот параметр обычно называют 'event' (можно так же встреить evt или просто e).
Свойство 'key' объекта 'event' содержит нажатый на клавиатуре символ.*/
// preventDefault - отмена действия по умолчанию