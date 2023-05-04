function submitJavascript() {
    document.getElementById('div1').innerHTML = '반갑습니다'
}

function submitJquery(){
    $('#div1').html('잘지내세요')
}

function getValue() {
    let value = $('input').val();
    console.log(value)
}

function setValue() {
    $('input').val('패쓰워드를 입력하세요')
}

function changeJs() {
    let span= document.querySelector('#change')
    span.style='font-sixe: 20px; color: red;'
}

function changeJquery() {
    $('#change').css('font-size', '40px')
    $('#change').css('color', 'blue')
}

function getJquery() {
    console.log($("#change").css('color'))
    
}
function changeAttr() {
    $("#move").attr('href', 'htts://www.google.com')
}

$(document).ready(function() {

})

function changeAttrJs() {
    let a = document.querySelector('#move')
    a.setAttribute('href', 'https://www.daum.net')
}

function changeTextJs() {
    let p =document.querySelector('#text')
    p.textContent = 'js 체인지'
}

function changeTextJquery() {
    $('#text').text('Jquery change')
}

function changeHtmlJs() {
    let p = document.querySelector('#html')
    p.innerHTML='<h3>javasrcipt</h3>'
}

function changeHtmlJquery() {
    $('#html').html('<h1>Jquery</h1>')
}