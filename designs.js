// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var heightWidth, Submit, color, table;
heightWidth = $('#sizePicker');
Submit = $('#sizePicker'); 
color = $('#colorPicker'); 
table = $('#pixelCanvas');

// code for drawing the grid up to line 23
Submit.submit(function makeGrid(grid) {
  var gridHeght = $('#inputHeight').val();
  var gridWidth = $('#inputWidth').val();
  for (var i = 1; i <= gridHeght; i++) {
   $('table').append("<tr></tr>");
   for (var j = 1; j <= gridWidth; j++) {
    $('tr:last').append("<td></td>");
    $('td').attr("class", 'cells');
   }
  }
  grid.preventDefault();
});

// code for painting a cell when it is clicked up to line 29
$('#pixelCanvas').click(function (event) {
  var myColor = color.val();
  $(event.target).css('background-color', myColor);
});
