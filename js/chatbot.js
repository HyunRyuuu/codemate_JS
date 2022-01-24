// TIL
//#1. 챗봇
//    - 기본적인 챗봇은 조건문을 통해 유저가 특정 질문을 던졌을 때, 그에 맞는 대답을 해주는 것


function checkText() {
    var value = document.getElementById("orderBox").value;
    console.log(value);


    var chatBox = document.getElementById("chatBox");
    if(value == "안녕") {
        console.log(chatBox);
        chatBox.innerHTML = "Hii";
    } else {
        console.log(value);
    }
}