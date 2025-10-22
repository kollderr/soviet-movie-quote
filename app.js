let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let selectedPhrase = "";

// Обработчики для всех кнопок
document.getElementById("btn1").addEventListener("click", function() {
    selectedPhrase = "1";
    tg.MainButton.setText("Отправить фразу из 'Кавказской пленницы'");
    tg.MainButton.show();
});

document.getElementById("btn2").addEventListener("click", function() {
    selectedPhrase = "2";
    tg.MainButton.setText("Отправить фразу из 'Иван Васильевич...'");
    tg.MainButton.show();
});

document.getElementById("btn3").addEventListener("click", function() {
    selectedPhrase = "3";
    tg.MainButton.setText("Отправить фразу из 'Джентльмены удачи'");
    tg.MainButton.show();
});

document.getElementById("btn4").addEventListener("click", function() {
    selectedPhrase = "4";
    tg.MainButton.setText("Отправить фразу из 'Операция Ы'");
    tg.MainButton.show();
});

document.getElementById("btn5").addEventListener("click", function() {
    selectedPhrase = "5";
    tg.MainButton.setText("Отправить фразу из 'Бриллиантовая рука'");
    tg.MainButton.show();
});

document.getElementById("btn6").addEventListener("click", function() {
    selectedPhrase = "6";
    tg.MainButton.setText("Отправить фразу из 'Служебный роман'");
    tg.MainButton.show();
});

// Обработчик главной кнопки
Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(selectedPhrase);
    tg.close();
});
