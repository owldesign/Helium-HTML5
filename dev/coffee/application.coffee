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
          $('.number-wrapper .number').removeClass 'fadeOut'
          $('.number-wrapper .number').addClass 'fadeOut'
          
        onSlideChangeEnd: (swiper)->
          number = swiper.activeIndex + 1
          $('.number-wrapper .number').removeClass 'fadeOut'
          $('.number-wrapper .number').addClass 'fadeIn'
          $('.number-wrapper .number').html number
        onReachEnd: (swiper) ->
          console.log 'end reached'
        onReachBeginning: (swiper) ->
          console.log 'beginning reached'
        # paginationBulletRender: (index, className) ->
        #   console.log className 
        #   console.log index 
      )

      # $('.swiper-prev').on 'click', ->
      #   heroSwiper.slidePrev()

      # $('.swiper-next').on 'click', ->
      #   heroSwiper.slideNext()

$ ->
  Application = new App()
  Application.init()
  Application.hero()