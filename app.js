let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.setText("Выберите фразу");
tg.MainButton.color = "#2cab37";
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.hide();

let selectedPhrase = "";

function selectPhrase(phraseId, buttonText) {
    selectedPhrase = phraseId;
    tg.MainButton.setText(`Отправить: ${buttonText}`);
    tg.MainButton.show();
}

document.getElementById("btn1").addEventListener("click", function() {
    selectPhrase("1", "Кавказская пленница");
});

document.getElementById("btn2").addEventListener("click", function() {
    selectPhrase("2", "Иван Васильевич");
});

document.getElementById("btn3").addEventListener("click", function() {
    selectPhrase("3", "Джентльмены удачи");
});

document.getElementById("btn4").addEventListener("click", function() {
    selectPhrase("4", "Операция Ы");
});

document.getElementById("btn5").addEventListener("click", function() {
    selectPhrase("5", "Бриллиантовая рука");
});

document.getElementById("btn6").addEventListener("click", function() {
    selectPhrase("6", "Служебный роман");
});

tg.MainButton.onClick(function() {
    if (selectedPhrase) {
        console.log("Sending data:", selectedPhrase);
        tg.sendData(selectedPhrase);
    }
});
