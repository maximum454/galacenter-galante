$(function () {
    $('.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.tabs').children('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
})