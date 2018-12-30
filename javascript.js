
var slideIndex,slides;
function initGallery(){
  slideIndex=0;
  slides=document.getElementsByClassName("imageHolder");
  slides[slideIndex].style.opacity=1;
  
  if(slides.length<2){
        var nextPrevBtns=document.querySelector(".leftArrow,.rightArrow");
        nextPrevBtns.style.display="none";
        for (i = 0; i < nextPrevBtn.length; i++) {
            nextPrevBtn[i].style.display="none";
        }
    }
}

initGallery();

function plusSlides(n){
   moveSlide(slideIndex+n);
}

function moveSlide(n){
    var i,current,next;
    var moveSlideAnimClass={
          forCurrent:"",
          forNext:""
    }
    if(n>slideIndex) {
        if(n >= slides.length){n=0}
        moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
        moveSlideAnimClass.forNext="moveLeftNextSlide";
    }else if(n<slideIndex){
        if(n<0){n=slides.length-1}
        moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
        moveSlideAnimClass.forNext="moveRightPrevSlide";
    }
      if(n!=slideIndex){
        next = slides[n];
        current=slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "imageHolder";
            slides[i].style.opacity=0;
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        slideIndex=n;
       
    }
     
}

var timer=null;
function setTimer(){
    timer=setInterval(function () {
        plusSlides(1) ;
    },3000);
}
setTimer();
function playPauseSlides() {
    var playBtn=document.getElementById("play");
    var pauseBtn=document.getElementById("pause")
    if(timer==null){
        setTimer();
        pauseBtn.style.opacity=1;
        playBtn.style.opacity=0;
    }else{
        clearInterval(timer);
        timer=null;
        playBtn.style.opacity=1;
        pauseBtn.style.opacity=0;
    }
}

document.addEventListener("keydown", function(e) {
         if (e.keyCode == '37') {
            document.getElementsByClassName("arrowLeft")[0].click();
         }
         else if (e.keyCode == '39') {
             document.getElementsByClassName("arrowRight")[0].click();
         }
     });
