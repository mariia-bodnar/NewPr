$(document).ready(() => {
  $('.main_title').mousemove(() => {
    $('.main_title').css('color', 'orange')
  })
  $('.main_title').mouseleave(() => {
    $('.main_title').css('color', 'black')
  })
  $('#menu_list_1').mouseenter(() => {
    $('#dot_1').css('height', '12px').css('transition', '0.5s')
  })
  $('#menu_list_2').mouseenter(() => {
    $('#dot_2').css('height', '12px').css('transition', '0.5s')
  })
  $('#menu_list_3').mouseenter(() => {
    $('#dot_3').css('height', '12px').css('transition', '0.5s')
  })
  $('#menu_list_1').mouseleave(() => {
    $('#dot_1').css('height', '5px').css('transition', '0.5s')
  })
  $('#menu_list_2').mouseleave(() => {
    $('#dot_2').css('height', '5px').css('transition', '0.5s')
  })
  $('#menu_list_3').mouseleave(() => {
    $('#dot_3').css('height', '5px').css('transition', '0.5s')
  })
  $('p#title_2').mouseenter(() => {
    $('p#title_2').css('color', 'red')
  })
  $('p#title_2').mouseleave(() => {
    $('p#title_2').css('color', 'black')
  })
  var SubMenu = function () {
    $('#menu_list_1').hover(function () {
      $('#column_menu_1')
        .stop()
        .slideToggle()
        .css('display', 'block')
        .css('margin-left', '-52px')
    })
    $('#menu_list_2').hover(function () {
      $('#column_menu_2')
        .stop()
        .slideToggle()
        .css('display', 'block')
        .css('margin-left', '-52px')
    })
    $('#menu_list_3').hover(function () {
      $('#column_menu_3')
        .stop()
        .slideToggle()
        .css('display', 'block')
        .css('margin-left', '-16px')
    })
    $('#secondary_menu_1').hover(function () {
      $('#secondary_1')
        .stop()
        .slideToggle()
        .css('display', 'block')
        .css('margin-left', '178px')
    })
    $('#secondary_menu_2').hover(function () {
      $('#secondary_2')
        .stop()
        .slideToggle()
        .css('display', 'block')
        .css('margin-left', '178px')
    })
    $('#secondary_menu_3').hover(function () {
      $('#secondary_3')
        .stop()
        .slideToggle('200')
        .css('display', 'block')
        .css('margin-left', '178px')
    })
    $('.header__more-menu').mouseenter(() => {
      $('.line_1').css('width', '25px').css('transition', '0.5s')
      $('.line_3').css('width', '15px').css('transition', '0.5s')
    })
    $('.header__more-menu').mouseleave(() => {
      $('.line_1').css('width', '15px').css('transition', '0.5s');
      $('.line_3').css('width', '25px').css('transition', '0.5s');
    })
    $('.header__more-menu').click(() => {
      $('.close_tag_button').toggleClass("display_block");
      $('.lines').toggleClass('display_none ');
      $('#left_menu').toggleClass('size_menu');
      // $('.size_menu').css("height","100%")
      $('.container').toggleClass('conteiner_moove');
    })
    // $(".close_tag_button").click (()=>{
      
    // })
    $(".close_tag").click (()=>{
      // $('.conteiner').toggle();
      $(".size_menu").toggle();
      $('.close_tag_button').toggleClass("display_none_4");
      // $('header__more-menu.display_none').toggle();
    })
    $('.header__search').click(() => {
      $('.header__search').css('display', 'none');
      $('.header__social-wrap').toggleClass('display_none');
      $('.input').toggleClass('input__hide');
    })

    // $('body').not(' .header__search').click(() => {
    //   $(".input__hide").css("display","none");
    //   $(".header__search").show();
    //   $(".header__social-wrap").show();
    // });
  }
  $(function () {
    SubMenu()
  })

  $(document).ready(function () {
    console.log('slider init')
    $('.slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 420,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    })
  })
  $(document).ready(function () {
    console.log('slider init')
    $('.slider_1').slick({
      dots: true,
      infinite: true,
      speed: 600,
      interval: 3000,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
    })
  })

  // const MenuQuery = () => {
  //   $('#home').hover(function () {
  //     $('#home_menu').stop().slideToggle().css('display', 'block')
  //     // .css('margin-left', '-52px')
  //   });
  //   $('#home_menu').hover(function () {
  //     $('#home_menu').stop().slideToggle().css('display', 'block')
  //   });
  //   $('#layout').hover(function () {
  //     $('#layout_menu').stop().slideToggle().css('display', 'block')
  //     // .css('margin-left', '-52px')
  //   });
  //   $('#layout_menu').hover(function () {
  //     $('#layout_menu').stop().slideToggle().css('display', 'block')
  //   });
  //   $('#category').hover(function () {
  //     $('#category_menu').stop().slideToggle().css('display', 'block')
  //   });
  //   $('#category_menu').hover(function () {
  //     $('#category_menu').stop().slideToggle().css('display', 'block').css("","")
  //   });
  //   $('#pages').hover(function () {
  //     $('#pages_menu').stop().slideToggle().css('display', 'block')
  //   });
  //   $('#pages_menu').hover(function () {
  //     $('#pages_menu').stop().slideToggle().css('display', 'block')
  //   });
  //   $('#posts').hover(function () {
  //     $('#posts_menu').stop().slideToggle().css('display', 'block')
  //   });
  //   $('#posts_menu').hover(function () {
  //     $('#posts_menu').stop().slideToggle().css('display', 'block')
  //   });
  //   $('#entertaiment').hover(function () {
  //     $('#entertaiment_menu').stop().slideToggle().css('display', 'block')
  //   });

  // }
  // $(function () {
  //   MenuQuery()
  // })
  $('.menu_button').on('click', () => {
    $('#menu_media').toggle()
  });

  $('#layout').on('click', () => {
    $('#layout_menu').toggle()
  });
  $('#home').on('click', () => {
    $('#home_menu').toggle()
  });

  $('#category').on('click', () => {
    $('#category_menu').toggle()
  });
  $('#posts').on('click', () => {
    $('#posts_menu').toggle()
  });

  $('#pages').on('click', () => {
    $('#pages_menu').toggle();
  });
  $('#entertaiment').on('click', () => {
    $('#entertaiment_menu').toggle()
  });
})
;