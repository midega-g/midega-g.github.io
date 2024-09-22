function smoothScroll(target) {
    $('html, body').animate({
        scrollTop: $(target).offset().top - 100
    }, 100);
}

$(document).ready(function () {
    var heroSection = $('.hero-section');
    var heroSectionHeight = heroSection.height();
    var header = $('.sticky-header');
    var headerHeight = header.height();
    var currentPage = window.location.pathname.split("/").pop();

    // Sticky header on scroll
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll > heroSectionHeight + headerHeight) {
            header.css('transform', 'translateY(-100%)');
        } else {
            header.css('transform', 'translateY(0)');
        }
    });

    // Smooth scroll for internal links
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

    // Add 'active' class to the current page link
    $('nav ul li a').each(function () {
        var linkPage = $(this).attr('href');
        if (currentPage === linkPage || (currentPage === "" && linkPage === "index.html")) {
            $(this).addClass('active');
        }
    });

    // Toggle hamburger menu
    $('.hamburger-menu').on('click', function () {
        $('.nav-list').toggleClass('active');
        $(this).toggleClass('active');
    });

    // Close menu when a link is clicked
    $('.nav-list a').on('click', function () {
        $('.nav-list').removeClass('active');
        $('.hamburger-menu').removeClass('active');
    });

    // Close menu when clicking outside
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.sticky-header').length) {
            $('.nav-list').removeClass('active');
            $('.hamburger-menu').removeClass('active');
        }
    });

    // Remove any previous scroll event listeners
    $(window).off('scroll');

    // Update year dynamically
    $('#current-year').text(new Date().getFullYear());
});
