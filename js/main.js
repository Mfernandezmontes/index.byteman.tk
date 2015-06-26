$(document).ready(function () {

    //Redireccionamos a #slide-main
    $(location).attr('href', '#slide-main');


    //Buscamos el tipo de dispositivo con el que se esta viendo la web
    $.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));

    //Si NO es un dispositivo movil
    if ($.browser.device == false) {

        //cargamos video
        $("#player").mb_YTPlayer();
    }

});

