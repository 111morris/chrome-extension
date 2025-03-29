$(function () {
 $('#greeting').keyup(function () {
  $('#greeting').text('Hello, ' + $('#name').val() + '!');
 });
});
