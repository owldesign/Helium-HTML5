class App
  init: =>
    
    # Language Selector
    languageTrigger = $('.language-trigger')
    $languageOptions = document.querySelector '.language-options'
    languageTrigger.on 'click', (e) ->
      e.preventDefault()
      classie.toggle $languageOptions, 'show'

    # Search Drop Down
    searchTrigger = $('.search-trigger')
    $searchDropDown = document.querySelector '.search-box'
    searchTrigger.on 'click', (e) ->
      e.preventDefault()
      classie.toggle $searchDropDown, 'show'

$ ->
  Application = new App()
  Application.init()