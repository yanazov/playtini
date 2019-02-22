$(document).ready(function(){
   $('.slider-wrap').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
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


/*

$(document).ready(function(){
   $('.active-scroll-pane').jScrollPane({
      contentWidth: '0px'
   });
});

$(document).ready(function(){
   $('.projects-scroll-pane').jScrollPane({
      contentWidth: '0px'
   });
});
$(document).on('click', '.menu .nav li', function(){
   $('.menu .nav li').removeClass('active');
   $(this).addClass('active');
   
});

$(document).on('click', '.content-tab a', function(){
   $('.content-tab a').removeClass('active');
   $(this).addClass('active');
   var index = $(this).index('.content-tab a');
   $(".content-tab-item").removeClass('active');
   $(".content-tab-item").eq(index).addClass('active');
});
$(document).on('click', '.blok-projects-item-open', function(){
   if($(this).find('i').hasClass('fa-angle-down')){
      $(this).find('i').removeClass('fa-angle-down');
      $(this).find('i').addClass('fa-angle-up');
      $(this).parent().parent().parent().find('.blok-projects-item-more.open').height($('.blok-projects-item-more-wrap').height());
      setTimeout(function(){
            $('.projects-scroll-pane').jScrollPane({
            contentWidth: '0px'
         })
      }, 600);
     
      return 0;
   }
   if($(this).find('i').hasClass('fa-angle-up')){
      $(this).find('i').addClass('fa-angle-down');
      $(this).find('i').removeClass('fa-angle-up');
      $(this).parent().parent().parent().find('.blok-projects-item-more.open').height(0);
      setTimeout(function(){
         $('.projects-scroll-pane').jScrollPane({
         contentWidth: '0px'
      })
   }, 600);
      return 0;return 0;
   }
   
});
$(document).on('click', '.select-custom a', function(){
   
   $(this).parent().find('.select-custom-ul').show();
      
  
   
});
$(document).on('click', '.select-custom-ul li', function(){
   $(this).parent().parent().find('a').text($(this).text());
   $(this).parent().hide();   
});

*/