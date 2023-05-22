const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImg = document.querySelector(".banner-img");
const dots = document.querySelectorAll(".dot");
var slidePosition = 0;

function SetActive () {
	
	dots.forEach(dot => {
		dot.classList.remove('dot_selected');
		}
	);
	dots[slidePosition].classList.add('dot_selected');
	console.log(dots);
}


function SetImage () {
	bannerImg.src = "./assets/images/slideshow/" + slides[slidePosition].image;
	document.querySelector("#banner > p").innerHTML = slides[slidePosition].tagLine;
}


function SetNext () {
	
	if (slidePosition < slides.length -1 )
		{
			slidePosition ++ ;
		} 
		else {
			slidePosition = 0;
		}

	SetImage();
	SetActive();
}

function SetPrev () {
	
	if (slidePosition === 0 )
		{
			slidePosition = slides.length -1;
		} 
		else {
			slidePosition --;
		}

	SetImage();
	SetActive();
}

arrowLeft.addEventListener("click",  SetPrev);
arrowRight.addEventListener("click",  SetNext);

