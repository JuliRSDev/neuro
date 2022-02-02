( function() {

    /* nav Sticky */
    const nav = document.querySelector( '.nav' );
    const navSticky = nav.offsetTop;
    const neuroLogo = document.querySelector( '.neuro-width' );

    /* about Show links */
    const aboutLink = document.querySelector( '#about-link' );
    const aboutShow = document.querySelector( '.nav__link-about--show' );
    const aboutIcon = document.querySelector( '.about-icon' );

    /* nav Sticky */
    window.onscroll = () => {

        // Sticky Menu
        if ( window.pageYOffset >= navSticky ) {
            nav.classList.add( 'nav__sticky' );
            neuroLogo.src = 'assets/img/img-index/Neuro-black.png';
            aboutShow.style.top = '55%';
            aboutShow.style.backgroundColor = '#FFF';

        } else {
            nav.classList.remove( 'nav__sticky' );
            neuroLogo.src = 'assets/img/img-index/Neuro-white.png';
            aboutShow.style.top = '11%';
            aboutShow.style.backgroundColor = 'transparent';
        }

    }

    /* about Show links */
    window.addEventListener( 'click', ( e ) => {

        if ( e.target == aboutLink || e.target == aboutIcon ) {
            aboutShow.style.display = 'block';
            aboutIcon.classList.add( 'about-icon--rotate' );
        } else if ( e.target != aboutShow ) {
            aboutShow.style.display = '';
            aboutIcon.classList.remove( 'about-icon--rotate' );
        }

    } );

    /* show menu mobile */
    const iconMenu = document.querySelector( '.nav__icon--menu' );
    const navMobile = document.querySelector( '.nav__mobile' );
    const MenuMobile = document.querySelector( '.nav__mobile' );

    iconMenu.addEventListener( 'click', () => {
        navMobile.classList.add( 'mobile-show' );
    } );

    window.addEventListener( 'click', ( e ) => {
        if (e.target != MenuMobile && e.target != iconMenu) {
            navMobile.classList.remove( 'mobile-show' );
        }
    } );

    /* Energy & Focus */
    const focus = document.querySelector( '.focus' );
    const colorOrange = document.querySelector( '.energy__color--orange' );
    const colorBlue = document.querySelector( '.energy__color--blue' );
    const colorBlue2 = document.querySelector( '.color--blue2' );
    const focusBlue = document.querySelector( '.energy__blue' );
    const focusOrangeShow = document.querySelector( '.energy__item--inactive-focus' );

    /* Calm & Clarity */
    const calm = document.querySelector( '.calm' );
    const colorYellow = document.querySelector( '.energy__color--yellow' );
    const calmBrown = document.querySelector( '.energy__brown' );
    const calmBrown2 = document.querySelector( '.color-brown2' );
    const calmYellowShow = document.querySelector( '.energy__item--inactive-calm' );
    const waveBottom = document.querySelector( '.focus__wave--bottom' );

    window.addEventListener( 'click', ( e ) => {
        /* Energy & Focus */
        if (e.target == colorOrange) {
            focus.classList.add( 'focus--orange' );
            focusBlue.style.display = 'none';
            focusOrangeShow.style.display = 'flex';
        } else if( e.target == colorBlue || e.target == colorBlue2 ) {
            focus.classList.remove( 'focus--orange' );
            focusBlue.style.display = 'flex';
            focusOrangeShow.style.display = 'none';
        }

        /* Calm & Clarity */
        if ( e.target == colorYellow ) {
            calm.classList.add( 'calm--yellow' );
            calmBrown.style.display = 'none';
            calmYellowShow.style.display = 'flex';
            waveBottom.classList.add( 'focus__wave--bottom-secondary' );
        } else if ( e.target == calmBrown2 ) {
            calm.classList.remove( 'calm--yellow' );
            calmBrown.style.display = 'flex';
            calmYellowShow.style.display = 'none';
            waveBottom.classList.remove( 'focus__wave--bottom-secondary' );
        }
    } );


} )();