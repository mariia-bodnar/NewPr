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
        .css('margin-left','-52px')
    });
    $('#menu_list_2').hover(function () {
        $('#column_menu_2')
          .stop()
          .slideToggle()
          .css('display', 'block')
          .css('margin-left','-52px')
      });
      $('#menu_list_3').hover(function () {
        $('#column_menu_3')
          .stop()
          .slideToggle()
          .css('display', 'block')
          .css('margin-left','-16px')
      });
    

  }
  $(function () {
    SubMenu()
  })
})
