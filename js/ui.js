$(document).ready(function(){
   $('.slider-wrap').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      autoplaySpeed: 2000,
      autoplay: true,
      adaptiveHeight: true
   });
 });
 $(document).on('click', '.slider-next', function(){
   $('.slider-wrap').slick('slickNext');
   
});
$(document).on('click', '.slider-prev', function(){
   $('.slider-wrap').slick('slickPrev');
   
});

$(document).on('click', '.currency-item', function(){
   $('.currency-item').removeClass('active');
   $(this).addClass('active');
   
});

$(document).on('click', '.lang-item', function(){
   $('.lang-item').removeClass('active');
   $(this).addClass('active');
   
});

$(document).on('click', '.account-item__a', function(){
   $('.account-item__a').removeClass('active');
   $(this).addClass('active');
   
});

$(document).on('click', '.nav-item', function(){
   $('.nav-item').removeClass('active');
   $(this).addClass('active');
   
});

$(document).on('click', '.login-close', function(){
   $('.modal').hide();
   $('.login').hide();   
});

$(document).on('click', '.modal', function(){
   $('.modal').hide();
   $('.login').hide();   
});

$(document).on('click', '.welcome__login', function(){
   $('.modal').show();
   $('.login').show();   
});


$(document).on('click', '.welcome__create', function(){
   $('.modal').show();
   $('.login').show();   
});


