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

  hero: =>
    if $('.swiper-container').length > 0
      heroSwiper = new Swiper('.swiper-container',
        direction: 'vertical'
        # loop: true
        nextButton: '.swiper-next'
        prevButton: '.swiper-prev'
        onSlideChangeStart: (swiper)->
          $('.number-wrapper .number').removeClass 'fadeInRight'
          $('.number-wrapper .number').addClass 'fadeOutRight'
          
        onSlideChangeEnd: (swiper)->
          number = swiper.activeIndex + 1
          totalSlides = swiper.slides.length
          if number == 2 
            $('.swiper-prev').fadeIn()
          if number == totalSlides - 1
            $('.swiper-next').fadeIn()

          $('.number-wrapper .number').removeClass 'fadeOutRight'
          $('.number-wrapper .number').addClass 'fadeInRight'
          $('.number-wrapper .number').html number
        onReachEnd: (swiper) ->
          $('.swiper-next').fadeOut()
        onReachBeginning: (swiper) ->
          $('.swiper-prev').fadeOut()
      )
  
  callouts: =>
    $('.accordion-1 h2').on 'click', ->
      $(@).toggleClass 'active'
      $(@).next('.dd').stop().slideToggle()


$ ->
  Application = new App()
  Application.init()
  Application.hero()
  Application.callouts()