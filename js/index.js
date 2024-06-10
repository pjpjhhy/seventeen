// 헤더 스크롤에 따른 반응
$(function () {
    var toggle = $('#toggle');
    var menu = $('nav ul');

    toggle.on('click', function (e) {
        e.preventDefault();

        if (menu.is(':visible')) {
            menu.hide(400);
            $('body').removeClass('no-scroll');
        } else {
            menu.show(400);
            $('body').addClass('no-scroll');
        }
    });

    var prevScrollpos = window.pageYOffset;
    var header = document.querySelector("header");

    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos || currentScrollPos < 10) {
            header.style.top = "0";
        } else {
            if (!menu.is(':visible')) {
                header.style.top = "-100px";
            }
        }

        prevScrollpos = currentScrollPos;
    };
});




// 이미지클릭시 박스 출현
$(function () {
    $('.box01 p').hide();
    $('.box01 button').click(function () {
        $(this).next().slideToggle(400);
    });
});


// 탑버튼
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 20) {
            $('#topButton').fadeIn();
        } else {
            $('#topButton').fadeOut();
        }
    });

    $('#topButton').click(function(){
        $('html, body').animate({scrollTop : 0}, 700);
        return false;
    });
});


// 팀 인사 애니메이션 효과
document.addEventListener('DOMContentLoaded', () => {
    const splashText = document.querySelector('#splash');
    let isAnimationTriggered = false;
  
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const isMobile = window.innerWidth <= 768;
  
      let triggerPosition;
  
      if (isMobile) {
        triggerPosition = windowHeight * (2 / 5);
      } else {
        triggerPosition = 2000;
      }
  
      if (scrollPosition >= triggerPosition && !isAnimationTriggered) {
        splashText.style.opacity = '1';
        splashText.style.transform = 'translateY(0)';
        createSmoke(splashText);
        isAnimationTriggered = true; 
      }
    }

    window.addEventListener('scroll', handleScroll);
  

    handleScroll();
  });
  
//   멤버개인사진들 슬라이드 효과 마우스 호버시 정지 후 다시 재생
const sliderContainers = document.querySelectorAll('.slider-container');

function nextSlide() {
    sliderContainers.forEach(sliderContainer => {
        const firstImage = sliderContainer.firstElementChild;
        sliderContainer.style.transform = `translateX(-${firstImage.offsetWidth + 20}px)`;
        sliderContainer.appendChild(firstImage);
        sliderContainer.style.transition = 'none';
        setTimeout(() => {
            sliderContainer.style.transition = 'transform 0.5s ease';
            sliderContainer.style.transform = 'translateX(0)';
        });
    });
}

let slideInterval = setInterval(nextSlide, 3000);

sliderContainers.forEach(sliderContainer => {
    sliderContainer.addEventListener('mouseover', () => {
        clearInterval(slideInterval);
    });

    sliderContainer.addEventListener('mouseout', () => {
        slideInterval = setInterval(nextSlide, 3000);
    });
});


