;(function($) {
    "use strict";

    var nav_offset_top = $('header').height();
    /*-------------------------------------------------------------------------------
	  Navbar
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed
    function navbarFixed(){
        if ( $('.main_menu_area, .search_area').length ){
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top ) {
                    $(".main_menu_area, .search_area").addClass("navbar_fixed");
                } else {
                    $(".main_menu_area, .search_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();


    /*----------------------------------------------------*/
    /*  Galeria de imagens js
    /*----------------------------------------------------*/

    function loadImg(url) {
        var str1 = '<img class = "resize_big_image" src =';
        var str2 = str1.concat(url)
        var str3 = '>';
        var res = str2.concat(str3);

        document.getElementById("big_image").innerHTML = res;
    }


    $( '#galeria img ' ).on( 'click', function () {
        $( '#galeria' ).find( 'img.active' ).removeClass( 'active' );
        $( this ).addClass( 'active' );
    });

    function myMap() {
        var myLatLng = {lat: -23.598476, lng: -46.676665};
        var mapOptions = {
            center: myLatLng,
            zoom: 17,
        }
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var marker = new google.maps.Marker({position: myLatLng, map :map,title : 'Laboratório do SMASH'});

        }


    /*----------------------------------------------------*/
    /*  Main Slider js
    /*----------------------------------------------------*/
    function main_slider(){
        if ( $('#main_slider').length ){
            $("#main_slider").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:5000,
                disableProgressBar:"off",
                spinner : "spinner7",
                RewindatSlideStart:"on",
                NextSlideonEnd:"on",
                // stopAfterLoops : "1",
                // stopAtSlide:1,
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:820,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 5,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 5,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels:[4096,1320,1199,992,767,480],
                gridwidth:[1170,1170,960,720,700,300],
                gridheight:[900,900,900,800,500,500],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    }
    main_slider();
    function main_slider_robots(){
        if ( $('#main_slider_robots').length ){
            $("#main_slider_robots").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:5000,
                disableProgressBar:"off",
                spinner : "spinner3",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:820,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 5,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 5,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels:[4096,1320,1199,992,767,480],
                gridwidth:[1170,1170,960,720,700,300],
                gridheight:[500,500,500,500,500,500],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    }
    main_slider_robots();


    function main_slider_equipe(){
        if ( $('#main_slider_equipe').length ){
            $("#main_slider_equipe").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:5000,
                disableProgressBar:"off",
                spinner : "spinner3",
                // stopAfterLoops : "1",
                // stopAtSlide:1,
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"zeus",
                        enable:false,
                        hide_onmobile:true,
                        hide_under:820,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 5,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 5,
                            v_offset: 0
                        }
                    },
                },
                responsiveLevels:[4096,1320,1199,992,767,480],
                gridwidth:[1170,1170,960,720,700,300],
                gridheight:[600,600,600,600,500,500],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    }
    main_slider_equipe();


    /*----------------------------------------------------*/
    /*  Skill Slider
    /*----------------------------------------------------*/
    function progressBarConfig () {
	  var progressBar = $('.progress');
	  if(progressBar.length) {
	    progressBar.each(function () {
	      var Self = $(this);
	      Self.appear(function () {
	        var progressValue = Self.data('value');

	        Self.find('.progress-bar').animate({
	          width:progressValue+'%'
	        }, 1000);

	        Self.find('.number').countTo({
	          from: 0,
	            to: progressValue,
	            speed: 1000
	        });
	      });
	    })
	  }
	}
    progressBarConfig ();

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    if($(window).width()>992){
        $('.service_area').parallax("50%", 0.4);
        $('.project_area').parallax("50%", 0.4);
    }



    /*----------------------------------------------------*/
    /*  Explor Room Slider
    /*----------------------------------------------------*/
    function testimoninals_carousel(){
        if ( $('.testimonials_slider').length ){
            $('.testimonials_slider').owlCarousel({
                loop:true,
                margin: 0,
                items: 1,
                nav:true,
                autoplay: true,
                smartSpeed: 1500,
                dots:false,
                navContainer: '.testimonials_slider',
                navText: ['<i class="ti-angle-left" aria-hidden="true"></i>','<i class="ti-angle-right" aria-hidden="true"></i>'],
            })
        }
    }
    testimoninals_carousel();

    /*----------------------------------------------------*/
    /* Offcanvas Menu js
    /*----------------------------------------------------*/
    $('.icon_search, .ti-close').on('click',function(){
        if( $(".search_area").hasClass('open') ){
            $(".search_area").removeClass('open')
        }
        else{
            $(".search_area").addClass('open')
        }
        return false
    });

    /*----------------------------------------------------*/
    /*  Google map js
    /*----------------------------------------------------*/

    if ( $('#mapBox').length ){
        var $lat = $('#mapBox').data('lat');
        var $lon = $('#mapBox').data('lon');
        var $zoom = $('#mapBox').data('zoom');
        var $marker = $('#mapBox').data('marker');
        var $info = $('#mapBox').data('info');
        var $markerLat = $('#mapBox').data('mlat');
        var $markerLon = $('#mapBox').data('mlon');
        var map = new GMaps({
        el: '#mapBox',
        lat: $lat,
        lng: $lon,
        scrollwheel: false,
        scaleControl: true,
        streetViewControl: false,
        panControl: true,
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        zoom: $zoom,
            styles: [
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e9e9e9"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dedede"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                }
            ]
        });

        map.addMarker({
            lat: $markerLat,
            lng: $markerLon,
            icon: $marker,
            infoWindow: {
              content: $info
            }
        })
    }


})(jQuery)
