document.addEventListener("DOMContentLoaded", function() {
    // Найти все элементы, которые нужно анимировать
    const animatedElements = document.querySelectorAll('.right img, .about .left, .skills .skill-items .item, .portfolio .portfo-items .item');

    // Добавить класс active для всех найденных элементов
    animatedElements.forEach(function(element) {
        element.classList.add('active');
    });
});
