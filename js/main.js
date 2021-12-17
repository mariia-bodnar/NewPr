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
        .slideToggle("200")
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
    $('.header__more-menu').click(() => {
      $('.line_1').toggleClass('display_none')
      $('.line_2').toggleClass('transition_2')
      $('.line_3').toggleClass('display_none')
      $('#line_4').toggleClass('line_4')
      $('.lines').toggleClass('gap')
      $('#left_menu').toggleClass('wrapper_popular')
      $('.container').toggleClass('conteiner_moove')
    })
    $('.header__search').click(() => {
      $('.header__search').css('display', 'none')
      $('.header__social-wrap').toggleClass('display_none')
      $('.input').toggleClass('input__hide')
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
})
