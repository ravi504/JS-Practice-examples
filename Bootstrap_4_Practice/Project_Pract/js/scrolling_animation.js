var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();//754;
  var window_top_position = $window.scrollTop();//0;
  var window_bottom_position = (window_top_position + window_height);//754
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();//287,349,260,260,260,260,260;
    var element_top_position = $element.offset().top;//445.6,445.6,818.0,818.0,1101.4,1101.4;
    var element_bottom_position = (element_top_position + element_height);//732.6,794.6,1078.0,1078.0,1361.4,1361.4
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');