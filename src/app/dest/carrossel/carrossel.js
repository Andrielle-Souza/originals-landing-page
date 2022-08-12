const seta1 = '<img src="assets/seta-esquerda@3x.svg">'
const seta2 = '<img src="assets/seta-direita@3x.svg">'


$(document).ready(function enable() {

    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        navText: [
            seta1,
            seta2
        ],
        responsive: {
            0: {
                items: 1
            }
        }
    });
})