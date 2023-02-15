    // nav toggle
      const toggleButton = document.getElementById("toggle-button")
      const navList = document.getElementById('nav-list')

      toggleButton.addEventListener('click',()=>{
        navList.classList.toggle('active')
      })
    
    //  section slider
     let slideIndex = 0;
      showSlides()

      function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex>slides.length){slideIndex=1} 
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides,2000)
      }

// section carousel
   
const carousels = [
  {
    carousel: document.querySelector("#carousel-1"),
    btnPrev: document.querySelector("#btn-prev-1"),
    btnNext: document.querySelector("#btn-next-1")
  },
  {
    carousel: document.querySelector("#carousel-2"),
    btnPrev: document.querySelector("#btn-prev-2"),
    btnNext: document.querySelector("#btn-next-2")
  }
];

const width = 200; 
const count = 3; 
let position = 0;

carousels.forEach(({ carousel, btnPrev, btnNext }) => {
  let currentSlide = 0;
  const slides = carousel.children;
  let list = carousel.querySelector('.slides');
  let listElems = carousel.querySelectorAll('.slide');
  
  btnPrev.addEventListener("click", () => {
    position += width * count;
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
  });

  btnNext.addEventListener("click", () => {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
  });
  console.log(slides)
});


