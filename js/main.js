// Import the Bootstrap bundle
//
// Includes Popper and all of Bootstrap's JS plugins.
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// Custom JS here
// console.log('hello')
var news = new Splide('#news', {
    type: 'false',
    perPage: 3,
    focus: '0',
    arrows: true,
    breakpoints: {
      640: {
        perPage: 1,
      },
      768: {
        perPage: 1,
      },
      1200: {
        perPage: 1,
      },
      2560: {
        perPage: 1,
      },
    }
  
  });
  
  news.mount();

var projects = new Splide('#projects', {
    type: 'loop',
    perPage: 3,
    focus: '0',
    arrows: true,
    breakpoints: {
      640: {
        perPage: 1,
      },
      768: {
        perPage: 2,
      },
      1200: {
        perPage: 3,
      },
      2560: {
        perPage: 3,
      },
    }
  
  });
  
  projects.mount();

var support = new Splide('#support', {
    type: 'loop',
    autoplay: 'true',
    perPage: 1,
    focus: '0',
    arrows: false,
    breakpoints: {
      640: {
        perPage: 2,
      },
      768: {
        perPage: 3,
      },
      1200: {
        perPage: 5,
      },
      2560: {
        perPage: 5,
      },
    }
  
  });
  
  support.mount();

var reviews = new Splide('#reviews', {
    type: 'loop',
    autoplay: 'false',
    perPage: 1,
    focus: '0',
    arrows: true,
    breakpoints: {
      640: {
        perPage: 1,
      },
      768: {
        perPage: 1,
      },
      1200: {
        perPage: 1,
      },
    }
  
  });
  
  reviews.mount();

var statistics = new Splide('#statistics', {
    type: 'loop',
    autoplay: 'true',
    perPage: 1,
    focus: '0',
    arrows: false,
    breakpoints: {
      640: {
        perPage: 2,
      },
      768: {
        perPage: 3,
      },
      1200: {
        perPage: 5,
      },
      2560: {
        perPage: 6,
      },
    }
  
  });
  
  statistics.mount();
