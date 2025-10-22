let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let selectedPhrase = "";

const buttons = [
    { id: "btn1", phraseId: "1" },
    { id: "btn2", phraseId: "2" },
    { id: "btn3", phraseId: "3" },
    { id: "btn4", phraseId: "4" },
    { id: "btn5", phraseId: "5" },
    { id: "btn6", phraseId: "6" }
];

buttons.forEach(buttonData => {
    let button = document.getElementById(buttonData.id);
    button.addEventListener("click", function() {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            selectedPhrase = buttonData.phraseId;
            tg.MainButton.setText(`Отправить фразу №${selectedPhrase}`);
            tg.MainButton.show();
        }
    });
});

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(selectedPhrase);
});