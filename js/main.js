'use strict';

(function ($) {
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
    // autoWidth:true, 
    //autoplay: true,
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
  }); // var howOpen = $('.how-open'),
  //     howModal = $('.how-modal'),
  //     mobMenu = $('.mobile-menu'),
  //     burger = $('.burger');
  // howOpen.on('click', function (e) {
  //     howOpen.removeClass('show')
  //     $(this).addClass('show')
  // });
  // $(document).mouseup(function (e) {
  //     if (!howOpen.is(e.target) && howOpen.has(e.target).length === 0 &&
  //         !howModal.is(e.target) && howModal.has(e.target).length === 0
  //     ) {
  //         howOpen.removeClass('show');
  //     }
  // });
  // burger.on('click', function () {
  //     mobMenu.toggleClass('open');
  //     burger.toggleClass('open');
  //     $('body').toggleClass('modal-open');
  //     $('.fade-body').toggleClass('show');
  // });
  // $(document).mouseup(function (e) {
  //     if (!burger.is(e.target) && burger.has(e.target).length === 0 &&
  //         !mobMenu.is(e.target) && mobMenu.has(e.target).length === 0
  //     ) {
  //         mobMenu.removeClass('open');
  //         burger.removeClass('open');
  //         $('body').removeClass('modal-open');
  //         $('.fade-body').removeClass('show');
  //     }
  // });
})(jQuery);