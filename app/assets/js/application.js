var App,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

App = (function() {
  function App() {
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

  return App;

})();

$(function() {
  var Application;
  Application = new App();
  return Application.init();
});
