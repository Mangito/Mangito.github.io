const slides = document.querySelectorAll(".Slide");

const btnLeft = document.getElementById("ArrowLeft");
const btnRight = document.getElementById("ArrowRight");

let actualSlide = 0;

btnLeft.addEventListener("click", () => {
	if (actualSlide > 0) actualSlide--;
	show();
});

btnRight.addEventListener("click", () => {
	if (actualSlide < slides.length - 1) actualSlide++;
	show();
});

show();
function show() {
	// Disable Buttons
	// btnLeft.disabled = actualSlide <= 0 ? true : false;
	// btnRight.disabled = actualSlide >= slides.length - 1 ? true : false;

	slides.forEach(s => {
		s.style.display = "none";
	});
	slides[actualSlide].style.display = "flex";
}
