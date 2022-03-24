'use strict';



{
    const $circle = document.getElementById('js_circle');
    const $slide = document.getElementById('js_places_cardSlide');
    const $slider = document.querySelector('.bl_places_cardSlider');


  let hovering = false;

    $slide.addEventListener('mousemove', (event) => {
        // pointerX = event.pageX;
        // pointerY = event.pageY;
        hovering = true;
        $circle.style.transform = 'scale(1)';
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



    let isDown = false;
    let startX;
    let scrollLeft;

    $slider.addEventListener('mousedown', (e)=> {
      isDown = true;
      $slider.classList.add('active');
      console.log(e.pageX);
      startX = e.pageX - $slider.offsetLeft;
      scrollLeft = $slider.scrollLeft;
      console.log(startX);
    });
    $slider.addEventListener('mouseleave', ()=> {
      isDown = false;
      $slider.classList.remove('active');
    });
    $slider.addEventListener('mouseup', ()=> {
      isDown = false;
      $slider.classList.remove('active');
    });
    $slider.addEventListener('mousemove', (e)=> {
      if(!isDown) return;

      e.preventDefault();

      const x = e.pageX - $slider.offsetLeft;
      // console.log({x, startX});
      const walk = x - startX;
      console.log(walk);
      $slider.scrollLeft = scrollLeft - walk;
    });
}