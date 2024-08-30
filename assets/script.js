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

const prevButton = document.getElementById('arrow-left');
const nextButton = document.getElementById('arrow-right');

let currentIndex = 0;

const dotsContainer = document.querySelector('.dots');

function createDots(){
	slides.forEach((_, index) => {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		dot.dataset.index = index;
		dotsContainer.appendChild(dot);
	})
}

function highlightDot(activeIndex){
	const dots = document.querySelectorAll('.dot');

	dots.forEach((dot, index) => {
		dot.classList.toggle('dot_selected', index === activeIndex);
	})
}

// On itère sur chaque slide de notre tableau Slides
// Si i est égal à index - Si l'index actuel est égal à l'index de la slide, on ajoute
//la class 'active' avec la méthode toggle.
//Le deuxième paramètre de cette méthode est un booléen - si il vaut true, on ajoute la classe
//Si il vaut false, on retire la class
// En résumé, si l'index de la slide actuelle = à l'index passé en argument,
// On ajoute la classe 'active' à notre slide, et on la supprime de toutes les autres.
function showSlide(index){
	const slideContainer = document.getElementById('banner');
    const tagLine = document.getElementById('tagline');

	slideContainer.style.backgroundImage = "url('assets/images/slideshow/" + slides[index].image + "')";
	tagLine.innerHTML = slides[index].tagLine;
}

function nextSlide(){
	currentIndex = (currentIndex + 1) % slides.length;
	showSlide(currentIndex);
	highlightDot(currentIndex);
}

function prevSlide(){
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	showSlide(currentIndex);
	highlightDot(currentIndex);
}


prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

createDots();
showSlide(currentIndex);
highlightDot(currentIndex);