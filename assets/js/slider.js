window.addEventListener( 'load', function() {

    new Glider( this.document.querySelector( '.people__slider' ), {

        slidesToShow: 1.2,
        draggable: true,
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 465,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 'auto',
                itemWidth: 222,
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 'auto',
                itemWidth: 222,
              }
            }
          ]

    } );

} );