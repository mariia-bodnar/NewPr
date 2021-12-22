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
        .slideToggle()
        .css('display', 'block')
        .css('margin-left', '178px')
    })
    $('.header__more-menu').mouseenter(() => {
      $('.line_1').css('width', '25px').css('transition', '0.5s')
      $('.line_3').css('width', '15px').css('transition', '0.5s')
    })
    $('.header__more-menu').mouseleave(() => {
      $('.line_1').css('width', '15px').css('transition', '0.5s')
      $('.line_3').css('width', '25px').css('transition', '0.5s')
    })
  }

  $('.header__search-input').on('focus', () => {
    $('.header__search-input').toggleClass('header__search-active')
    $('.header__social-wrap').fadeToggle()
  })

  $('.header__search-input').on('blur', () => {
    $('.header__search-input').toggleClass('header__search-active')
    $('.header__social-wrap').fadeToggle()
  })

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

  $('.menu_button').on('click', () => {
    $('#menu_media').toggle()
  })

  $('#layout').on('click', () => {
    $('#layout_menu').toggle()
  })
  $('#home').on('click', () => {
    $('#home_menu').toggle()
  })

  $('#category').on('click', () => {
    $('#category_menu').toggle()
  })
  $('#posts').on('click', () => {
    $('#posts_menu').toggle()
  })

  $('#pages').on('click', () => {
    $('#pages_menu').toggle()
  })
  $('#entertaiment').on('click', () => {
    $('#entertaiment_menu').toggle()
  })
})

$(document).ready(function () {
  menu()
})
$(window).resize(function () {
  menu()
})
function menu() {
  if ($(window).width() >= 1200) {
    $('.header__more-menu').click(() => {
      $('.close_tag_button').toggleClass('display_block')
      $('.lines').toggleClass('display_none ')
      $('#left_menu').slideToggle(0.5)
      $('.container').toggleClass('conteiner_moove')
    })
    console.log('breakpoint 1440')
  } else if ($(window).width() <= 1999) {
    $('.header__more-menu').click(() => {
      $('#left_menu').slideToggle(0.5)
      $('.container').toggleClass('conteiner_moove')
    })
    $('.close_tag').click(() => {
      $('#left_menu').slideToggle(0.5)
    })
    console.log('breakpoint 1024')
  }
}

window.addEventListener('scroll', () => {
  // console.log(window.pageYOffset)
  
  if (window.pageYOffset > 500) {
    $('.gototop').css('display', 'block')
  }

  if (window.pageYOffset === 0) {
    $('.gototop').css('display', 'none')
  }
})

// $(document).ready(function () {
//   $(document).scrollTop(function () {
//   if ($(window).scrollTop() >= 500) {
//     $('.gototop').css('display', 'block')
//   }
//   if ($(window).scrollTop() === 0) {
//     $('.gototop').css('display', 'none')
//   }
// })
// })