x=0
y=0

function zoomIn(event) {
    var pre = document.getElementById("circle");
    pre.style.visibility = "visible";


    a=document.getElementById("zoom1").offsetLeft;
    b=document.getElementById("zoom1").offsetTop;
    c=document.getElementById("zoom1").offsetHeight
    d=document.getElementById("zoom1").offsetWidth;




    document.addEventListener('mousemove', (event) => {
        window.x=event.clientX;
        window.y=event.clientY;

        var el = document.getElementById("body");
        console.log(el.scrollTop)
    });

    if ($('#zoom1').is(':hover')) {
        console.log("HOVER")
          var img = document.getElementById("zoom1");
          pre.style.backgroundImage = "url('images/taxonomy_MQ.jpg')";
      }
     console.log(y,b,c)
    if (y>b && x>a){
      console.log("AA");
        var img = document.getElementById("zoom1");
        pre.style.backgroundImage = "url('images/taxonomy_MQ.jpg')";
    }

    var posX = event.offsetX;
    var posY = event.offsetY;
    pre.style.backgroundPosition=(-posX*3)+"px "+(-posY*3)+"px";
  
  }
  
  function zoomOut() {
    var pre = document.getElementById("preview");
    pre.style.visibility = "hidden";
  }


  jQuery(document).ready(function() {

    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
     
    $(document).mousemove(function(e){
      mouseX = e.pageX - 250;
      mouseY = e.pageY - 250; 
    });
      
    setInterval(function(){
      xp += ((mouseX - xp)/6);
      yp += ((mouseY - yp)/6);
      $("#circle").css({left: (xp-mouseX) +'px', top: yp +'px'});
    }, 20);
  
  });



