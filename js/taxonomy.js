
var pre = document.getElementById("preview");
pre.style.visibility = "hidden";
pre.style.position = "absolute";


mouseX=0;
mouseY=0;

function zoomIn(event) {
    var pre = document.getElementById("preview");
    pre.style.visibility = "visible";
    if ($('#zoom1').is(':hover')) {
          var img = document.getElementById("zoom1");
          pre.style.backgroundImage = "url('../images/taxonomy_HQ.jpg')";

          c=document.getElementById("zoom1")
          //or however you get a handle to the IMG
          var width = img.clientWidth;
          var height = img.clientHeight;
          

          new_size=(3*width).toString() +"px "+(3*height)+"px"

          pre.style.backgroundSize = new_size;


          /*var width = preview.clientWidth;
          console.log(width)
          preview.style.height=width*/

          var preview_width = pre.clientWidth;

          document.onmousemove=function(e) {
            mouseX=e.clientX;
            mouseY=e.clientY;

          }
          
          pre.style.position = "absolute";
          pre.style.left = (mouseX+100)+'px';
          /*pre.style.top = (mouseY+100)+'px';*/

          

          var bodyRect = document.body.getBoundingClientRect(),
          elemRect = img.getBoundingClientRect(),
          offset   = elemRect.top - bodyRect.top;

          var position=(offset+(height/2)-(pre.clientHeight/2))
          pre.style.top = (position)+'px';
          


      }
     
    var posX = event.offsetX;
    var posY = event.offsetY;
    pre.style.backgroundPosition=(-posX*3+preview_width/2)+"px "+(-posY*3+preview_width/2)+"px";

  
  }
  
  function zoomOut() {
    var pre = document.getElementById("preview");
    pre.style.visibility = "hidden";
  }


  $(document).ready(function(){
    $('.filterable .btn-filter').click(function(){
        var $panel = $(this).parents('.filterable'),
        $filters = $panel.find('.filters input'),
        $tbody = $panel.find('.table tbody');
        if ($filters.prop('disabled') == true) {
            $filters.prop('disabled', false);
            $filters.first().focus();
        } else {
            $filters.val('').prop('disabled', true);
            $tbody.find('.no-result').remove();
            $tbody.find('tr').show();
        }
    });
    $('.filterable .filters input').keyup(function(e){
        /* Ignore tab key */
        var code = e.keyCode || e.which;
        if (code == '9') return;
        /* Useful DOM data and selectors */
        var $input = $(this),
        inputContent = $input.val().toLowerCase(),
        $panel = $input.parents('.filterable'),
        column = $panel.find('.filters th').index($input.parents('th')),
        $table = $panel.find('.table'),
        $rows = $table.find('tbody tr');
        /* Dirtiest filter function ever ;) */
        var $filteredRows = $rows.filter(function(){
            var value = $(this).find('td').eq(column).text().toLowerCase();
            return value.indexOf(inputContent) === -1;
        });
        /* Clean previous no-result if exist */
        $table.find('tbody .no-result').remove();
        /* Show all rows, hide filtered ones (never do that outside of a demo ! xD) */
        $rows.show();
        $filteredRows.hide();
        /* Prepend no-result row if all rows are filtered */
        if ($filteredRows.length === $rows.length) {
            $table.find('tbody').prepend($('<tr class="no-result text-center"><td colspan="'+ $table.find('.filters th').length +'">No result found</td></tr>'));
        }
    });
});