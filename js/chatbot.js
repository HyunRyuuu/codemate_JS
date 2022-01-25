function checkText() {
    var value = document.getElementById("orderBox").value;

    var chatBox = document.getElementById("chatBox");
    var character = document.getElementById("character");
    if( value == "잘 자" || "잘자" ) {
        chatBox.innerHTML = "晚安!";
        chatBox.style.color = "#fff";
        character.src = "../img/lulu_sleep.png";
        document.body.style.background = "#322938";
    } else {
        chatBox.innerHTML = "등록되지 않은 명령어 입니다.";
    }
}