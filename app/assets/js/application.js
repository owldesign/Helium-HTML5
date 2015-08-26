var App,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

App = (function() {
  function App() {
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
          $('.number-wrapper .number').removeClass('fadeOut');
          return $('.number-wrapper .number').addClass('fadeOut');
        },
        onSlideChangeEnd: function(swiper) {
          var number;
          number = swiper.activeIndex + 1;
          $('.number-wrapper .number').removeClass('fadeOut');
          $('.number-wrapper .number').addClass('fadeIn');
          return $('.number-wrapper .number').html(number);
        },
        onReachEnd: function(swiper) {
          return console.log('end reached');
        },
        onReachBeginning: function(swiper) {
          return console.log('beginning reached');
        }
      });
    }
  };

  return App;

})();

$(function() {
  var Application;
  Application = new App();
  Application.init();
  return Application.hero();
});
