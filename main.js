let slideIndex = 1;
      showSlides(slideIndex);

      function plusSlides(n) {
        showSlides(slideIndex += n);
      }

      function currentSlide(n) {
        showSlides(slideIndex = n);
      }

      function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
      }




      let i = 1;
    for(let li of carousel.querySelectorAll('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }

    
    let width = 130; 
    let count = 3; 

    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');

    let position = 0; 
    carousel.querySelector('.prev').onclick = function() {
      position += width * count;
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      position -= width * count;
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };

    let a = 1;
    for(let li of carousel2.querySelectorAll('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${a}</span>`);
      a++;
    }

    
    let widthimg = 130; 
    let countimg = 3; 

    let listimg = carousel2.querySelector('ul');
    let listElemsimg = carousel2.querySelectorAll('li');

    let positionimg = 0; 
    carousel2.querySelector('.prev2').onclick = function() {
      positionimg += widthimg * countimg;
      positionimg = Math.min(positionimg, 0)
      list.style.marginLeft = positionimg + 'px';
    };

    carousel2.querySelector('.next2').onclick = function() {
      positionimg -= widthimg * countimg;
      positionimg = Math.max(positionimg, -widthimg * (listElemsimg.length - countimg));
      listimg.style.marginLeft = positionimg + 'px';
    };