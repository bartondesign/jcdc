

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });

  /*-------------------------------------------------------------------------------
    INSTAGRAM FEED
  -------------------------------------------------------------------------------*/

$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '2191940001',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '2191940001.1677ed0.acd21a1017744a759648a62412ec14a0',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});
