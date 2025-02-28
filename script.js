const menuOpenbtn = document.querySelector("#menu-open");
const menuClosebtn = document.querySelector("#menu-close");
menuOpenbtn.addEventListener("click",()=>{
    document.body.classList.toggle("show-mobile-menu");
})
menuClosebtn.addEventListener("click",()=>{
    menuOpenbtn.click();
})
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween:25,
    grabCursor:true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets:true,
      scrollable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints:{
        0:{
          slidesPerView:1  
        },
        768:{
            slidesPerView:2 
          },
        1024:{
            slidesPerView:3  
        },
    }
  });
  