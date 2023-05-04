console.log(document)
console.log($(document))

//jquery방법
$(document).ready(function() {
    console.log('ready-문서의 DOM이 완성되면 실행되는 이벤트')
})

$(function() {
    console.log('방법2')
})

//javascript방법
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded-문서의 DOM이 완성되면 실행되는 이벤트')
})

$(function() {
    console.log('js 방법2')
})

//마우스이벤트
$('.hello').click(function() {
    $('.hello').css('color','red')
})
$('.num').click(function() {
    //$('.num').css('color','blue') //전체 바뀜
    $(this).css({'color': 'blue', 'font-weight' : 'bold'}) //선택한 글자만 바뀜
})
$('.num').on('click',function() {
    $(this).css({'color':'red','font-weight':'bold'})
})
$('.numbers').mouseover(function(){
    //$('.numbers').css('background-color','green')
    $(this).css('background-color', 'yellow')
})
$('.numbers').on('mouseleave', function() {
    $(this).css('background-color', 'skyblue')
})
$('.hover').hover(function() {
    $(this).css('color','red')
}, function() {
    $(this).css('color','blue')
})

$('.menu1').hover(function() {
    //$('.sub1').css('display', 'block')
    $('.sub1').addClass('block')
}, function() {
    //$('.sub1').css('display', 'none')
    $('.sub1').removeClass('block')
})

$('.menu1').hover(function() {
    $(this).toggleClass('block')
})

$(window).scroll(function() {
    console.log('scroll')
})
$(window).on('scroll',function() {
    console.log('scrolls')
})

//-------------------------------------
$('.input-key').keydown(function(e) {
    console.log(e.code)
    if(e.code === 'ArrowUp') {
        console.log('up')
    } else if(e.code === 'ArrowRight') {
        console.log('right')
    } else if (e.code === 'ArrowLeft') {
        console.log('left')
    } else if (e.code === 'ArrowDown') {
        console.log('down')
    } else {
        console.log('others')
    }
})
$('.input-key').on('keydown',function(e) {
    console.log(e.code)
})

//------------------------------------------
$('#todo-form').submit(function(e) {
    e.preventDefault();
    const todo=$('input[name=todo]').val()
    console.log(todo)
    $('.todos').append(`<li>${todo}</li>`)

    $('input[name=todo]').val("")
    
})
