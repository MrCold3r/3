$('.btnhide').click(function(e){
    $('.text').nextAll().hide(700);
    $('.btnshow').show();
})
$('.btnshow').click(function(e){
    $('.text').nextAll().show(700);
    $('.btnhide').show();
    $('.btnshow').hide();
})

let mouseItem = document.querySelector('.circle')
window.onmousemove = function(e){
    mouseItem.style.position = 'fixed';
    mouseItem.style.left = e.clientX + -35 + 'px';
    mouseItem.style.top = e.clientY + -35 + 'px';
}

