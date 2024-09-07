function smoothScroll(target) {
    $('html, body').animate({
        scrollTop: $(target).offset().top - 100
    }, 1000);
}

$(document).ready(function () {
    var heroSection = $('.hero-section');
    var heroSectionHeight = heroSection.height();
    var header = $('.sticky-header');
    var headerHeight = header.height();
    var currentPage = window.location.pathname.split("/").pop();

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll > heroSectionHeight + headerHeight) {
            header.css('transform', 'translateY(-100%)');
        } else {
            header.css('transform', 'translateY(0)');
        }
    });

    $('nav a').on('click', function (e) {
        var target = $(this).attr('href');
        if (target.startsWith('#')) {
            e.preventDefault();
            smoothScroll(target);
        } else if (target === 'index.html') {
            e.preventDefault();
            window.location.href = 'index.html';
        }
    });

    $('nav ul li a').each(function () {
        var linkPage = $(this).attr('href');
        if (currentPage === linkPage || (currentPage === "" && linkPage === "index.html")) {
            $(this).addClass('active');
        }
    });

    $('.hamburger-menu').on('click', function () {
        $('.nav-list').toggleClass('active');
        $(this).toggleClass('active');
    });

    // close menu when a link is clicked
    $('.nav-list a').on('click', function () {
        $('.nav-list').removeClass('active');
        $('.hamburger-menu').removeClass('active');
    });

    //close menu when clicking outside
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.sticky-header').length) {
            $('.nav-list').removeClass('active');
            $('.hamburger-menu').removeClass('active');
        }
    });

    $(window).off('scroll');

    $('#current-year').text(new Date().getFullYear());
});