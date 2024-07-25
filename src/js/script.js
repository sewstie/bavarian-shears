/* Loading screen */

window.onload = function() {

    gsap.to('.loading-screen', {
        duration: 1,
        opacity: 0,
        onComplete: function() {
            document.querySelector('.loading-screen').style.display = 'none';
            locomotiveScroll.update();
        }
    });
};

/* Service animation */

document.querySelectorAll('.services__block').forEach(block => {
    const button = block.querySelector('.services-btn');
    const originalText = button.textContent;
    const originalColor = window.getComputedStyle(button).color;

    block.addEventListener('mouseenter', () => {
        gsap.to(button, { 
            duration: 0.3, 
            color: "#ee4037", 
            onStart: () => button.textContent = 'Book Now',
            ease: "power1.out"
        });
    });

    block.addEventListener('mouseleave', () => {
        gsap.to(button, { 
            duration: 0.3, 
            color: originalColor, 
            onStart: () => button.textContent = originalText,
            ease: "power1.in"
        });
    });
});

/* Locomotive Scroll */

gsap.registerPlugin(ScrollTrigger);

const scroller = document.querySelector('#scroller');

const locomotiveScroll = new LocomotiveScroll({
  el: scroller,    
  smooth: true,
  getDirection: true,
  multiplier: 0.7,
  smartphone: {
      smooth: true,
      multiplier: 1,
  },
  tablet: {
      smooth: true,
      multiplier: 1,
  },
});

const anchorLinks = document.querySelectorAll('a[href^=\\#]:not([href$=\\#])');

anchorLinks.forEach((anchorLink) => {
    let hashval = anchorLink.getAttribute('href');
    let target = document.querySelector(hashval);

    anchorLink.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        locomotiveScroll.scrollTo(target);
        locomotiveScroll.update();
    });
});

/* mobile-menu */

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.header__hamburger');
    const slidingMenu = document.querySelector('.mobile-menu');
    const header = document.querySelector('.header');
  
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        slidingMenu.classList.toggle('open');
        
        if (hamburger.classList.contains('active')) {
            header.style.borderBottom = '2px solid #f0f4efff';
        } else {
            header.style.borderBottom = 'none';
        }
    });
});