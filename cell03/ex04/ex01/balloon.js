$(document).ready(function() {
  const colors = ['red', 'green', 'blue'];
  let colorIndex = 0;
  let size = 200;

  $("#balloon").click(function() {
    size += 10;

    if (size > 420) {
      size = 200;
      colorIndex = 0;
    } else {
      colorIndex = (colorIndex + 1) % colors.length;
    }

    $(this).css({
      "width": size + "px",
      "height": size + "px",
      "background-color": colors[colorIndex]
    });
  });
});