'use strict';

(function ($) {
  /*------------------
      Smooth scroll
  --------------------*/
  $('body').scrollspy({
    target: '.banner-btn',
    offset: 99
  });
  $('.banner-btn a').on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
  /*------------------
     Choose Language
  --------------------*/

  var chooseLang = $('.site-lang__current'),
      chooseLangInner = $('.site-lang__inner');
  chooseLang.on('click', function () {
    $(this).toggleClass('show');
  });
  $(document).mouseup(function (e) {
    if (!chooseLang.is(e.target) && chooseLang.has(e.target).length === 0 && !chooseLangInner.is(e.target) && chooseLangInner.has(e.target).length === 0) {
      chooseLang.removeClass('show');
    }
  });
  /*------------------
     Burger
  --------------------*/

  var burger = $('.burger'),
      mobMenu = $('.mobile-menu');
  burger.on('click', function () {
    $('.mobile-menu').toggleClass('open');
    burger.toggleClass('open');
    $(this).find('span').removeClass('no-animation');
    $('body').toggleClass('modal-open');
    $('.fade-body').toggleClass('show');
  });
  $('.fade-body').on('click', function () {
    mobMenu.removeClass('open');
    burger.removeClass('open');
    $('body').removeClass('modal-open');
    $('.fade-body').removeClass('show');
  });
  /*------------------
       Get how pop-up
  --------------------*/

  var howTitle = $('.get-how__title'),
      allPopUp = $('.pop-up');
  howTitle.on('click', function () {
    var popUp = $(this).closest('.get-how__item').find(allPopUp);

    if (popUp.hasClass('show')) {
      popUp.removeClass('show');
    } else {
      allPopUp.removeClass('show');
      popUp.addClass('show');
    }
  });
  $(document).mouseup(function (e) {
    if (!howTitle.is(e.target) && howTitle.has(e.target).length === 0 && !allPopUp.is(e.target) && allPopUp.has(e.target).length === 0) {
      allPopUp.removeClass('show');
    }
  });
  /*------------------
       Sliders
  --------------------*/

  $('#partner-slider').owlCarousel({
    loop: true,
    center: false,
    autoplayTimeout: 9999,
    autoplayHoverPause: true,
    dots: true,
    nav: true,
    navText: ['<span class="left"></span>', '<span class="right"></span>'],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 5,
        nav: false
      }
    }
  });
  $('#statistics-slider').owlCarousel({
    dots: true,
    // nav: true,
    // navText: ['<span class="left"></span>', '<span class="right"></span>'],
    items: 1,
    autoHeight: true
  });
  /*------------------
         Tabpane
  --------------------*/

  var tabs = $('[data-toggle="tab"]');
  var profileItems = $('.profile__items');
  tabs.on('click', function () {
    profileItems.hide();
  }); // for dropdown

  $('.dropdown-menu-schedule').on('click', function (event) {
    event.stopPropagation();
  }); // $('.schedule-select').selectpicker({
  //     container: 'body'
  // });

  $('body').on('click', function (event) {
    var target = $(event.target);

    if (target.parents('.bootstrap-select').length) {
      event.stopPropagation();
      $('.bootstrap-select.open').removeClass('open');
    }
  });
  /*------------------
           Btn-about
   --------------------*/

  var btnAbout = $('.btn-about'),
      aboutCard = $('.about-card__item');
  btnAbout.on('click', function () {
    var closest = $(this).closest('.about-card__item');

    if (closest.hasClass('show')) {
      closest.removeClass('show');
    } else {
      aboutCard.removeClass('show');
      closest.addClass('show');
    }
  });
  $(document).mouseup(function (e) {
    if (!btnAbout.is(e.target) && btnAbout.has(e.target).length === 0 && !aboutCard.is(e.target) && aboutCard.has(e.target).length === 0) {
      aboutCard.removeClass('show');
    }
  });
  /*------------------
            Touchable
   --------------------*/

  if (!"ontouchstart" in document.documentElement) {
    $(".action-link__title").addClass("show");
  } else {
    $(".action-link__title").removeClass("show");
  }

  ;
  var tabNav = $('#action-tab').children();
  tabNav.on('click', function (e) {
    if ($(this).attr('id') == 'action-schedule-tab') {
      $('.profile__inner').addClass('col-full');
      $('.special__img').addClass('img-hide');
    } else {
      $('.profile__inner').removeClass('col-full');
      $('.special__img').removeClass('img-hide');
    }
  });
})(jQuery);