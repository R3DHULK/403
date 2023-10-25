var computer = $('#computer'),
  response = $('#response'),
  connect = $('#connect'),
  reload = $('#reload'),
  container = $('#container'),
  containerTit = $('#container__title');

connect.click(function() {
  $(this).toggleClass('button--disabled');
  reload.toggleClass('button--disabled');
  container.addClass('container__anim');
  container.one('webkitTtransitionEnd otransitionend msTransitionEnd transitionend', function() {
    container.addClass('container__jump');
    container.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
      containerTit.addClass('container__title--anim')
    });
  });
});

reload.click(function() {
  $(this).toggleClass('button--disabled');
  connect.toggleClass('button--disabled');
  container.removeClass('container__anim');
  container.removeClass('container__jump');
  containerTit.removeClass('container__title--anim');
});