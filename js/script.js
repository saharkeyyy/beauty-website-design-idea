document.addEventListener('DOMContentLoaded', function() {
    let wrapper = document.getElementById('wrapper'); 
    let topLayer = wrapper.querySelector('.top');
    let handle = wrapper.querySelector('.handle');
    let skew = 0;
    let delta = 0;
     
    if(wrapper.className.indexOf('skewed') != -1){
      skew = 1000;
    }
     
    wrapper.addEventListener('mousemove', function(e){
      delta = (e.clientX - window.innerWidth / 2) * 0.5;
      
     handle.style.left = e.clientX + delta + 'px';  
      
     topLayer.style.width = e.clientX + skew + delta + 'px'; 
      
    });                         
                             
                             
    });
    $(document).ready(function() {

    
        $('.center').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
    
        $('.single-item').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        });
                    
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    $(document).ready(function() {

      var curPage = 1;
      var numOfPages = $(".skw-page").length;
      var animTime = 1000;
      var scrolling = false;
      var pgPrefix = ".skw-page-";
    
      function pagination() {
        scrolling = true;
    
        $(pgPrefix + curPage).removeClass("inactive").addClass("active");
        $(pgPrefix + (curPage - 1)).addClass("inactive");
        $(pgPrefix + (curPage + 1)).removeClass("active");
    
        setTimeout(function() {
          scrolling = false;
        }, animTime);
      };
    
      function navigateUp() {
        if (curPage === 1) return;
        curPage--;
        pagination();
      };
    
      function navigateDown() {
        if (curPage === numOfPages) return;
        curPage++;
        pagination();
      };
    
      $(document).on("mousewheel DOMMouseScroll", function(e) {
        if (scrolling) return;
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
          navigateUp();
        } else { 
          navigateDown();
        }
      });
    
      $(document).on("keydown", function(e) {
        if (scrolling) return;
        if (e.which === 38) {
          navigateUp();
        } else if (e.which === 40) {
          navigateDown();
        }
      });
    
    });

    let btn=document.getElementsByClassName('submit-btn')
    btn.addEventListener('click',()=>{
      alert('check')
    } )
    const modalBtn=document.getElementById('nav_contact')
const modal=document.querySelector('.modal-box')
const closeModalBtn=document.getElementById('close-modal')

modalBtn.addEventListener('click',()=>{
  modal.classList.add('active2')
})
closeModalBtn.addEventListener('click',()=>{
  modal.classList.remove('active2')
})
