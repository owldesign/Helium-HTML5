var App,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

App = (function() {
  function App() {
    this.callouts = bind(this.callouts, this);
    this.hero = bind(this.hero, this);
    this.init = bind(this.init, this);
  }

  App.prototype.init = function() {
    var $languageOptions, $searchDropDown, languageTrigger, searchTrigger;
    languageTrigger = $('.language-trigger');
    $languageOptions = document.querySelector('.language-options');
    languageTrigger.on('click', function(e) {
      e.preventDefault();
      return classie.toggle($languageOptions, 'show');
    });
    searchTrigger = $('.search-trigger');
    $searchDropDown = document.querySelector('.search-box');
    return searchTrigger.on('click', function(e) {
      e.preventDefault();
      return classie.toggle($searchDropDown, 'show');
    });
  };

  App.prototype.hero = function() {
    var heroSwiper;
    if ($('.swiper-container').length > 0) {
      return heroSwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        nextButton: '.swiper-next',
        prevButton: '.swiper-prev',
        onSlideChangeStart: function(swiper) {
          $('.number-wrapper .number').removeClass('fadeInRight');
          return $('.number-wrapper .number').addClass('fadeOutRight');
        },
        onSlideChangeEnd: function(swiper) {
          var number, totalSlides;
          number = swiper.activeIndex + 1;
          totalSlides = swiper.slides.length;
          if (number === 2) {
            $('.swiper-prev').fadeIn();
          }
          if (number === totalSlides - 1) {
            $('.swiper-next').fadeIn();
          }
          $('.number-wrapper .number').removeClass('fadeOutRight');
          $('.number-wrapper .number').addClass('fadeInRight');
          return $('.number-wrapper .number').html(number);
        },
        onReachEnd: function(swiper) {
          return $('.swiper-next').fadeOut();
        },
        onReachBeginning: function(swiper) {
          return $('.swiper-prev').fadeOut();
        }
      });
    }
  };

  App.prototype.callouts = function() {
    return $('.accordion-1 h2').on('click', function() {
      $(this).toggleClass('active');
      return $(this).next('.dd').stop().slideToggle();
    });
  };

  return App;

})();

$(function() {
  var Application;
  Application = new App();
  Application.init();
  Application.hero();
  return Application.callouts();
});
