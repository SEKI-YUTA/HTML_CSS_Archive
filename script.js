'use strict';



{
    const $circle = document.getElementById('js_circle');
    const $slide = document.getElementById('js_places_cardSlide');

  let hovering = false;

    $slide.addEventListener('mousemove', (event) => {
        // pointerX = event.pageX;
        // pointerY = event.pageY;
        hovering = true;
        $circle.style.transform = 'scale(1)';
        // circle.style.left = (pointerX - 50) + 'px';
        // circle.style.top = (pointerY - 50) + 'px';
        // console.log('event.pageX' + event.pageX)
        // console.log('event.pageY' + event.pageY)
        // changePos();
        if(hovering) {
          $circle.style.left = event.clientX + 'px';
          $circle.style.top = event.clientY + 'px';
        }
        // $circle.style.transform = 'scale(0)';
    });
    $slide.addEventListener('mouseout',(event) => {
      $circle.style.transform = 'scale(0)';
      hovering = false;
    })
    window.addEventListener('scroll',() => {
      $circle.style.transform = 'scale(0)';
      hovering = false;
    })

    // setInterval(changePos, 20);
}