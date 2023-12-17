
//Carousel//
const Pictures = document.getElementsByClassName("carouselPictures");
const selectedDots = document.getElementsByClassName("Dot");

window.onload = () => {
    //Activates the first white selected dot on page load// 
    selectedDots[0].classList.add("activeDot");
  };

const Slide1 = () => {
    //Change Images//
    Pictures[0].src="images/carouselImage1.png"
    Pictures[1].src="images/carouselImage2.png"
    Pictures[2].src="images/carouselImage1.png"
    Pictures[3].src="images/carouselImage2.png"

    //Add/Remove white selected dots//
    selectedDots[0].classList.add("activeDot");
    selectedDots[1].classList.remove("activeDot");
    selectedDots[2].classList.remove("activeDot");
}

const Slide2 = () => {
    //Change Images//
    Pictures[0].src="images/carouselImage1.png"
    Pictures[1].src="images/carouselImage1.png"
    Pictures[2].src="images/carouselImage1.png"
    Pictures[3].src="images/carouselImage1.png"

    //Add/Remove white selected dots//
    selectedDots[1].classList.add("activeDot");
    selectedDots[0].classList.remove("activeDot");
    selectedDots[2].classList.remove("activeDot");
}

const Slide3 = () => {
    //Change Images//
    Pictures[0].src="images/carouselImage2.png"
    Pictures[1].src="images/carouselImage2.png"
    Pictures[2].src="images/carouselImage2.png"
    Pictures[3].src="images/carouselImage2.png"

    //Add/Remove white selected dots//
    selectedDots[2].classList.add("activeDot");
    selectedDots[0].classList.remove("activeDot");
    selectedDots[1].classList.remove("activeDot");
}


//Tabs/Accordion//
const mountain1Details =  document.getElementsByClassName("scheduleContainer");
const mountain2Details =  document.getElementsByClassName("scheduleContainer");

const mountain1Accordion = () => {
    //Change Mountain Details//
    mountain2Details[1].style.display = "none";
    mountain2Details[0].style.display = "block";
}

const mountain2Accordion = () => {
    //Change Mountain Details//
    mountain2Details[1].style.display = "block";
    mountain2Details[0].style.display = "none";
}

