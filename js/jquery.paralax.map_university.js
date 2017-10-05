$(function () {
    $(document).on('mousemove', function (e) {
        $('.map_university_circle1').css({
            left: -e.pageX / 10 + 100,
            top: -e.pageY / 10 + 100
        });
        $('.map_university_circle2').css({
            left: e.pageX / 10 + 200,
            top: e.pageY / 10 + 200
        });
         $('.map_university_circle3').css({
            left: e.pageX / 50 + 100,
            top: e.pageY / 50 + 100
        });
    });
});