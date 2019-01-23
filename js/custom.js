$(document).ready(function () {

    var i = 0;
    $(".slider-data .testimonial-box").each(function(i){
        if(i%2===0){
            $(this).addClass("white");
        }
        if(i%2===1){
            $(this).addClass("redBox");
        }
        i++;
    });


   
    
    
});
// $(document).ready(function(){
//     $(window).bind('scroll', function() {
//         var scrollTop = $(window).scrollTop();
//         var elementOffset = $('.card-1').offset().top;
//         var currentElementOffset = (elementOffset - scrollTop);
//         var floor = Math.abs(Math.floor(currentElementOffset))
//         if(currentElementOffset < 0){
//             $('.card-1').attr('style', 'transform: translateY('+floor+'px);');
//         }else{
//             $('.card-1').attr('style', 'transform: translateY('-''+floor+'px);');
//         }
//
//         console.log();
//     });
// });

//var x = $(".card-1").offset();



// animation js

// particlesJS("particles-js", {
//         "particles": {
//             "number": {
//                 "value":60, "density": {
//                     "enable": true, "value_area": 631.3181133058181
//                 }
//             }
//             , "color": {
//                 "value": "#ff003c"
//             }
//             , "shape": {
//                 "type":"edge", "stroke": {
//                     "width": 1, "color": "#ff003c"
//                 }
//                 , "polygon": {
//                     "nb_sides": 3
//                 }
//                 , "image": {
//                     "src": "img/github.svg", "width": 100, "height": 100
//                 }
//             }
//             , "opacity": {
//                 "value":0.49716301422833176, "random":true, "anim": {
//                     "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
//                 }
//             }
//             , "size": {
//                 "value":5.7, "random":true, "anim": {
//                     "enable": false, "speed": 40, "size_min": 0.1, "sync": false
//                 }
//             }
//             , "line_linked": {
//                 "enable": true, "distance": 160.3412060865523, "color": "#ec2a3b", "opacity": 0.4008530152163807, "width": 1
//             }
//             , "move": {
//                 "enable":true, "speed":3, "direction":"none", "random":true, "straight":false, "out_mode":"bounce", "bounce":false, "attract": {
//                     "enable": true, "rotateX": 1763.753266952075, "rotateY": 1603.4120608655228
//                 }
//             }
//         }
//         , "interactivity": {
//             "detect_on":"canvas", "events": {
//                 "onhover": {
//                     "enable": true, "mode": "grab"
//                 }
//                 , "onclick": {
//                     "enable": true, "mode": "push"
//                 }
//                 , "resize":true
//             }
//             , "modes": {
//                 "grab": {
//                     "distance":400, "line_linked": {
//                         "opacity": 0.156297557645007
//                     }
//                 }
//                 , "bubble": {
//                     "distance": 400, "size": 40, "duration": 2, "opacity": 0.09744926547616141, "speed": 3
//                 }
//                 , "repulse": {
//                     "distance": 200, "duration": 0.4
//                 }
//                 , "push": {
//                     "particles_nb": 4
//                 }
//                 , "remove": {
//                     "particles_nb": 2
//                 }
//             }
//         }
//         , "retina_detect":true
//     }
//
// );
//var count_particles,
 //   stats,
 //   update;
// stats=new Stats;
// stats.setMode(0);
// stats.domElement.style.position='absolute';
// stats.domElement.style.left='0px';
// stats.domElement.style.top='0px';
// document.body.appendChild(stats.domElement);
// count_particles=document.querySelector('.js-count-particles');
// update=function() {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//         count_particles.innerText=window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
// };
// requestAnimationFrame(update);

