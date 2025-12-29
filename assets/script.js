const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('menu-open');

    // Hamburger animation to cross
    hamburger.children[0].classList.toggle('rotate-45');
    hamburger.children[0].classList.toggle('translate-y-2');
    hamburger.children[1].classList.toggle('opacity-0');
    hamburger.children[2].classList.toggle('-rotate-45');
    hamburger.children[2].classList.toggle('-translate-y-2');
  };

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent closing immediately
    toggleMenu();
  });

  // Close button click handler
  if (closeMenu) {
    closeMenu.addEventListener('click', (e) => {
      e.stopPropagation();
      if (mobileMenu.classList.contains('menu-open')) {
        toggleMenu();
      }
    });
  }

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target) && !closeMenu?.contains(e.target) && mobileMenu.classList.contains('menu-open')) {
      toggleMenu();
    }
  });

  // Close menu when clicking on any link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu.classList.contains('menu-open')) toggleMenu();
    });
  });

  // Navbar Fixed on Scroll
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('mainNavbar');
  if (!navbar) return;
  const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  if (scrollPercentage > 10) {
    navbar.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'animate__animated', 'animate__fadeInDown');
    navbar.classList.remove('relative');
  } else {
    navbar.classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'animate__animated', 'animate__fadeInDown');
    navbar.classList.add('relative');
  }
});

document.querySelectorAll('.dropdown-container').forEach(container => {
    const menu = container.querySelector('.dropdown-menu');
    let timeoutId;
    
    container.addEventListener('mouseenter', () => {
        clearTimeout(timeoutId);
        menu.classList.remove('hidden');
    });
    
    container.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(() => {
            menu.classList.add('hidden');
        }, 150); // Small delay to prevent flickering
    });

    
});


// -------video play---------------
   const video = document.getElementById("customVideo");
  const playBtn = document.getElementById("playBtn");
  const thumbnail = document.getElementById("videoThumbnail");

  let hasPlayedOnce = false;

  // First play
  playBtn.addEventListener("click", () => {
    video.play();
    playBtn.classList.add("hidden");

    if (!hasPlayedOnce) {
      thumbnail.classList.add("hidden");
      hasPlayedOnce = true;
    }
  });

  // Pause video (thumbnail will NOT return)
  video.addEventListener("click", () => {
    if (!video.paused) {
      video.pause();
      playBtn.classList.remove("hidden");
    }
  });


