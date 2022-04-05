const modal = $.modal();
// при клике на кнопку запустить функцию

document.addEventListener('click', function (e) {
    if (e.target.className = "item__buttion") {
        modal.open()
    }
    
})