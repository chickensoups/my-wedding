$(document).ready(function() {
    $('#counter').countdownCube({
        target: new Date('February 11, 2017 11:30:00'),
        cubeSize: 150,
        background: 'rgba( 255, 150, 150, 0.8 )',
        color: 'white',
    });

    $("#gallery").unitegallery({
        gallery_skin: "grid",
        gallery_images_preload_type: "all",

        gallery_width: 2700,
        gallery_height: 1200,
        thumb_width: 160,
        thumb_height: 100,

        slider_scale_mode: "fit",
        slider_enable_zoom_panel: false,
        slider_textpanel_title_font_size: 50
    });
});
