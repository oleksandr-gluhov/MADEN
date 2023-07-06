
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#splide', {
        type: 'loop',
        perPage: 1,
        // autoplay: 'play',
    });
    splide.mount();
    var elms = document.getElementsByClassName('splide');

    for (var i = 1; i < elms.length; i++) {
        new Splide(elms[i], {
            perPage: 3,
            perMove: 1,
            height: '500px',

            grid: {
                dimensions: [[2, 1]],
                gap: {
                    row: '2px',
                    col: '2px'
                }
            },
            breakpoints: {
                1100: {
                    height: '10rem',
                    perPage: 2,
                    height: '500px',
                    grid: {
                        dimensions: [[2, 1]],
                        gap: {
                            row: '.5em',
                            col: '.5em'
                        }
                    }
                },
                810: {
                    height: '10rem',
                    perPage: 1,
                    height: '500px',
                    grid: {
                        dimensions: [[2, 1]],
                        gap: {
                            row: '.5em',
                            col: '.5em'
                        }
                    }
                }
            }
        }).mount(window.splide.Extensions);
    }

});

// document.addEventListener('DOMContentLoaded', function () {
//     new Splide('#example-grid', {
//         perPage: 3,
//         perMove: 1,
//         height: '20rem',
//         gap: '1em',

//         grid: {
//             dimensions: [[2, 1]],
//             gap: {
//                 row: '1em',
//                 col: '1em'
//             }
//         },
//         breakpoints: {
//             600: {
//                 height: '10rem',
//                 perPage: 1,
//                 grid: {
//                     dimensions: [[2, 1]],
//                     gap: {
//                         row: '.5em',
//                         col: '.5em'
//                     }
//                 }
//             }
//         }
//     }).mount(window.splide.Extensions)
// });