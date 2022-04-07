$(function (){
    $('a[href^="#"]').on('click', function (event) {
        let sc = $(this).attr("href");
        let dn = $(sc).offset().top - 100;
        $('html, body').animate({scrollTop: dn}, 1000);
        return false;
    });
})