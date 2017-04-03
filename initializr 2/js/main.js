$(document).ready( function(){
  $('#bladeone').addClass('active');
});

function changeEdge(bladetype) {
  $('.active').removeClass('active');
  $('#' + bladetype + ', #blade' + bladetype).addClass('active');
}
