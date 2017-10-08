$(function () {
    $(document).on('mousemove', function (e) {
        $('.map_university_circle1').css({
            left: -e.pageX / 10 + 100,
            top: -e.pageY / 10 + 225
        });
        $('.map_university_circle2').css({
            left: e.pageX / 8 + 300,
            top: e.pageY / 8 + 125
        });
         $('.map_university_circle3').css({
            left: -e.pageX / 30 + 700,
            top: -e.pageY / 30 + 1
        });
    });
});