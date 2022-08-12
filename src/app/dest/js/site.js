$(document).ready(function () {
    $('.icon').on('click', function () {
        $('.values li').removeClass('active');
        $('.icons li').removeClass('active');
        var $item = $(this);
        var index = $(".icons .icon").index($item);

        $('.values li').eq(index).addClass('active');
        $('.icons li').eq(index).addClass('active');
    })
})

$('#main-button').on('click', () => {
    return window.location.href = "#form";
})