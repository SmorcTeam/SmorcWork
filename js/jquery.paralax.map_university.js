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


var slideIndex = 1;
showSlides(slideIndex).

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n)
}
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    if(n > slides.length){
       slideIndex=slides.length 
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active","");
    }
    slides[slideIndex-1].slide.display = "block";
    dots[slideIndex-1].className += "active";
}