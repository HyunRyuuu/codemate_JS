var text_content = '전광판만들기과제완료';
var i = 0;

function click_btn(){
    if ( i < text_content.length ) {
        text.innerHTML += text_content[i];
        i++;
    }
}