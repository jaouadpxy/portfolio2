

$(document).ready(function() {

    $('.menu').click(function(){
       $('.nav__navbar2').slideToggle('active');

    });

    $('.nav__navbar2 a').click(function(){
        $('.nav__navbar2').slideUp('active');
 
     });
    
});


//scroll



// function newFunction() {
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });
//     $.noConflict();
// }


var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
});
